import React from 'react'
import './Boton.css'

export default function Boton({ texto , onClick, disabled, variante}) {
   let clase = "boton";
   if (variante != null) {
    clase += ` ${variante}`;
   } 
   if (disabled) {
    clase += " disabled";
   }
  
    return (
    <div>
        <button disabled={disabled} className={clase} onClick={onClick}>{texto}</button>
    </div>
  )
}
