const fs = require('fs');
let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB()
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB()
    return porHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    //console.log(data);
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

const cargarDB = () => {
    // Podemos hacer un require de un JSON require lo convierte en objeto y te lo entrega
    // 
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        //SI el objeto es vacio lo manipulamos para que lo muestre vacio
        listadoPorHacer = [];
    }
    return listadoPorHacer;
}

const getListado = () => {
    let cargarJson = cargarDB()
    return cargarJson;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    delete listadoPorHacer[index];
    console.log(descripcion);
    guardarDB();
    return true;
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}