import React from 'react';
import Header from './Components/Header';
import Banners from './Components/banners';
import Info from './Components/info';
import Servicios from './Components/servicios';
import Footer from './Components/Footer'
import Formulario from './Components/formulario';

import "./Components/style.css"
import Routes from './router'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    
    </>
  );
}
export default App