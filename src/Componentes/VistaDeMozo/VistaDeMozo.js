import React from 'react'
import {useParams} from 'react-router-dom'
import { InfoDeMozos } from '../ListaDeMozos/ListaDeMozos';

export default function VistaDeMozo(props) {
  const params = useParams();
  
//   console.log(params)
  const mozoId = params.id;
//   console.log(mozoId);

  const listaDeMozos = InfoDeMozos.filter((mozo) => {
    return mozo.id == mozoId;
  })

  const mozo = listaDeMozos[0];

    return (
    <div>
        <p>Nombre: {mozo.nombre}</p>
        <p>Apellido: {mozo.apellido}</p>
        <p>Horario: {mozo.horario}</p>
    </div>
  )
}
