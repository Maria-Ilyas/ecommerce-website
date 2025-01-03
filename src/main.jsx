import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BrowserRouter,Routes,Route} from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Route path='/ecommerce-website' element={<App />}/>
  </StrictMode>,
)
