import React from "react"
import './slider.css'

import image1 from "../../images/s1.png"
import image2 from "../../images/slide2.jpg"
import image3 from "../../images/slide3.jpg"
import image4 from "../../images/slide4.jpg"
import image5 from "../../images/slide6.jpg"
import image6 from "../../images/slide7.jpg"


import image7 from "../../image/slide-2.jpg"
import image8 from "../../image/slide-3.jpg"
import image9 from "../../image/slide-1.jpg"


const Slider = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div class="carousel-caption d-none d-md-block">
    {/* <h3 >Connecting people with their style </h3> */}
    {/* <p>A design so unique, it was created for you</p>/ */}
    </div>
      <img src={image8} className="Slider-img " alt="..." />
      <div class="carousel-caption d-none d-md-block">
    </div>
    </div>
    <div className="carousel-item">
      <img src={image7} className="Slider-img" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image9} className="Slider-img" alt="..." />
    </div>

    {/* <div className="carousel-item">
      <img src={image4} className="Slider-img" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image5} className="Slider-img" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image6} className="Slider-img" alt="..." />
    </div> */}
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

 <div className="slide-text">
  <h1>Dream Away, Fly Away...</h1>
  
  {/* <p>Build Your Next Trip with Us</p> */}
  {/* <div className="btn">
  <a href="/">Book Now</a>
  </div> */}
 </div>


</div>
      )
  }


export default Slider;