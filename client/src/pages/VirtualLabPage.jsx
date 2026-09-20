import React from 'react';
import Navbar from '../components/Navbar';
import VirtualLab from '../components/VirtualLab';
import Footer from '../components/Footer';

const VirtualLabPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }} className="page-enter">
        <VirtualLab />
      </main>
      <Footer />
    </>
  );
};

export default VirtualLabPage;
