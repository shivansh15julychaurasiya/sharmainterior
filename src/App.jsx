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
  {/* <Route path="/multiform" element={<MultiStepForm />} />

<Route path="/estimate/full-home" element={<FullHomeEstimator />} />
<Route path="/estimate/kitchen" element={<KitchenEstimator />} />
<Route path="/estimate/wardrobe" element={<WardrobeEstimator />} /> */}
<Route path="/estimate/full-home" element={<MultiStepForm type="full-home" />} />
<Route path="/estimate/kitchen" element={<MultiStepForm type="kitchen" />} />
<Route path="/estimate/wardrobe" element={<MultiStepForm type="wardrobe" />} />


      </Routes>
      <Footer />
    </Router>
  );
}
