const fs = require('fs');
var colors = require('colors');

let listado_por_hacer = [];

const guardaData = () => {

    let data = JSON.stringify(listado_por_hacer)

    fs.writeFile(`assets/data.json`, data, (err) => {
        if (err) throw err;
    });

    return 'Tarea registrada';

}

const leerData = ()=>{

    try {
        listado_por_hacer = require('../assets/data.json');
    } catch (error) {
        listado_por_hacer = [];
    }


}

const crear = (descripcion) => {
    
    let porHacer = {
        descripcion,
        completado:  false
    }

    leerData();

    listado_por_hacer.push(porHacer);

    let guardar = guardaData();

    let mensaje = {
        porHacer,
        guardar
    }

    return mensaje;
    
}

const getListado = () => {

    try {
        listado_por_hacer = require('../assets/data.json');
    } catch (error) {
        listado_por_hacer = [];
    }

    return listado_por_hacer;

}

const actualizar = (descripcion, estado = true) => {

    leerData();

    let index = listado_por_hacer.findIndex( tarea => tarea.descripcion === descripcion );

    if( index >= 0 ){
        listado_por_hacer[index].completado = estado;
        guardaData();

        return 'Se actualiza tarea.'.green;
    }else {
        return 'No se encuentra tarea indicada.'.red;
    }

}

const borrar = (descripcion) => {

    leerData();

    let index = listado_por_hacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listado_por_hacer.splice(index, 1);
        guardaData();

        return true;
    } else {
        return false;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}