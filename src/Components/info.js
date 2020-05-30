
import React from 'react';
import imagen1 from '../img/_MG_5091.JPG'
import "./style.css";

function info() {
  return (

    <>

      <section >


        <div className="container-fluid  ml-auto mr-auto text-align-center vh-100%" >

          <div className="row seccion" >

            <div className="col-12 col-md-5 col-sm-12 text-white m-auto sec">
              <hr className="hr"></hr>
              <h6 className="letra">NEUMOMED</h6>
              <h1 className="letra-titulo">Neumomed IPS</h1>
              <h3 className="letra-parrafo">Ofrece una atención integral a pacientes con enfermedades respiratorias y trastornos del sueño.</h3>
            </div>
            <div className="col-12 col-md-5 col-sm-12 text-center mr-auto">

              <img src={imagen1} className="img-responsive d-block w-100 mt-5 mb-5 imagen1" />
            </div>


          </div>
        </div>

      </section>

    </>
  );
}

export default info;
