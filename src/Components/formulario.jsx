import React from "react";
import "./style.css";
import LogoOficial from '../img/Logo-Oficial-sin-bordes.png'
import { Link} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import NeumobotFeliz from '../img/NeumobotFeliz.png'
import Neumobot from '../img/Neumobot.png'

class formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secciones: [], variables: [], variable8: []};

  }
  componentDidMount() {
    fetch(
      "https://formularios-prueba-tecnica-6ihrk4y23q-ue.a.run.app/formularios/api/v3/prueba_tecnica"
    )
      .then((response) => {
        return response.json();
      })
      .then((datos) => {
        this.setState({
          secciones: datos.data.data.seccion,
          variables: datos.data.data.variable,
          variable8: datos.data.data.variable.variable4.opciones_lista,
        
        });
      });
    
      
  }

  
  
  
  render() {
   
   
    const secc = Object.values(this.state.secciones);
    const varia = Object.values(this.state.variables);
    const varia8 = Object.values(this.state.variable8);
   

    
   
   
    secc.sort(function (prev, next) {
      //estamos ordenando el array de las secciones
      if (prev > next) {
        return 1;
      }
      if (prev < next) {
        return -1;
      }

      return prev.valor - next.valor;
    });

    varia.sort(function (prev, next) {
      //estamos ordenando el array de las variables
      if (prev > next) {
        return 1;
      }
      if (prev < next) {
        return -1;
      }

      return prev.seccion - next.seccion;
      
    });

    if(secc.length > 0){ 
    return (
      <>
      <Header></Header>
      <div className="container-fluid ml-auto mr-auto text-align-center vh-100%">
      <div className="container-fluid text-center bg-info">
        <h3 className="text-white bg-info">VALORACIÓN</h3>
        <hr className="bg-info"></hr>
      </div>
      <h3 className="text-info text-center mt-5">Diligencia el formulario y obtén tu valoración.</h3>
      <div className="container">
        <div className="row">

        

 <div className="col-12 col-md-6 col-sm-12 ">
 
<div className="col-md-4"></div>
<img src={Neumobot} className="img-responsive  neumobot d-block mt-5 mb-5"/>
</div>
<div className="col-12 col-md-6 col-sm-12  mt-auto mb-auto ">





      
    
      
     
      <form className="form text-aling-center">
        <div className="form-row ">
          
          {secc.map((e, i) => (
            <>
            <div className="container  text-center bg-info">
              <h4 key={i}></h4>

              <div
                class="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div class="panel panel-default text-center">
                  <div class="panel-heading" role="tab" id="">
                    <h4 class="panel-title text-white">
                      <h3
                        className="formulario"
                        role="button text-white"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href={"#collapse" + e.valor}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {e.nombre}
                      </h3>
                    </h4>
                  </div>
                  <div
                    id={"collapse" + e.valor}
                    class="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="heading"
                  >
                    <div class="panel-body align-item-center">
                      
                      {varia.map((v, i) => (
                        <div>
                          <h4 key={i}></h4>

                          <div>
                         
                            {v.seccion == e.valor && v.nombre!="Clasificación" ? (
                              <div class=" container form-group">
                                <div className="ml-auto mr-auto ">
                                  <label
                                    className="text-white col-12 col-md-8 col-sm-8 text-left  label"
                                    for="validationCustom01"
                                  >
                                    {v.nombre}:
                                  </label>
                                  <input
                                    className="text-align-center col-12 col-md-6 col-sm-6"
                                    type="numero"
                                    name="nombres"
                                    placeholder={"Ingresa " + v.nombre+"..."}
                                    onChange={this.handleChange}
                                    className="form-control "
                                    value={this.state.nombres}
                                    id="validationCustom01"
                                    required
                                  ></input>
                                </div>
                              </div>
                            ) : (
                              
                              ""
                            )}
                             {
                            v.seccion == e.valor && v.nombre=="Clasificación"?(
                              <>
                              <div className="ml-auto mr-auto">
                              <label
                                    className="text-white"
                                    for="validationCustom01"
                                  >
                                    {v.nombre}
                                  </label>
                              <select class="form-control sm label" id="exampleFormControlSelect1">
                              <option>Elige una clasificación</option>
                                {
                                 varia8.map((e,i) =>(
                                  <>
                                  <option>{e.valor}</option>
                                 

                                  </>

                    
                                 ))






                                }
                  
                            </select>
                            </div>
                            </>

                            ):(

                              ""
                            )


                            }
                            
                         
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                     
                    </div>
                  </div>
                  <hr className="hrform"></hr>
                </div>
               
              </div>
            
            </div>

            </>
            
          ))}
          
        </div>
        <br></br>
        <div className="container text-center">
                        <button type="submit" class="btn btn-success">
                          {"Obtener Valoración"}
                        </button>
                      </div>
      </form>
      </div>
      </div>
      </div>
      </div>
      <Footer/>
      </>
    );
  } else {
    return  <>
    <Header/>
    <div className="container  text-center mt-10">
    <h3 className="text-info">Cargando Formulario, por favor espera...</h3>
  <img className="neumobot img-responsive mg-fluid" alt="Responsive image" src={NeumobotFeliz}></img>
    </div>
    
    <Footer/>
    </>
  }
}

}
  
export default formulario;
