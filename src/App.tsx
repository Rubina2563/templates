import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import City from './pages/City';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className=" bg-gray-100">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="city" element={<City />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
