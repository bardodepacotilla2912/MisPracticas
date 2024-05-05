for(let x=0; x<5; x++){
    if(x==2)
        continue;
    console.log(x);
}

let a= 10;
a= a+5;
a+=5;

let x = 10;
x **= 2;
console.log(x);

//tipo fecha
const fecha = new Date("2024-05-03");
console.log(fecha);

function myFunction(p1=3, p2=2){
    return p1 * p2;
}

console.log(myFunction());
console.log(myFunction(5, 2));
console.log(myFunction(5));
console.log(myFunction);

function myFunction2(p1, p2){
    return p1 * p2;
}

let otraFuncion2 = (a,b)=> a*b
console.log(otraFuncion2(5, 2));

//funcion autoejecutable
//funcion anonima
(() =>console.log("esta es una funcion autoejecutable"))();

let alumno={
    nombre: "Abraham",
    apellido: "Rodríguez",
    matricula: 80259,
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(alumno.nombreCompleto());