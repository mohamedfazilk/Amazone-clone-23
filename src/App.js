import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { auth } from './Components/firebase';
import { useStateValue } from './Components/StateProvider';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51MZUqRSFsrqx0Nph09X0e8yhPgjO185BClhjoU37WCZKMJU3aIXgy6Z34QiCJl1XV9h671xMsGeBceojxAZj3uPQ00OaSiX1sz"
)

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER....>', authUser)
      if (authUser) {
        //user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="app">

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<> <Header /><Checkout /> </>} />
          <Route path='/payment' element={<><Header /><Elements stripe={promise}><Payment /></Elements></>}></Route>
          <Route path='/' element={<> <Header /><Home /></>} />

        </Routes>



      </div>
    </BrowserRouter>

  );
}

export default App;
