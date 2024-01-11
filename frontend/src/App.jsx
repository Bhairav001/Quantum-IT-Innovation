import React from 'react';
// import './App.css'
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import HomePage from './components/Homepage';
import PageNotFound from './pages/PageNotFound';
import Table from './pages/Table';
import PrivateRoute from './protectedRoute/PrivateRoute';

function App() {

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/table' element={<PrivateRoute><Table/></PrivateRoute>}/>
       <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    </>
  )
}

export default App
