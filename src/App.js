import './App.css';
import Header from './Components/Header/index.js';
import Slider from './Components/Slider/index.js';
import Contact from './Components/Collegefrom/index';
import Hotels from './Components/Hotels/index.js';
import About from './Components/About/index.js';
import Blog from './Components/Blog/index.js';
import Collegefrom from './Components/Collegefrom/index';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";


// import Collegefrom from './Components/Collegefrom';


function App() {
  return (
    <div className="App">
      <div className='mainheader'>
      <Header/>
      {/* <Collegefrom/> */}
      </div>
      <div>
      <Routes>
        <Route path="/" element={<Slider />}  />
          
           <Route path="Contact" element={<Contact/>}/>
          <Route path="Hotels" element={<Hotels />} /> 
          <Route path="About" element={<About />} /> 
          <Route path="Blog" element={<Blog />} /> 


 
      </Routes>
</div>

    </div>
  );
}


export default App;
