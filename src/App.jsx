import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import NavigationBar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/estimate" element={<Estimate />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/about" element={<AboutUs />} />

      </Routes>
      <Footer />
    </Router>
  );
}
