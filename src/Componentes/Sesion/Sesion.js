import React, { useEffect } from 'react'
import './Sesion.css'
import Boton from '../Boton/Boton.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

export default function Sesion({cambiarEstaLogeado} ) {

const [mail, setMail] = useState('')
const [passwordMozos, setPasswordMozos] = useState('');
const [estaLogeado, setEstaLogeado] = useState(false)
const navigate = useNavigate();

const [mozo, setMozo] = useState([]);
const [cargando, setCargando] = useState(false)

    const manejarNombreMozos = (e) => {
       setMail(e.target.value)
    }

    const manejarPasswordMozos = (e) => {
        setPasswordMozos(e.target.value)
    }

    
    const login = (e) =>{

            setCargando(true)
            fetch(`http://localhost:8088/mozos?mail=${mail}`)
            .then((res) => res.json())
            .then((result) => {
                setCargando(false)
                if (result.length < 1) {
                    alert('Mail inválido');
                } else {
                    const mozo = result[0];
                    if (passwordMozos !== mozo.password) {
                        console.log(mozo);
                     alert('Contraseña inválida');
                    } else {
                        cambiarEstaLogeado(true)
                        setEstaLogeado(true)
                        navigate('/');
                    }
                }
            })


    }

    const manejarCerrar = () => {
        cambiarEstaLogeado(false)
        setEstaLogeado(false)
        setMail('');
        setPasswordMozos('');
    }

  return (<div>
    {estaLogeado? <Boton texto="Cerrar sesion" variante="blue" onClick={manejarCerrar}/> : <>
        <div className='Sesion'>
        <h2>Ingresar sesión de personal</h2>
        <div className='input-sesion-contenedor'>
            <label>Mail: <input type="text" placeholder='Ingrese su nombre' onChange={manejarNombreMozos}></input></label>
            <label>Contraseña: <input type="password" placeholder='Ingrese su contraseña' onChange={manejarPasswordMozos}></input></label>
            </div>
            <div className='boton-contenedor'>
            <Boton texto='Ingresar' onClick={login} variante={'blue'}/>
            </div>
        </div>
    </>}
    {cargando? <div className='cont'><BarLoader/></div> : null}
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