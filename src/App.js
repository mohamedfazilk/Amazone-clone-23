import React,{useEffect} from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { auth } from './Components/firebase';
import { useStateValue } from './Components/StateProvider';


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER....>', authUser)
      if(authUser){
        //user logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])

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
