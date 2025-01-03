import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Products from './components/Products';
import TopProducts from './components/TopProducts';
import Winter_Banner from './components/Winter-Banner';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Popup from './components/Popup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
  };
  useEffect(()=>{
     AOS.init({
       offset: 100,
       duration:800,
       easing: "ease-in-sine",
       delay: 100,
     });
     AOS.refresh();
  }, []);
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
     <BrowserRouter>
        <Navbar handleOrderPopup={handleOrderPopup}/>
       <Routes>
         <Route path="/ecommerce-website/" element={<Banner handleOrderPopup={handleOrderPopup}/>} />
         <Route path='/ecommerce-website/top-rated' element={<TopProducts handleOrderPopup={handleOrderPopup}/>} />
         <Route path='/ecommerce-website/men' element={<Products />}/>
         <Route path='/ecommerce-website/kids' element={<Products />}/>
         <Route path='/ecommerce-website/women' element={<Products/>}/>
       </Routes> 
        
        <Winter_Banner/>
        <Products/>
        <Testimonial />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
