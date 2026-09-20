import React from 'react';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const TestimonialsPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }} className="page-enter">
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
