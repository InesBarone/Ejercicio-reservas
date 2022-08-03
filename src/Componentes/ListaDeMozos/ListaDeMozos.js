import React from 'react'
import Boton from '../Boton/Boton.js'
import {Link} from 'react-router-dom'

export const InfoDeMozos = [
        {
            id:'1',
            nombre:'Florencia',
            apellido:'Gonzales',
            password: '123',
            horario: 'Matutino'
        },
        {
            id:'2',
            nombre:'Julian',
            apellido:'Ramirez',
            password: '456',
            horario:'Nocturno'
        }
    ]
export default function ListaDeMozos() {

    return (
    <div>
        <h3>Lista de mozos</h3>
        <ul>
            {InfoDeMozos.map((usuario, index) => (
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
