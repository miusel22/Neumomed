import React from 'react';


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
