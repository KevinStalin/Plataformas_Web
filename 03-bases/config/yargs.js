//usando destructuracion cojo directamnete la funcion
//**la configuracion de yargs defaul tiene mas prioridad que poner por defecto un valor en la funcion listar(b,l=10) */
let opc = { base: { demand: true, alias: 'b' }, limite: { alias: 'l', default: 10 } }
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opc)
    .command('crear', 'crea un archivo de la tabla multiplicar', opc)
    .help()
    .argv;

module.exports = {
    argv
}