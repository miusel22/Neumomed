import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Formulario from '../src/Components/formulario';
import Principal from './principal';

class Router extends Component {    
    render() { 
      return (
 <Switch>
   <Route exact path='/' component={Principal}/>
   <Route exact path= '/formulario' component={Formulario} /> 

</Switch>
      )
    }
}
    export default Router;