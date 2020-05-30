import React from 'react';
import Header from './Components/Header';
import Banners from './Components/banners';
import Info from './Components/info';
import Servicios from './Components/servicios';
import Footer from './Components/Footer'
import "./Components/style.css"


function Principal() {
  return (
    <div className="App contenido">
  
   <Header/>
   <Banners/>
   <Info/>
   <Servicios/>
   <Footer/>
    </div>
  );
}

export default Principal;
