import {useState } from 'react';
import Registro from '../Registro/Registro';
import './VistaDeRegistro.css'
import Reserva from '../Reserva/Reserva.js'
import Sesion from '../Sesion/Sesion.js'
import Boton from '../Boton/Boton';

const VistaDeRegistro = ({estaLogeado}) => {
    const [usuarios, cambiarUsuarios] = useState([
        {nombre:'Juana', mail:"juana@gmail.com", telefono: "098765432"},
        {nombre:'Roberto', mail:"roberto@gmail.com", telefono: "099567123"},
        {nombre:'Sonia', mail:"sonia@gmail.com", telefono: "091783965"}  
    ]);

    const [asistidos, setAsistidos] = useState([]);

    const agregarUsuario = (usuario) => {
        console.log("viejo: ",usuarios)
        cambiarUsuarios(previousState => {
            const res = [...previousState, usuario]
            return res
        })
    }

    const removerUsuario = (index) => {
            cambiarUsuarios(previousState => {
                const res = [...previousState]
                res.splice(index, 1)
                return res
            });
    }

    return (
        <div className='VistaDeRegistro'>
            {estaLogeado? 
            <>
            <Registro agregarUsuario={agregarUsuario}/></> :null }
            <h1>Reservas:</h1>
            <p className="subtitulo">Número de reservas: {usuarios.length}</p>
            <ul>
            {usuarios.map((usuario, i) => {
                return (
                    <Reserva key={i} indice={i} usuario={usuario} removerUsuario={removerUsuario} setAsistidos={setAsistidos} estaLogeado={estaLogeado}/>
                )
            })}
            </ul>
            <p className="subtitulo">Número de asistidos: {asistidos.length}</p>
            <ul>
                {asistidos.map((asistido, i) => {
                    return (
                        <Reserva key={i} usuario={asistido} asistencia={true}/>
                    )
                })}
            </ul>
            
        </div>
    )
    }
    export default VistaDeRegistro;

