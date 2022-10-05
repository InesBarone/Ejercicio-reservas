import Boton from '../Boton/Boton.js'
import './Reserva.css'

export default function Reserva({ usuario, removerUsuario, indice, setAsistidos, asistencia , estaLogeado}) {
  const i = indice;


  const manejarAsistir = (index) => {
    setAsistidos(previousState => {
        const res = [...previousState, usuario];
        return res
    })
    removerUsuario(index)
  }

  return (
    <div>
      <ul>
    <li key={i} className={asistencia? 'asistidos' :''}>
        <p >{usuario.nombre} - {usuario.mail} - {usuario.telefono}</p>
        <div className='botones-contenedor'>
        {estaLogeado && !asistencia? <Boton  texto="X" onClick={(e) => {removerUsuario(i)}} variante="alert"/> : null }
        {estaLogeado? <Boton disabled={asistencia} texto="Asistió" onClick={(e) => {manejarAsistir(i)}}/> : null
        
        }
        </div>
    </li>
      </ul>
    </div>
  )
}