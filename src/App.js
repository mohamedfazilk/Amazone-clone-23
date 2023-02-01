import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
        
        
        
      </div>
    </BrowserRouter>

  );
}

export default App;
