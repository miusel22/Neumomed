
import React from 'react';

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
                            <li className="ml-2">Programa de EPOC y ASMA</li>
                            <li className="ml-2">Programa de SAHOS</li>
                            <li className="ml-2">Programa Dejar de Fumar</li>

                        </div>
                        <div className="col-12 col-md-4 col-sm-12 mt-4">
                            <hr className="btn-dark hr"></hr>
                            <h4 className="titulos">Terapias</h4>
                            <br></br>
                            <li className="ml-2">Rehabilitación Pulmonal</li>
                            <li className="ml-2">Terapia Miofuncional Orofacial</li>
                            <li className="ml-2">Terapia Cognitivo Conductual</li>

                        </div>
                        <div className="col-12 col-md-4 col-sm-12 mt-4">
                            <hr className="btn-dark hr"></hr>
                            <h4 className="titulos">Consultas</h4>
                            <br></br>
                            <li className="ml-2">Consulta de Neumología </li>
                            <li className="ml-2">Consulta de Nutrición</li>
                            <li className="ml-2">Consulta de Psicología</li>

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
