import { useContext, useEffect } from "react"
import { Context } from "./index"
import React from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Contact from './Pages/Contact'
import Registration from "./Pages/Registration";
import { Routes, Route } from "react-router-dom"
import './App.css';
import Personal from "./Pages/Personal";
import Edit from "./Pages/Edit";

function App() {

  const { store } = useContext(Context)

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </>

  );
}

export default App;


