const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        //validar que la base sea un numero
        if (!Number(base)) {
            reject(`valor de la base ${base} no es valido`);
            return
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }
        //fs.writeFile(`tablas/tabla-${base}.txt`, data, { flag: 'a' }, (err) => {
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) { reject(err); }
            resolve(`Archivo tabla del ${base} ha sido guardado`);
        });
    });
}
let crearArchivo2 = async(base, limite) => {
    //validar que la base sea un numero
    if (!Number(base)) {
        throw new Error(`valor de la base ${base} no es valido`);
    }
    if (!Number(limite)) {
        throw new Error(`valor del limite ${limite} no es valido`)
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} = ${base*i}\n`;
    }
    //fs.writeFile(`tablas/tabla-${base}.txt`, data, { flag: 'a' }, (err) => {
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) {
            throw new Error(err);
        }
    });
    return `Archivo tabla del ${base} ha sido guardado`;
}
let getrespuesta = async(base) => {
    let crear = await crearArchivo2(base)
    return crear;
}
let listartabla = async(base, limite) => {
    if (!Number(base)) {
        throw new Error(`valor de la base ${base} no es valido`.red);
    }
    if (!Number(limite)) {
        throw new Error(`valor del limite ${limite} no es valido`.red)
    }
    let data = '';
    console.log('=================================='.green);
    console.log('Tabla de multiplicar'.green);
    console.log('=================================='.green);
    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} = ${base*i}\n`;
    }
    return data;
}
module.exports = {
    crearArchivo2,
    listartabla
}