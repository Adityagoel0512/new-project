// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import KycPage from './kyc';
import CustomerPage from './customer';
import Navbar from './navbar';
import TitleBar from './title';

function App() {
  return (
    <><Navbar />
  
    <TitleBar/><h1>Welcome to Oro</h1>

  <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/kyc" element={<KycPage />} />
        <Route path="/customer" element={<CustomerPage />} />
      </Routes>
    </Router></>
  );
}

export default App;
