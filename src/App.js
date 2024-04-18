import { useContext, useEffect } from "react"
import { Context } from "./index"
import React from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Registration from "./Pages/Registration";

function App() {

  const { store } = useContext(Context)

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />}/>
      </Routes>
    </>

  );
}

export default App;


