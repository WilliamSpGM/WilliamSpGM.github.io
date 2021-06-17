class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.resultado = new Display2();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        this.valorActual = numero;
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
    calcular2() {
        const valorAnterior2 = parseFloat(this.valorAnterior2);
        const valorActual2 = parseFloat(this.valorActual2);

        if( isNaN(valorActual2)  || isNaN(valorAnterior2) ) return
        this.valorActual2 = this.calculador2[this.tipoOperacion2](valorAnterior2, valorActual2);
    }
}



class Display2 {
    constructor(displayValorAnterior2, displayValorActual2) {
        this.displayValorActual2 = displayValorActual2;
        this.displayValorAnterior2 = displayValorAnterior2;
        this.calculador2 = new Calculadora();
        this.tipoOperacion2 = undefined;
        this.valorActual2 = '';
        this.valorAnterior2 = '';
        this.signos2 = {
            sumar2: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrar2() {
        this.valorActual2 = this.valorActual2.toString().slice(0,-1);
        this.imprimirValores2();
    }

    borrarTodo2() {
        this.valorActual2 = '';
        this.valorAnterior2 = '';
        this.tipoOperacion2 = undefined;
        this.imprimirValores2();
    }

    computar2(tipo2) {
        this.tipoOperacion2 !== 'igual' && this.calcular2();
        this.tipoOperacion2 = tipo2;
        this.valorAnterior2 = this.valorActual2 || this.valorAnterior2;
        this.valorActual2 = '';
        this.imprimirValores2();
    }

    agregarNumero2(numero2) {
        this.valorActual2 = numero2;
        this.imprimirValores2();
    }

    imprimirValores2() {
        this.displayValorActual2.textContent = this.valorActual2;
        this.displayValorAnterior2.textContent = `${this.valorAnterior2} ${this.signos2[this.tipoOperacion2] || ''}`;
    }
    calcular2() {
        const valorAnterior2 = parseFloat(this.valorAnterior2);
        const valorActual2 = parseFloat(this.valorActual2);

        if( isNaN(valorActual2)  || isNaN(valorAnterior2) ) return
        this.valorActual2 = this.calculador2[this.tipoOperacion2](valorAnterior2, valorActual2);
    }
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}