import React from 'react'
import './hotel.css'
import card1 from "../../images/card1.avif"
 import card2 from "../../images/luxe_villa.avif"
 import card3 from "../../images/maldives.avif"

 import card4 from "../../images/hotel-card1.jpg"
 import card5 from "../../images/hotel-card2.jpg"
 import card6 from "../../images/hotel-card3.jpg"
 import card7 from "../../images/hotel-card4.jpg"

 import ourtour from "../../images/ourtour.jpg"
 


 import offer1 from "../../images/offer1.avif"
 import offer2 from "../../images/offer2.avif"
 import offer3 from "../../images/offer3.webp"

const Hotels=()=> {
    return(
        <div class="hotel1">

<div className='container-fliud'>
  <div className="tour1">
<img src={ourtour} className="img " alt="..." />
  <h1>Our Tours</h1>
  <h2> <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Tour</a></li>
                         </ol>
                        </nav>
                    </h2>
 </div>
  </div>

       <div class="con1">
       
  <div class="row">
    
    <div class="col">
        <div class="text">
            <h3>Introduction</h3>
            <h1>Luxe Selections </h1>
            <h5>Escape to the epitome of luxury, packked and services</h5>
            <a href="https://promos.makemytrip.com/Hotels_product/Luxe/mmtLuxeDT/index.html?showHeader=false">
            <button type="button" class="btn1 ">Learn More</button>
            </a>
        </div>
    </div>
    <div class="col">
    <div class="card" style={{width: '16rem', height:'25rem'}}>
    <div className='hotelimg'><img src={card1} class="card-img-top" alt="..."/></div>
  <div class="card-body">
    <p class="card-text"><h4><b>Luxe properties in India</b></h4>Explore by luxury bracnds, themes & top picks</p>
    
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: '16rem', height:'25rem'}}>
  <div className='hotelimg'><img src={card2} class="card-img-top" alt="..."/></div>
  <div class="card-body">
    {/* <h5 class="card-title">Card title</h5> */}
    <p class="card-text"><h4><b>Luxe Villas</b></h4>Premium Villas woith superlative Experience</p>
    
  </div>
</div>

    </div>
    <div class="col">
    <div class="card" style={{width: '15rem', height:'25rem'}}>
    <div className='hotelimg'><img src={card3} class="card-img-top" alt="..."/></div>
  <div class="card-body">
    <p class="card-text"><h4><b>Luxe International</b></h4>Dubai, Maldives, Thailand & More</p>
    
  </div>
</div>
    </div>
  </div>
</div>
     


<div class="cont3">



<div class="container">
 






<div class="container">
  <div class="row">

    <div class="col">
      
        <div class="card border-light mb-3" style={{maxwidth:'540px'}}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src={card4} class="img-fluid rounded-start" alt="..."/>
             </div>

          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">Spain, Benidorm</h5>
              <p class="card-text">Benidorm is a seaside resort on the eastern coast of Spain, part of the Valencia region’s famed Costa Blanca. A tiny fishing village till the 1960s, it’s now a popular Mediterranean holiday destination known for its nightlife</p>
              <button type="button" class="btn btn-outline-dark">Buy This Tour</button>
            </div>
          </div>

          </div>
       </div>
     
     </div>
  </div>

  <div class="row">

    <div class="col">
        <div class="card border-light mb-3" style={{maxwidth:'540px'}}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src={card5} class="img-fluid rounded-start" alt="..."/>
             </div>

          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">Mauritius Island, Africa</h5>
              <p class="card-text">Mauritius, island country in the Indian Ocean, located off the eastern coast of Africa. Physiographically, it is part of the Mascarene Islands. The capital is Port Louis</p>
              <button type="button" class="btn btn-outline-dark">Buy This Tour</button>
            </div>
          </div>

          </div>
       </div>
     </div>
  </div>

  <div class="row">

    <div class="col">
        <div class="card  border-light mb-3" style={{maxwidth:'540px'}}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src={card6} class="img-fluid rounded-start" alt="..."/>
             </div>

          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">Mediterranean Coast, France</h5>
              <p class="card-text">
The French Riviera, also called "Côte d'Azur," is an area located in the South of France, at the heart of Europe, on the Mediterranean and near the Southern Alps</p>
              <button type="button" class="btn btn-outline-dark">Buy This Tour</button>
            </div>
          </div>

          </div>
       </div>
     </div>
  </div>

  <div class="row">

<div class="col">
    <div class="card  border-light mb-3" style={{maxwidth:'540px'}}>
        <div class="row g-0">
          <div class="col-md-6">
            <img src={card7} class="img-fluid rounded-start" alt="..."/>
         </div>

      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">Julian Alps</h5>
          <p class="card-text">The Julian Alps are a mountain range of the Southern Limestone Alps that stretch from northeastern Italy to Slovenia, where they rise to 2,864 m at Mount Triglav, the highest peak in Slovenia. </p>
          <button type="button" class="btn btn-outline-dark">Buy This Tour</button>
        </div>
      </div>

      </div>
   </div>
 </div>
</div>

</div>



</div>
  
  </div>        
        
        </div>
        
    )
}

export default Hotels;