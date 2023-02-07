// For Firebase JS SDK v7.20.0 and later, measurementId is

import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'




const firebaseConfig = {
    apiKey: "AIzaSyAJ9-Nx75AJu5t5ePzlbd0gmq6RJBHnork",
    authDomain: "e-challenge-66492.firebaseapp.com",
    projectId: "e-challenge-66492",
    storageBucket: "e-challenge-66492.appspot.com",
    messagingSenderId: "319120965755",
    appId: "1:319120965755:web:a7a9785c7a31627d2222de",
    measurementId: "G-0ZPYK03ZVN"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
   
  export{auth}

 