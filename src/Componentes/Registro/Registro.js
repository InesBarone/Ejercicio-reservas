import React from 'react'
import { useState } from 'react';
import './Registro.css'
import Boton from '../Boton/Boton.js'

const Registro = ({agregarUsuario}) => {
    const [datos, cambiardatos] = useState({nombre: "", mail: "", telefono: ""});

    // const manejarNombre = (e) => {
    //     cambiardatos({...datos, nombre: e.target.value})
    // }

    // const manejarMail = (e) => {
    //     cambiardatos({nombre: datos.nombre, mail: e.target.value, telefono: datos.telefono})
    // }

    // const manejarTelefono = (e) => {
    //     cambiardatos({...datos, telefono: e.target.value})
    // }

    const manejarDatos = (e) => {
        const quecambiar = e.target.id
        const valorNuevo = e.target.value
        cambiardatos({...datos, [quecambiar]: valorNuevo})
    }

    const manejarRegistro = (e) => {
      //  cambiarUsuarios([...usuarios, datos])
      agregarUsuario(datos);
      reset();
    }
    
const reset = () => {
    cambiardatos({nombre: "", mail: "", telefono: ""})
}

const esInvalido = () => {
    return datos.nombre === '' || datos.mail === '' || datos.telefono === ''
}

// let invalido = datos.nombre === '' || datos.mail === '' || datos.telefono === ''

    return(
        <div className='registro-contenedor'>
            <h2>Registro de clientes</h2>
            <p>Nombre: {datos.nombre}</p>
            <p>Mail: {datos.mail}</p>
            <p>Telefono: {datos.telefono}</p>
            <div className="formulario">
            <input id="nombre" type="text" value={datos.nombre} onChange={manejarDatos} placeholder="Ingrese su nombre" className='input-form'></input>
            <input id="mail" type="email" value={datos.mail} onChange={manejarDatos} placeholder="Ingrese su mail" className='input-form'></input>
            <input id="telefono" type="number" value={datos.telefono} onChange={manejarDatos} placeholder="Ingrese su celular" className='input-form'></input>
            <Boton texto="Registrar" onClick={manejarRegistro} disabled={esInvalido()}/>
            {/* <button className="boton" disabled={esInvalido()} onClick={manejarRegistro} >Registrar</button> */}
        </div>
        </div>
    )
}

export default Registro
