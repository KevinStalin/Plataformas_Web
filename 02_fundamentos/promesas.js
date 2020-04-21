let empleados = [{ id: 1, nombre: "Kevin" }, { id: 2, nombre: "Stalyn" }, { id: 3, nombre: "Mela" }];

let salarios = [{ id: 1, salario: 800 }, { id: 2, salario: 950 }];
//instanciamos la promesa donde en reject se guardara si ocurre algun error al momento de la ejecucion
//y en resolve se guardara si la operacion fue exitosa
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }
    });
}

getEmpleado(3).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}).catch(err => {
    console.log(err);
});