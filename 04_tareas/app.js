const argv = require('./config/yargs').argv;
const tarea = require('./controlador/tareas_por_hacer');

let comando = argv._[0];
console.log(comando);
switch (comando) {
    case 'crear':
        let tareas = tarea.crear(argv.descripcion);
        console.log(tareas);
        break
    case 'actualizar':
        let resp = tarea.actualizar(argv.descripcion, argv.completado);
        console.log(resp);
        break
    case 'borrar':
        let res = tarea.borrar(argv.descripcion)
        console.log(res);
        break
    case 'listar':
        let lista = tarea.getLista();
        console.log('====tareas====');
        for (let tarea of lista) {
            //console.log(tarea.des);
            console.log(`Descripcion: ${tarea.des}\nCompletado: ${tarea.completado}\n`);
        }
        console.log('==============');
        break
    default:
        console.log('comando no reconocido');
}