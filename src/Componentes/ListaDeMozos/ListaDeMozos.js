import React, { useEffect, useState } from 'react'
import Boton from '../Boton/Boton.js'
import {Link} from 'react-router-dom'
import { ClipLoader } from 'react-spinners';


export default function ListaDeMozos() {
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        fetch("http://localhost:8088/mozos")
        .then((res) => res.json())
        .then((result) => {
            setDatos(result);
            setCargando(false)
        })
    })

    return (
    <div>
       
        <h3>Lista de mozos</h3>
        <ul>
             {cargando ? <div className='cont'><ClipLoader/></div> : null}
               {datos.map((usuario, index) => (
                <li key={index}>
                    {usuario.id} - {usuario.nombre} - {usuario.apellido}
                    <Link to={`/mozos/${usuario.id}`} >
                    <Boton texto="Ir al perfil"/>
                    </Link>
                </li>
            )
            )}
        </ul>
    </div>
  )
}
