import React from 'react';
import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const FAQPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }} className="page-enter">
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
