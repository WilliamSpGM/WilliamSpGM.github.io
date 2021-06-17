const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});



const displayValorAnterior2 = document.getElementById('valor-anterior2');
const displayValorActual2 = document.getElementById('valor-actual2');
const botonesNumeros2 = document.querySelectorAll('.numero2');
const botonesOperadores2 = document.querySelectorAll('.operador2');

const display2 = new Display2(displayValorAnterior2, displayValorActual2);

botonesNumeros2.forEach(boton2 => {
    boton2.addEventListener('click', () => display2.agregarNumero2(boton2.innerHTML));
});

botonesOperadores2.forEach(boton2 => {
    boton2.addEventListener('click', () => display2.computar2(boton2.value))
});