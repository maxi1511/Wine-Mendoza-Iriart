
class Cliente {
    constructor(nombre, telefono, direccion) {

    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
  }
}
  class Producto {
      constructor (id, nombre, precio, destacado, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.destacado = destacado;
    this.imagen = imagen;
  }
}
  
  function Pedido () {
    this.cliente = undefined;
    this.items = [];
    this.total = 0;
    var fecha = new Date();
    fecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
    this.fecha = fecha;
  }

  $(document).ready(() => {
  
  $(".agregarCarrito").hover(function(){

    $(this).css("background-color", "darkgreen");
  }, function(){

    $(this).css("background-color", "white");
  });  
  
  $(".imagenesProducto").click(function(){
    $(this).animate({
      opacity: '0.5',
      width: '1200px'
    });
  });  

  });

