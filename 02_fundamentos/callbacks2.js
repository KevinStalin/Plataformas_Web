let empleados = [{
        id: 1,
        nombre: "Kevin"
    },
    {
        id: 2,
        nombre: "Stalyn"
    },
    {
        id: 3,
        nombre: "Mela"
    }

];

let salario = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];

//LA INVOCACION DEL CALLBACK NO ES UN RETURN
//por eso va dentro de un else
let getEmpleado = (id, callback) => {
        let empleadoDB = empleados.find(emple => emple.id === id)
            //console.log(empleadoDB);  // si ago esto no estoy aplicando el concepto de callbacks
            //seria asi:
        callback(empleadoDB);
    }
    //si coloca un id que no este regrsa un indefine
getEmpleado(10, (usuario) => {
    console.log("Mi: ", usuario);
    console.log(`Mi: ${usuario}`);
});
//*********************/
let getEmpleado2 = (id, callback) => {
        let empleadoDB = empleados.find(emple => emple.id === id)
        console.log("EmplE: ", empleadoDB);
        if (!empleadoDB) {
            console.log(`no existe el usuario con id ${id}`);
        } else {
            callback(null, empleadoDB);
        }
    }
    //si coloca un id que no este regrsa un indefine

let getSalario = (empleado, callback) => {
    let salarioE = salario.find(sal => sal.id === empleado.id)
    console.log("sal E", salarioE);
    if (!salarioE) {
        console.log(`no existe salario con id ${empleado.id}`);
    } else {
        //se agrega el objeto para que salga en nombre 
        callback(null, { nombre: empleado.nombre, salrio: salarioE.salario });
        //callback(null, salarioE);//manera bn echa pero sin arreglo que tenga el nombre
    }
}

getEmpleado2(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log("este es objeto", usuario);
    getSalario(usuario, (err2, salE) => {
        if (err2) {
            return console.log(err2);
        }
        console.log("sal", salE);

    });
});