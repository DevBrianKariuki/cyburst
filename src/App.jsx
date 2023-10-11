import React from 'react';

import Home from './Pages/Home';
import PricingPage from './Pages/Pricing';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Route, BrowserRouter as Router,  Routes } from "react-router-dom";
import Layout from './constants/Layout';
// 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* <Route path="login" element={< Login/>} /> */}
      </Routes>
    </Router>
  )
}

export default App;



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={RootLayout}>
//         <Route index element={< Home />} />
//         <Route path="/pricing" element={< PricingPage />} />
//         <Route path="/blog" element={< Blog />} />
//         <Route path="/about" element={< About />} />
//         <Route path="/contact" element={< Contact />} />
//     </Route>
//   )
// )

// const App = () => {
//   return (
//     <RouterProvider router={router} />
//   )
// }

// export default App;