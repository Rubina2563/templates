import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import ContactUs from './pages/ContactUs.tsx';
import Services from './pages/Services.tsx';
import City from './pages/City.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

const App = () => {
  return (<>
    <Header />
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/city" element={<City />} />
        </Routes>
      </div>
    </Router>
    <Footer />
  </>
   
  )
}

export default App
