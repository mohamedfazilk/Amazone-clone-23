import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={<> <Header /><Checkout /> </>} />
          <Route path='/' element={<> <Header /><Home /></>} />

        </Routes>



      </div>
    </BrowserRouter>

  );
}

export default App;
