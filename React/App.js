
import './App.css';

import Safar_login from './Components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Safar_ForgetPass from './Components/Safar_ForgetPass';
import React from 'react';
import Register from './Components/Register';

import Website from './Components/Landing';





function App() {
  return  (
    <React.StrictMode>
    <BrowserRouter> {/* The key: Wrap your app with BrowserRouter */}
    
      <Routes>
     
         <Route path="/" element={<Website/>} /> 
        <Route path="/register" element={<Register/>} />
        <Route path="/forgotpassword" element={<Safar_ForgetPass/>} />
       <Route path="/login" element={<Safar_login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
 
   

  );
}
export default App;
