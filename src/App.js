
import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Faq from './components/Accordion/Faq';
import Single from './Singleproduct.jsx';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='single' element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
