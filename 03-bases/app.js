var colors = require('colors/safe');
const argv = require('./config/yargs').argv;
const { crearArchivo2, listartabla } = require('./multiplicar/multiplicar');
//console.log(argv);
//console.log(argv.base, argv.limite);
//console.log(argv._[0]);
switch (argv._[0]) {
    case 'listar':
        listartabla(argv.base, argv.limite).then(men => console.log(colors.green(men))).catch(err => console.log(err.message));
        break;
    case 'crear':
        crearArchivo2(argv.base, argv.limite).then(men => console.log(colors.blue(men))).catch(err => console.log(err.message));
        break;
    default:
        console.log('Opcion no encontrada');
}
//console.log(process.argv);
//let base = process.argv[2].split('=')[1];