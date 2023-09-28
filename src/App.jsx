import React from 'react';

import Home from './Pages/Home';
import PricingPage from './Pages/Pricing';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Route, Routes } from "react-router-dom";
// 

const App = () => {
  return (

    <Routes>
        <Route index path="/" element={< Home />} />
        <Route path="pricing" element={< PricingPage />} />
        <Route path="blog" element={< Blog />} />
        <Route path="about" element={< About />} />
        <Route path="contact" element={< Contact />} />
      </Routes>

    
  )
}

export default App;