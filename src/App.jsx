import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NavigationBar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutUs from './pages/AboutUs';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Services from './pages/Services';
import MultiStepForm from './pages/MultiStepForm';
import AdminLeadPanel from './component/AdminLeadPanel';
import AdminLogin from "./component/auth/AdminLogin";

const ProtectedAdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("role") === "admin";
  return isAdmin ? children : <Navigate to="/admin-login" />;
};

function LayoutWrapper() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/admin-login";

  return (
    <>
      {!isLoginPage && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/estimate/full-home" element={<MultiStepForm type="full-home" />} />
        <Route path="/estimate/kitchen" element={<MultiStepForm type="kitchen" />} />
        <Route path="/estimate/wardrobe" element={<MultiStepForm type="wardrobe" />} />
        <Route path="/admin/leads" element={
          <ProtectedAdminRoute>
            <AdminLeadPanel />
          </ProtectedAdminRoute>
        } />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}
