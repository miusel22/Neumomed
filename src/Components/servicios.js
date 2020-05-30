
import React from 'react';
import imagen1 from '../img/_MG_5091.JPG'
import "./style.css";

function servicios() {
  return (

  <>

<section className="sec mt-5">

<div className="container bg-white mt-auto ml-auto mt-auto" >
<div className="row bg-white" >
<div className="col-12 col-md-4 col-sm-12 mt-4 ">
    <hr className="btn-dark hr"></hr>
<h4 className="titulos">Programas</h4>
<br></br>
    <li>Programa de EPOC y ASMA</li>
    <li>Programa de SAHOS</li>
    <li>Programa Dejar de Fumar</li>

</div>
<div className="col-12 col-md-4 col-sm-12 mt-4">
    <hr className="btn-dark hr"></hr>
<h4 className="titulos">Terapias</h4>
<br></br>
    <li>Rehabilitación Pulmonal</li>
    <li>Terapia Miofuncional Orofacial</li>
    <li>Terapia Cognitivo Conductual</li>

</div>
<div className="col-12 col-md-4 col-sm-12 mt-4">
    <hr className="btn-dark hr"></hr>
<h4 className="titulos">Consultas</h4>
<br></br>
    <li>Consulta de Neumología </li>
    <li>Consulta de Nutrición</li>
    <li>Consulta de Psicología</li>

</div>


</div>
</div>

</section>
<br></br>
<br></br>
  </>
  );
}

export default servicios;
