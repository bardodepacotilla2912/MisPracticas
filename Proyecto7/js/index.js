let resultado = document.getElementById('Resulatdo');

let asignar = (valor) =>{
    resultado.value += valor;
}

let limpiar =() => {
    resultado.value = " ";
}

let calcular = () => {
    resultado.val = eval(resultado.value);
}
