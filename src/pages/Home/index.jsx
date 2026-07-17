import React from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features';
import TrustedCompanies from './sections/TrustedCompanies';
import TransformBusiness from './sections/TransformBusiness';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';
import CTA from './sections/CTA';

export default function Home() {
  return (
    <div className="guten-lizrFz   entry-content is-layout-constrained guten-post-content guten-element">
      <Hero />
      <Features />
      <TrustedCompanies />
      <TransformBusiness />
      <Services />
      <Projects />
      <Testimonials />
      <Blog />
      <CTA />
    </div>
  );
}
