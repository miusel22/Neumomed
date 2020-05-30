

import React from 'react';
import banner1 from '../img/Banner1.jpg'
import banner2 from '../img/Banner2.jpg'
import banner3 from '../img/Banner3.jpg'
import banner4 from '../img/Banner4.jpg'
import banner5 from '../img/Banner5.jpg'
import banner6 from '../img/Banner6.jpg'


import "./style.css";
function Banners() {
  return (

  <>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <a href="https://www.youtube.com/channel/UCf_U0-K7i3qnRTlGci7z1yQ?view_as=subscriber" target="_blank">
      
      <img src={banner1} class="d-block w-100" alt="" />
      </a>
    </div>
    <div class="carousel-item">
    <a href="https://www.youtube.com/channel/UCf_U0-K7i3qnRTlGci7z1yQ?view_as=subscriber" target="_blank">
      <img src={banner2} class="d-block w-100" alt=""/>
      </a>
    </div>
    <div class="carousel-item">
    <a href="https://www.youtube.com/channel/UCf_U0-K7i3qnRTlGci7z1yQ?view_as=subscriber" target="_blank">
      <img src={banner3} class="d-block w-100" alt=""/>
      </a>
    </div>
    <div class="carousel-item">
    <a href="https://www.youtube.com/channel/UCf_U0-K7i3qnRTlGci7z1yQ?view_as=subscriber" target="_blank">
      <img src={banner4} class="d-block w-100" alt=""/>
      </a>
    </div>
    <div class="carousel-item">
    <a href="https://www.youtube.com/channel/UCf_U0-K7i3qnRTlGci7z1yQ?view_as=subscriber" target="_blank">
      <img src={banner5} class="d-block w-100" alt=""/>
      </a>
    </div>
    <div class="carousel-item">
    <a href="https://www.youtube.com/channel/UCf_U0-K7i3qnRTlGci7z1yQ?view_as=subscriber" target="_blank">
      <img src={banner6} class="d-block w-100" alt=""/>
      </a>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

  </>
  );
}

export default Banners;