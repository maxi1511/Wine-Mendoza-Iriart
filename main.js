let vino = 0;
let cantidadVino = 0;
let precio = 0;

class Pedido {
    constructor(vino, precio, cantidad){
        this.vino = vino,
        this.precio = precio,
        this.cantidad = cantidad,
        this.envio = 0,
        this.subTotal = 0,
        this.total = 0
    }

    calcularSubTotal() {
        this.subTotal = this.precio * this.cantidad;
    }

    calcularIva() {
        return this.subTotal * 0.21;
    }

    calcularEnvio() {
        if(this.cantidad >= 6) {
            this.envio = 0;
        } else {
            this.envio = 650;
        }
    }

    calcularTotal() {
        this.total = this.subTotal + this.envio + this.calcularIva();
    }
}


function pedidoVino() {
    while(!vino || vino == 0 || vino > 4) {
        vino = parseInt(prompt("¿Qué vino desea comprar?:\n 1: Malbec($700)\n 2:Cabernet($800)\n 3:Blend($850)\n 4:Merlot($640)"));
    }

    switch(vino){
        case 1:
            vino = "Malbec";
            precio = 700;
            break;
        case 2:
            vino = "Cabernet";
            precio = 800;
            break;
        case 3:
            vino = "Blend";
            precio = 850;
            break;
        case 4:
            vino = "Merlot";
            precio = 640;
            break;
    }

    while(!cantidadVino || cantidadVino == 0){
        cantidadVino = parseInt(prompt("Vino elegido: "+ vino + "\n Introduzca la cantidad deseada.(sólo números)"));
    }

    return new Pedido(vino, precio, cantidadVino)
}

alert("Bienvenida/o a Wine Mendoza");

const pedido = pedidoVino();

pedido.calcularSubTotal();
pedido.calcularIva();
pedido.calcularEnvio();
pedido.calcularTotal();

alert("Detalle del pedido:\n"+
    "- " + pedido.vino + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad +"\n" +
    "- IVA 21%: $" + pedido.calcularIva() + "\n" +
    "- Costo de envío: $" + pedido.envio + "\n" +
    "Total = $" + pedido.total
);