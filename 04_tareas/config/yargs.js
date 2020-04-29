const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de tarea'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado pendiente tarea'
}

const argv = require('yargs')
    .command('crear', 'crea tarea', { descripcion })
    .command('actualizar', 'crea tarea', { descripcion, completado })
    .command('borrar', 'crea tarea', { descripcion })
    .argv;

module.exports = {
    argv
}