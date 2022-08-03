import './App.css';
import VistaDeRegistro from './Componentes/VistaDeRegistro/VistaDeRegistro.js'
import Bar from './Componentes/Bar/Bar.js'
import Sesion from './Componentes/Sesion/Sesion.js'
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import { useState } from 'react';
import { Navigate} from 'react-router-dom'
import ListaDeMozos from './Componentes/ListaDeMozos/ListaDeMozos.js';
import VistaDeMozo from './Componentes/VistaDeMozo/VistaDeMozo.js';


function App() {
  const [estaLogeado, cambiarEstaLogeado] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Bar estaLogeado={estaLogeado} cambiarEstaLogeado={cambiarEstaLogeado}/>
      <div className='contenedor'>
      <Routes>
      <Route path='/' element={<VistaDeRegistro estaLogeado={estaLogeado}/>} />
      <Route path='/mozos' element={estaLogeado?
      (<ListaDeMozos />) : (
<Navigate to='/login' replace />
      )} />

      <Route path="/mozos/:id" element={<VistaDeMozo/>}/>
      
      <Route path='*' element={<p>Oh no, no se encuentra tu búsqueda</p>} />
      <Route path='/login' element={<Sesion estaLogeado={estaLogeado} cambiarEstaLogeado={cambiarEstaLogeado}/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
