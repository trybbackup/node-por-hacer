const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do');
let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log(listado);
        for (let tarea of listado) {
            console.log('=====Por Hacer======');
            console.log(`${tarea.descripcion}`); /// Es  null por el delete
            console.log(`Estado: ${tarea.completado}`);
            console.log('====================');
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

/*
    { _: [], '$0': 'app.js' }
    { _: [ 'crear' ], d: 'Pasear a Lukas', '$0': 'app' }
    { _: [ 'listar' ], '$0': 'app' }
    { _: [ 'actualizar' ], d: 'Pasear al Lukitas', c: 'true', '$0': 'app' }

   <<< Comandos >>>>:
    node app.js crear --descripcion "Terminar curso"
    node app.js actualizar -d "Hacer API" -c false
    node app.js actualizar -d "Hacer API" 
*/