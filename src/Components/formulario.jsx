import React from "react";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import NeumobotFeliz from "../img/NeumobotFeliz.png";
import Neumobot from "../img/Neumobot.png";

class formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secciones: [], variables: [], variable8: [] }; //estados iniciales.
  }


  componentDidMount() {
    fetch(
      "https://formularios-prueba-tecnica-6ihrk4y23q-ue.a.run.app/formularios/api/v3/prueba_tecnica" //petición de la api
    )
      .then((response) => { //nos retorna promesa
        return response.json(); 
      })
      .then((datos) => { 
        this.setState({//le asignamos un nuevo estado con los  objetos que que necesitamos.
          secciones: datos.data.data.seccion,
          variables: datos.data.data.variable,
          variable8: datos.data.data.variable.variable4.opciones_lista,
        });
      });
  }



  render() {
    const secc = Object.values(this.state.secciones); //le asignamos un nuevo objeto de secciones con el estado
    const varia = Object.values(this.state.variables);//le asignamos un nuevo objeto de variables con el estado
    const varia8 = Object.values(this.state.variable8); //le asigamos un nuevo objeto  a los datos de la clasificación

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

    if (secc.length > 0) { //ternario que nos valida si ya han cargado los datos de la api,en caso de que ya hayan datos,me pinta la información
      return (
        <>
          <Header></Header>
          <div className="container-fluid ml-auto mr-auto text-align-center vh-100%">
            <div className="container-fluid text-center bg-info">
              <h3 className="text-white bg-info mt-3">VALORACIÓN</h3>
              <hr className="bg-info"></hr>
            </div>
            <h3 className="text-info text-center mt-5">
              Diligencia el formulario y obtén tu valoración.
            </h3>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 col-sm-12 ">
                  <div className="col-md-4"></div>
                  <img
                    src={Neumobot}
                    className="img-responsive  neumobot d-block mt-5 mb-5"
                  />
                </div>
                <div className="col-12 col-md-6 col-sm-12  mt-auto mb-auto ">
                  <form className="form text-aling-center">
                    <div className="form-row ">
                      {secc.map((e, i) => ( //estamos pintando todas las secciones
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
                                      href={"#collapse" + e.valor} //se expande según su id
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      {e.nombre}
                                    </h3>
                                  </h4>
                                </div>
                                <div
                                  id={"collapse" + e.valor} //para que nos funcione el acordeon,le asignamos un id
                                  class="panel-collapse collapse in"
                                  role="tabpanel"
                                  aria-labelledby="heading"
                                >
                                  <div class="panel-body align-item-center">
                                    {varia.map((v, i) => ( //pintamos las variables en los correspondientes bloques.
                                      <div>
                                        <h4 key={i}></h4>

                                        <div>
                                          {v.seccion == e.valor && 
                                          v.nombre != "Clasificación" ? ( //condición que nos ayuda a validar que se pinten solo las variables que corresponden a la sección,como con la variable clasificación pasa algo especial,la dejamos para pintar después
                                            <div class=" container form-group">
                                              <div className="ml-auto mr-auto ">
                                                <label
                                                  className="text-white col-12  text-left  label"
                                                  for="validationCustom01"
                                                >
                                                  {v.nombre}:
                                                </label>
                                                <input
                                                  className="text-align-center col-12 col-md-6 col-sm-6"
                                                  type="numero"
                                                  name="nombres"
                                                  placeholder={
                                                    "Ingresa " +
                                                    v.nombre +
                                                    "..."
                                                  }
                                                  className="form-control "
                                                  value=""
                                                  id="validationCustom01"
                                                  required
                                                ></input>
                                              </div>
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                          {v.seccion == e.valor &&
                                          v.nombre == "Clasificación" ? ( //validamos  ahora que la variable sea clasificación para asignarle una lista desplegable con su respectivo objeto
                                            <>
                                              <div className="container ml-auto mr-auto">
                                                <label
                                                  className="text-white"
                                                  for="validationCustom01"
                                                >
                                                  {v.nombre}
                                                </label>
                                                <select
                                                  class="form-control sm label"
                                                  id="exampleFormControlSelect1"
                                                >
                                                  <option>
                                                    Elige una clasificación
                                                  </option>
                                                  {varia8.map((e, i) => ( //pintamos el objeto que está en clasificacion para convertirlo en una lista.
                                                    <>
                                                      <option>{e.valor}</option>
                                                    </>
                                                  ))}
                                                </select>
                                              </div>
                                            </>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <div></div>
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
                      <button type="button" class="btn form- control btn-success">
                        Obtener Valoración
                      </button>
                      <p className="text-info" id="mensaje"></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </>
      );
    } else { //en caso de que no hayan cargado los datos,me muestra un loading 
      return (
        <>
          <Header/>
          <div className="container  text-center mt-10">
            <h3 className="text-info">
              Cargando Formulario, por favor espera...
            </h3>
            <img
              className="neumobot img-responsive mg-fluid"
              alt="Responsive image"
              src={NeumobotFeliz}
            ></img>
          </div>

          <Footer/>
        </>
      );
    }
  }
}

export default formulario;
