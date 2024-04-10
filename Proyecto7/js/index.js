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

let factorial = () => {
    let num = resultado.value;
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total = total * i;
    }
    resultado.value = total;
}

let LogaritmoNatural = () => {
    resultado.value = Math.log(resultado.value);
}

let Cubo = () => {
    resultado.value = resultado.value * resultado.value * resultado.value;
}

let Emular = () => {
    resultado.value = Math.exp(resultado.value);
}



