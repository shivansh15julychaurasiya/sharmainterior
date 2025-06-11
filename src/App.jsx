import React from 'react'
import { HashRouter  as Router, Routes,Route } from 'react-router-dom';
import NavigationBar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import InteriorPriceEstimate from './pages/BHKSelector';
import MultiStepForm from './pages/MultiStepForm';
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
  <Route path="/multiform" element={<MultiStepForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}
