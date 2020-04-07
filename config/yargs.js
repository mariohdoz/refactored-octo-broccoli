const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Estatus de la tarea ingreado por valor booleano',
    type: 'boolean'
};

const argv = require('yargs')
    .command('crear', 'Crea un nuevo pendinete en el listado', {descripcion})
    .command('actualizar', 'Actualiza un pendinete en el listado', {descripcion, completado})
    .command('borrar', 'Borra una tarea', opts_crear)
    .command('listar', 'Imprime pendientes')
    .help()
    .argv;

module.exports = {
    argv
}