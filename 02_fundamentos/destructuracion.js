let deadpool = {
    nombre: 'wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} -poder ${this.poder}`;
    }
}

console.log(deadpool.nombre);

let { nombre: priN, apellido, poder } = deadpool;
console.log(nombre, apellido, poder);