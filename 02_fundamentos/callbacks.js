// callback nos permite ejecutar aciones que se van a implementar despues de algo
// El callback seria la funcion

let getUsuarioById = (id, nik, callback) => {
    let n = nik + "ramirez";
    let usuario = {
        nombre: n,
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${id} no existe`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(20, 'Kevin', (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log("usuario de la BDD: ", usuario);
    //console.log(`Usuario de BDD ${usuario}`);

});