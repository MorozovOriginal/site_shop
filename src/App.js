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
import About from "./Pages/About"
import Product from "./Pages/Product"
import Car from "./Pages/Car"
import Cloth from "./Pages/Cloth"
import Belt from "./Pages/Belt"
import Denim from "./Pages/Denim"
import Cloth4 from "./Pages/Cloth4"
import Cloth5 from "./Pages/Cloth5"
import Cloth6 from "./Pages/Cloth6"
import Cloth7 from "./Pages/Cloth7"
import Cloth8 from "./Pages/Cloth8"
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
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/car' element={<Car />} />
        <Route path='/cloth' element={<Cloth />} />
        <Route path='/belt' element={<Belt />} />
        <Route path='/denim' element={<Denim />} />
        <Route path='/cloth4' element={<Cloth4 />} />
        <Route path='/cloth5' element={<Cloth5 />} />
        <Route path='/cloth6' element={<Cloth6 />} />
        <Route path='/cloth7' element={<Cloth7 />} />
        <Route path='/cloth8' element={<Cloth8 />} />
      </Routes>
    </>

  );
}

export default App;


