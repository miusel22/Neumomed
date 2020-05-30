

import React from 'react';
import LogoOficial from '../img/Logo-Oficial-sin-bordes.png'
import { Link } from "react-router-dom";

import "./style.css";
function Header() {
  return (

    <>
      <div class="header">

        <div class="container-{breakpoint}  justify-content-center">
          <nav class="navbar navbar-inverse  navbar-light navbar-expand-lg navbar-ligth bg-white justify-content-between">
            <a class="my-0 mr-md-auto font-weight-normal ml-5">
              <Link to="/">
                <img className="img-fluid logo-oficial ml-5" src={LogoOficial}></img>
              </Link>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon navbar-light">
              </span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <nav className="nav-bar ">

                <div class="collapse navbar-collapse justify-content-end bg-white" id="navbarNavAltMarkup">
                  <nav class="my-2 my-md-0 mr-md-3">

                    <Link to="/" style={{ paddingLeft: 13, textDecoration: 'none' }}>
                      <p class="p-2 text-info headertext" >INICIO</p></Link>
                  </nav>
                  <div class="my-2 my-md-0 mr-md-3 letra-titulo quitar">

                    <Link to="/formulario" style={{ paddingLeft: 13, textDecoration: 'none' }}><p class="p-2 text-info headertext" >VALORACIÓN</p></Link>


                  </div>


                </div>



              </nav>
            </div>
          </nav>
        </div>
      </div>


    </>
  );
}

export default Header;
