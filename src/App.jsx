import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import backgroundImage from 'assets/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-87847.avif'

import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <main style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;