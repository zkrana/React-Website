
import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Single from './Singleproduct.jsx';
import Cartpage from './Cart'
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart';
function App() {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='single' element={<Single />} />
        <Route path='cartpage' element={<Cartpage />} />
      </Routes>
    </div>
  );
}

export default App;
