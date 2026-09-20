import React from 'react';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }} className="page-enter">
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
