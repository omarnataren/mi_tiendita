import { Component, inject } from '@angular/core';
import { RolUsuario, Usuario, UsuarioEdicion, UsuarioPost, } from '../../interfaces/Usuarios.model';
import { UserService } from '../../services/usuario.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { merge, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-usuarios',
  imports: [ReactiveFormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

  private userService = inject(UserService);
  private fb = inject(FormBuilder);

  mostrarModalCrear = false;
  mostrarModalEditar = false;
  mostrarModalEliminar = false;
  menuAbierto: number | null = null;

  usuarios : Usuario[] = [];
  usuarioIdSeleccionado: number | null = null;
  usuarioSeleccionado: Usuario | null = null;

  readonly postForm: FormGroup;
  readonly editForm: FormGroup;

  searchCtrl = this.fb.control('', { nonNullable: true });
  
  constructor() {
    this.postForm =  this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rol: [null as RolUsuario | null, [Validators.required]]
    });

    this.editForm =  this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      rol: [null as RolUsuario | null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getUsuarios();
    const value$ = this.searchCtrl.valueChanges.pipe(
      map(v => v.trim()),
      distinctUntilChanged()
    );
    const every3chars$ = value$.pipe(
      filter(v => v.length > 0 && v.length % 3 === 0)
    );
    const pause$ = value$.pipe(
      debounceTime(500)
    );

    merge(every3chars$, pause$).pipe(
      distinctUntilChanged(),
      switchMap(q => {
        if (!q) return this.userService.getUsuarios();
        return  this.userService.searchUsuarios(q).pipe(
          catchError(err => {
            console.error('Error al buscar usuarios', err);
            return of([])
          })
        )
      })
    ).subscribe(data => {
      this.usuarios = data;
    });
  }


  // LISTAR
  getUsuarios(): void {
    this.userService.getUsuarios().subscribe({
        next: (data) => {
          console.log(data);
          this.usuarios = data;
        },
        error: (e)=> console.error(e)
    });
  }

  //MENU
  abrirMenu(usuario_id: number): void {
    this.menuAbierto = usuario_id;
  }

  cerrarMenu(): void {
    this.menuAbierto = null;
  }

  // Crear
  abrirModalCrear(): void {
    this.postForm.reset({ rol: null });
    this.mostrarModalCrear = true;
  }

  cerrarModalCrear(): void {
    this.mostrarModalCrear = false;
  }

  guardarUsuario(): void {  
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }
    const payload = this.postForm.value as UsuarioPost;
    this.userService.postUsuario(payload).subscribe({
      next: () => {
        this.cerrarModalCrear();  
        this.getUsuarios();
      },
      error: err => {
        console.error('Error creando usuario', err);
      }
    });
  }

  // EDITAR
  abrirModalEditar(usuario: Usuario): void {
    this.usuarioIdSeleccionado = usuario.usuario_id;
    this.editForm.reset({
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
    });
    this.mostrarModalEditar = true;
    this.cerrarMenu();
  }

  cerrarModalEditar(): void {
    this.mostrarModalEditar = false;
    this.usuarioIdSeleccionado = null;
  }

  guardarCambios(): void {
    if (this.editForm.invalid || this.usuarioIdSeleccionado == null) {
      this.editForm.markAllAsTouched();
      return;
    }

    const payload = this.editForm.value as UsuarioEdicion;

    this.userService.putUsuario(this.usuarioIdSeleccionado, payload).subscribe({
        next: () => {
          this.cerrarModalEditar();
        this.getUsuarios();
        },
        error: (e) => {
          console.error('Error al actualizar usuario:', e);
        }
    });
  }

  // =========================
  // ELIMINAR
  // =========================
  abrirModalEliminar(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
    this.usuarioIdSeleccionado = usuario.usuario_id;
    this.mostrarModalEliminar = true;
    this.cerrarMenu();
  }
  
  cerrarModalEliminar(): void {
    this.mostrarModalEliminar = false;
    this.usuarioIdSeleccionado = null;
    this.usuarioSeleccionado = null;
  }

  confirmarEliminar(): void {
    if (this.usuarioIdSeleccionado == null) return;

    this.userService.deleteUsuario(this.usuarioIdSeleccionado).subscribe({
      next: () => {
        this.cerrarModalEliminar();
        this.getUsuarios();
      },
      error: (e) => console.error('Error al eliminar usuario', e),
    });
  }


}
