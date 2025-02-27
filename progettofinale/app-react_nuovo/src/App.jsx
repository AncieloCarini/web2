import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Assicurati di importare le tue pagine
import Users from './components/Users';
import Assenze from './components/Assenze';
import About from './components/About'
import CustomNavbar from './components/Navbar'; // Navbar personalizzata

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/assenze" element={<Assenze />} />        
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
};

export default App;
