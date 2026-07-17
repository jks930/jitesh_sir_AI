import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Projects from './pages/Projects';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import BlogDetail from './pages/BlogDetail';
import ProjectDetail from './pages/ProjectDetail';
import TransformBusiness from './pages/TransformBusiness';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';

function App() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  let pageClasses = "wp-singular page-template page-template-full-width page wp-embed-responsive wp-theme-artifice";
  if (location.pathname === '/') {
    pageClasses += " home page-id-29";
  } else if (location.pathname === '/services') {
    pageClasses += " page-id-42";
  } else if (location.pathname === '/projects') {
    pageClasses += " page-id-45";
  } else if (location.pathname === '/faq') {
    pageClasses += " page-id-47";
  } else if (location.pathname === '/blog') {
    pageClasses += " page-id-49";
  } else if (location.pathname === '/contact') {
    pageClasses += " page-id-50";
  } else if (location.pathname === '/about-us') {
    pageClasses += " page-id-37";
  }

  return (
    <>
      <div className={pageClasses}>
        <div className="wp-site-blocks">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogSlug" element={<BlogDetail />} />
            <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/transform-business" element={<TransformBusiness />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-condition" element={<TermsCondition />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
