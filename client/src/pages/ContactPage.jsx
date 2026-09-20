import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }} className="page-enter">
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
