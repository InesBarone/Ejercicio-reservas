import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import { BarLoader } from 'react-spinners';

export default function VistaDeMozo(props) {
  const params = useParams();
  const [cargando, setCargando] = useState(true)
  const [mozo, setMozos] = useState([])

  const mozoId = params.id;

  useEffect(() => {
    fetch(`http://localhost:8088/mozos/${mozoId}`)
    .then((res) => res.json())
    .then((result) => {
        setMozos(result);
        setCargando(false);
    })
})

  // const mozo = listaDeMozos[0];

    return (
    <div style={{backgroundColor: mozo.background}}>
      {cargando ? <div className='cont'><BarLoader/></div> : 
      <>
        <p>Nombre: {mozo.nombre}</p>
        <p>Apellido: {mozo.apellido}</p>
      </>
      }
    </div>
  )
}
