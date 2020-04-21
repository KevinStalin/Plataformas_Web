function sumar(a, b) {
    return a + b;
}

console.log(`suma 3+4 = ${sumar(3,4)}`);


let suma = (a, b) => a + b;

console.log(`suma 3+4 = ${suma(3,4)}`);

let saludo = () => 'hola';

console.log(`${saludo()}`);

var deadpool = {
    nombre: 'wadee',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    getNombre: () => `${deadpool.nombre} ${deadpool.apellido} -poder ${deadpool.poder}`
}

console.log(deadpool.getNombre());