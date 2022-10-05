import React from 'react'
import './Bar.css'
import Boton from '../Boton/Boton.js'
import { Link } from 'react-router-dom'

export default function Bar({estaLogeado, cambiarEstaLogeado}) {

    return (
    <div>
        <nav>
            <h4>RegRes</h4>
            <div className='nav-contenedor'>
                <Link to="/">
                    <a>Inicio</a>
                </Link>
                {estaLogeado? 
                <Link to="/mozos">
                    <a>Lista de mozos</a>
                </Link>
                : null}
            </div>
            {estaLogeado? <Link to='/login'><Boton texto='Cerrar sesion' variante='blue' onClick={() => {cambiarEstaLogeado(false)}}/></Link> : (
            <Link to='/login'>
            <Boton texto="Ingresar" variante="blue" onClick={() => {cambiarEstaLogeado(false)}}/>
            </Link>
            )}
        </nav>
    </div>
  )
}
