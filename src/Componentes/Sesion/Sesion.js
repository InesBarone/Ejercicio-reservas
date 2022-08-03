import React from 'react'
import './Sesion.css'
import Boton from '../Boton/Boton.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Sesion({cambiarEstaLogeado} ) {

const [nombreMozos, setNombreMozos] = useState('')
const [passwordMozos, setPasswordMozos] = useState('');
const [estaLogeado, setEstaLogeado] = useState(false)
const navigate = useNavigate();

    const manejarNombreMozos = (e) => {
       setNombreMozos(e.target.value)
    }

    const manejarPasswordMozos = (e) => {
        setPasswordMozos(e.target.value)
    }

    const login = () =>{
       const datos = mozos[nombreMozos];

       if (!datos) {
        return
       }
       if (passwordMozos !== datos.password) {
        return
       }

       cambiarEstaLogeado(true)
       setEstaLogeado(true)
       navigate('/');
    }

    const manejarCerrar = () => {
        cambiarEstaLogeado(false)
        setEstaLogeado(false)
        setNombreMozos('');
        setPasswordMozos('');
    }

  return (<div>
    {estaLogeado? <Boton texto="Cerrar sesion" variante="blue" onClick={manejarCerrar}/> : <>
        <div className='Sesion'>
        <h2>Ingresar sesión de personal</h2>
        <div className='input-sesion-contenedor'>
            <label>Nombre: <input type="text" placeholder='Ingrese su nombre' onChange={manejarNombreMozos}></input></label>
            <label>Contraseña: <input type="password" placeholder='Ingrese su contraseña' onChange={manejarPasswordMozos}></input></label>
            </div>
            <div className='boton-contenedor'>
            <Boton texto='Ingresar' onClick={login} variante={'blue'}/>
            </div>
        </div>
    </>}
        </div>
  )
}

const mozos = {
    Florencia: {
        password: '123'
    },
    Julian: {
        password: '456'
    }
}