let resultado = document.getElementById('Resulatdo');

function asignar(valor){
    resultado.value += valor;
}

let limpiar =() => {
    resultado.value = " ";
}

let calcular = () => {
    resultado.val = eval(resultado.value);
}

let SquareRoot = () => {
    resultado.value = Math.sqrt(resultado.value);
}

let porcentaje = () => {
    resultado.value = resultado.value / 100;
}

let cuadrado = () => {
    resultado.value = resultado.value * resultado.value;
}

let Coseno = () => {
    resultado.value = Math.cos(resultado.value);
}



