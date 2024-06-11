import React from "react"
import './headerr.css'
import  {Link} from "react-router-dom"



const Header =() => {
    return(
      <>
<header class="site-header">
  <div class="site-logo">

    <a href="#">Dream Destiny</a>
    
  </div>  
  <nav class="site-navigation">
    <ul class="nav">
    <li><Link to="/">Home</Link></li>
    <li><Link to="Blog">Blog</Link></li>
    <li> <Link to="Hotels">Tour</Link></li>
    <li> <Link to="About">About us</Link></li>
    <li> <Link to="Contact">Contact</Link></li>
     
    </ul>
  </nav>
  
</header>



</>
    )

}
export default Header;