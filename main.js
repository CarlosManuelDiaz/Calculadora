var miCalculadora;

class CalculadoraClass {

    constructor() {
        this.resultado = "";
        this.numero1 = "";
        this.numero2 = "";
        this.operador = "";
    }

    get getnumero1() {
        return parseInt(this.numero1);
    }
    set setnumero1(value) {
        this.numero1 = value;
    }
    get getnumero2() {
        return parseInt(this.numero2);
    }
    set setnumero2(value) {
        this.numero2 = value;
    }
    get getresultado() {
        return this.resultado;
    }
    set setresultado(value) {
        this.resultado = value;
    }
    get getoperador() {
        return this.operador;
    }
    set setoperador(value) {
        this.operador = value;
    }
    sumar() {
        this.resultado = this.getnumero1 + this.getnumero2;
    }
    restar() {
        this.resultado = this.getnumero1 - this.getnumero2;
    }
    multiplicar() {
        this.resultado = this.getnumero1 * this.getnumero2;
    }
    dividir() {
        this.resultado = this.getnumero1 / this.getnumero2;
    }
    igualar() {
        switch (this.getoperador) {
            case `+`:
                this.sumar();
                break;
            case `-`:
                this.restar()
                break;
            case `*`:
                this.multiplicar()
                break;
            case `/`:
                this.dividir()
                break;
            default:
                break;
        }
        this.setnumero1 = "";
        this.setnumero2 = "";
        this.setoperador = "";
    }



}


function botonNumerico(numero) {
    // miCalculadora.numero1 += numero.toString();
    // miCalculadora.numero2 += numero.toString();
    if (miCalculadora.getoperador == "") {
        miCalculadora.numero1 += numero.toString();
    } else {
        miCalculadora.numero2 += numero.toString();
    }
    miCalculadora.setresultado = (miCalculadora.numero1 + miCalculadora.operador + miCalculadora.numero2)
    console.log("el resultado es " + miCalculadora.getresultado)
    // console.log("El número1: " + miCalculadora.getnumero1);
    // console.log("El número2: " + miCalculadora.getnumero2);

}
function botonOperador(operador) {
    miCalculadora.operador = operador

}
function botonIgualar() {
    miCalculadora.igualar();
    console.log(miCalculadora.getresultado);
}

function crearCalculadora() {
    miCalculadora = new CalculadoraClass("");
    console.log(miCalculadora);
}

