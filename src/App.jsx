import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './Css/radio.css';
import './Css/Style.css';
import './Css/bootstrap.min.css';
import Home from './Home.jsx'; // Ensure Home component is imported
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import About from './About.jsx';// Import routing components

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />


      </Routes>
    </BrowserRouter>
  );
}
