import React from 'react';
import LogoOficial from '../img/Logo-Oficial-sin-bordes.png'

import "./style.css";
function Footer() {
  return (

  <>
  <footer class="footer py-1">
  
<div className="row m-auto footerspace">
  <div className="col-12 col-md-3 col-sm-12  footer footerspace">
<h2 className="text-white">Medellín</h2>
<p className="text-white">Calle 19A # 44-25 Local 206
Edificio Salud y Servicios.</p>
  </div>
  <div className="col-12 col-md-3 col-sm-12 footer">
<h2 className="text-white">Rionegro</h2>
<p className="text-white">Carrera 55 A #35- 2027, piso 4 Cs 402-404  Torre 2, City Médica.</p>
  </div>

  <div className="col-12 col-md-6 col-sm-12">


  <div class="gmaps mb-auto">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.259679222281!2d-75.574785!3d6.222141!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0f5815194e96cbd!2sNEUMOMED!5e0!3m2!1ses-419!2sus!4v1590792745767!5m2!1ses-419!2sus" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
  </div>

</div>
<p className="text-center footer text-white"><a href="https://neumomed.com/#/"/>Neumomed | Todos los derechos reservados © 2020</p>

<a href="https://api.whatsapp.com/send?phone=573508872241&text=Hola%20Neumomed%2C%20quiero%20pedir%20una%20cita." class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    </a> 
</footer>



  </>
  );
}

export default Footer;