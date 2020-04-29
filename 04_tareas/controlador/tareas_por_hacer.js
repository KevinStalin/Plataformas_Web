const fs = require('fs');

let tareasporhacer = [];

const cargarDB = () => {
    try {
        tareasporhacer = require('../modelo/data.json');
    } catch (err) {
        tareasporhacer = [];
    }
}

let guardarDB = () => {
    let data = JSON.stringify(tareasporhacer);
    fs.writeFile('./modelo/data.json', data, (err) => {
        if (err) throw new Error('no se pudo guardar tarea', err)
    })
}
const crear = (des) => {
    cargarDB();
    let tarea = {
        des,
        completado: false
    }
    tareasporhacer.push(tarea);
    guardarDB();
    return tarea;

}

const getLista = () => {
    cargarDB();
    return tareasporhacer;
}

let actualizar = (descripcion, estado = true) => {
    cargarDB();
    let index = tareasporhacer.findIndex(tarea => tarea.des === descripcion)
    if (index >= 0) {
        tareasporhacer[index].completado = estado;
        guardarDB();
        return tareasporhacer;
    }
}

let borrar = (des) => {
    cargarDB();
    let index = tareasporhacer.findIndex(tarea => tarea.des === des)
    if (index >= 0) {
        //tareasporhacer[index] = null;
        delete tareasporhacer[index];
        guardarDB();
        return tareasporhacer;
    }

}

module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}