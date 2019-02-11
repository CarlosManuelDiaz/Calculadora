var miCalculadora;
class CalculadoraClass {
    constructor() {
        this.resultado = "";
        this.numero1 = "";
        this.numero2 = "";
        this.operador = "";
    }

    get getNumero1() { return parseFloat(this.numero1); }
    set setNumero1(value) { this.numero1 = value; }

    get getNumero2() { return parseFloat(this.numero2); }
    set setNumero2(value) { this.numero2 = value; }

    get getResultado() { return this.resultado; }
    set setResultado(value) { this.resultado = value; }

    get getOperador() { return this.operador; }
    set setOperador(value) { this.operador = value; }

    sumar() {
        this.resultado = this.getNumero1 + this.getNumero2;
    }
    restar() {
        this.resultado = this.getNumero1 - this.getNumero2;
    }
    multiplicar() {
        this.resultado = this.getNumero1 * this.getNumero2;
    }
    dividir() {
        try {
            if (this.getNumero2 === 0 && this.getOperador === '/') {
                throw "No se puede dividir entre 0";
            } else {
                this.resultado = this.getNumero1 / this.getNumero2;
            }
        } catch (error) {
            this.setResultado = error;
        }
    }
    igualar() {

        switch (this.getOperador) {
            case `+`:
                this.sumar();
                break;
            case `-`:
                this.restar();
                break;
            case `/`:
                this.dividir();
                break;
            case `*`:
                this.multiplicar();
                break;
            default:
                break;
        }
        this.setNumero1 = this.getResultado;
        this.setNumero2 = "";
        this.setOperador = "";
    }
    reset() {
        this.setNumero1 = "";
        this.setNumero2 = "";
        this.setOperador = "";
        this.setResultado = document.getElementById('pantalla').innerHTML = (0);
    }
}
function botonNumerico(numero) {
    if (miCalculadora.operador == "") {
        miCalculadora.numero1 += numero.toString();
        document.getElementById('pantalla').innerHTML = (miCalculadora.getNumero1);
    } else {
        miCalculadora.numero2 += numero.toString();
        document.getElementById('pantalla').innerHTML = (miCalculadora.getNumero2);
    }
    miCalculadora.resultado = (miCalculadora.numero1 + miCalculadora.operador + miCalculadora.numero2);
    document.getElementById('pantalla').innerHTML =(miCalculadora.getResultado);
}
function crearCalculadora() {
    miCalculadora = new CalculadoraClass("");
    console.log(miCalculadora);
}
function botonOperador(operador) {
    miCalculadora.operador = operador;
    document.getElementById('pantalla').innerHTML =(miCalculadora.getOperador);
}
function botonIgualar() {
    miCalculadora.igualar();
    document.getElementById('pantalla').innerHTML =(miCalculadora.getResultado);
}
function botonreset() {
    miCalculadora.reset()
};




