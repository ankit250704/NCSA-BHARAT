import React from 'react';
import Navbar from '../components/Navbar';
import WhyUs from '../components/WhyUs';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const WhyUsPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }} className="page-enter">
        <WhyUs />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default WhyUsPage;
