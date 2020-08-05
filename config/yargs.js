const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer:', {
        descripcion: {
            demand: true,
            desc: 'Crear un elemento por hacer:',
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza estado completado de una tarea', {
        descripcion: {
            demand: true,
            desc: 'Actualiza un elemento',
            alias: 'd'
        },
        completado: {
            Desc: 'Marca como completado o pendiente la tarea',
            alias: 'c',
            default: true
        }
    })
    .command('listar', 'Lista las tareas:', {
        descripcion: {
            desc: 'Lista las tareas:',
            alias: 'd'
        }
    })
    .command('borrar', 'Borra las tareas:', {
        descripcion: {
            desc: 'Borra las tareas:',
            alias: 'd'
        }
    })
    .help()
    .argv

module.exports = {
    argv
}