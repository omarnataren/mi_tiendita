export class VentasComponent {
  ticketVisible: boolean = false;
  productosSeleccionados: any[] = []; // Array con los productos de la venta

  mostrarTicket() {
    this.ticketVisible = true;
  }
}
