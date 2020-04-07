const { argv } = require('./config/yargs'); 
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');
var colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log("Comando crear");

        let tarea = crear( argv.descripcion); 

        console.log(tarea);
        
        break;
    
        
    case 'listar':
        console.log("Comando listar");
        
        let tareas = getListado();

        for (let tarea of tareas) {

            console.log('=================================='.black);
            console.log(`***  ${tarea.descripcion}   ***`.white);
            console.log(`***  Estado: ${tarea.completado}  ***`.white);
            console.log('=================================='.red);

        }
        
        break;
    

    case 'borrar':
        console.log("Comando borrar");
        let aux_borrar = borrar(argv.descripcion);
        console.log(aux_borrar);

        break;
            
    case 'actualizar':
        console.log("Comando actualizar");
        let estatus = actualizar(argv.descripcion, argv.completado);        
        console.log(estatus);

        break;
    default:
        console.log("Comando no reconocido");
        
        break;
}