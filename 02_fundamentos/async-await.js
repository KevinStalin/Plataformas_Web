let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kevin");
        }, 3000);
        //reject("Error al consultar el nombre");
    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log("Error en el Saludo:", err);
});
//************ */