import React from "react";
import './blog.css';
import image1 from "../../images/ourtour.jpg"

import blog1 from "../../images/blog1.jpg"
import blog2 from "../../images/blog2.jpg"
import blog3 from "../../images/blog3.jpg"
import blog4 from "../../images/blog4.jpg"
import blog5 from "../../images/blog5.jpg"
import blog6 from "../../images/blog6.jpg"


const Blog = () =>{
return(
    <div class="blog1">
               <div className='container-fliud'>
                    <div className="about1">
                    <img src={image1} className="img " alt="..." />
                    <h1>Blog</h1>
                    <h2 style={{top:'45%'}}> <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Blog</a></li>
                            </ol>
                        </nav>
                    </h2>
                    
                    </div>
                 </div>
<div className="container-fluid">

<div class="row row-cols-1 row-cols-md-3 g-3 ">
  <div class="col">
    <div class="card">
      <div className="blogimg"><img src={blog1} class="card-img-top" alt="..."/></div>
      <div class="card-body">
        <h5 class="card-title">Top 10 Hotels: Rating by Our Experts</h5>
        <p class="card-text">The best hotels in India, chosen by our expert, including luxury hotels, boutique hotels, budget hotels.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <div className="blogimg"><img src={blog2} class="card-img-top" alt="..."/></div>
      <div class="card-body">
        <h5 class="card-title">Your Personal Guide to 5 Best Places</h5>
        <p class="card-text"> Explore The Best Regions For Shopping, Food, Culture, Mountains, Sea, Culture And Camping. Discover The Cities Of Saudi Arabia. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <div className="blogimg"><img src={blog3} class="card-img-top" alt="..."/></div>
      <div class="card-body">
        <h5 class="card-title">How to Find the Best Travel Deals This Year</h5>
        <p class="card-text">popular price-tracking tools that allow you to search for flights and even suggest alternative travel dates with lower prices.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <div className="blogimg"><img src={blog4} class="card-img-top" alt="..."/></div>
      <div class="card-body">
        <h5 class="card-title">12 Important Travel Tips</h5>
        <p class="card-text">It seems obvious, but the single most important thing to pack for your travels is your passport.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <div className="blogimg"><img src={blog5} class="card-img-top" alt="..."/></div>
      <div class="card-body">
        <h5 class="card-title">5 Places to Visit in Montana</h5>
        <p class="card-text">Montana is a western state defined by its diverse terrain ranging from the Rocky Mountains to the Great Plains</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <div className="blogimg"><img src={blog6} class="card-img-top" alt="..."/></div>
      <div class="card-body">
        <h5 class="card-title">What to Do in Francisco</h5>
        <p class="card-text">San Francisco, officially the City and County of San Francisco, is the commercial, financial, and cultural center of Northern California.</p>
      </div>
    </div>
  </div>
  
</div>

</div>


        </div>
)
}

export default Blog;