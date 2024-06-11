//about us page

import React from 'react'
import image1 from "../../images/ourtour.jpg"
import './about.css'
const About=()=> {
    return(
    
        <div class="holiday">
               <div className='container-fliud'>
                    <div className="about1">
                    <img src={image1} className="img " alt="..." />
                    <h1>About US</h1>
                    <h2 style={{top:'45%'}}> <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">About</a></li>
                         </ol>
                        </nav>
                    </h2>
                    
                </div>
        </div>

                




         
           

            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                         <div class="headline"> Why Dream Destiny ?</div>
                             <div class="para">
                                Established in 2000, DreamDestiny has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers’ evolving needs and demands.
                            </div>    
                    </div>
    
   
                     <div class="col">
                     <div class="headline">Booking Flights with Dream Destiny </div>
                             <div class="para">
                                At DreamDestiny, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. Being India’s leading website for hotel, flight, and holiday bookings, DreamDestiny helps you book flight tickets that are affordable and customized to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customer’s queries and concerns. Serving over 5 million happy customers, we at DreamDestiny are glad to fulfill the dreams of folks who need a quick and easy means to find air tickets. You can get a hold of the cheapest flight of your choice today while also enjoying the other available options for your travel needs with us.
                            </div>    
                    </div>  


                    <div class="col">
                     <div class="headline">Domestic Flights with Dream Destiny </div>
                            <div class="para">
                            DreamDestiny is India's leading player for flight bookings. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds and rebook options, price comparisons and many more interesting features.
                            </div>    
                        </div>   
                     </div>



                <div class="row">
                <div class="col">
                         <div class="headline"> Get a secure flight booking</div>
                             <div class="para">
                             Enjoy cancellation protection on domestic flights. Benefit from fare drop protection, same day cancellation protection, hold now - pay later, on international flight bookings. Great filters, fantastic navigation.
                            </div>    
                </div>
                </div> 

                <div class="row">
                <div class="col">
                         <div class="headline"> New deal every season</div>
                             <div class="para">
                             The onset of the festive season, an upcoming long weekend or a gazetted holiday, expect an attractive deal on flights, hotels and holidays coming your way. From cashback offers to promo code discounts, you are in for a hot deal.
                            </div>    
                </div>
                </div>

                <div class="row">
                <div class="col">
                         <div class="headline"> About the site</div>
                             <div class="para">
                             Customer Support, Payment Security, Privacy Policy, Cookie Policy, User Agreement, Terms of Service, More Offices, Make A Payment, Work From Home, Report Security Issues
                            </div>    
                </div>
                </div>

                  




                </div>
            </div>

        
    
            
        
        
        
    )
}

export default About;