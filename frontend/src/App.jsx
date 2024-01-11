import React from 'react';
// import './App.css'
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import HomePage from './components/Homepage';

function App() {

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
