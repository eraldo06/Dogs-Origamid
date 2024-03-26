import { useState } from 'react'
import React from 'react'
import  './App.css'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Login } from './Components/Login/Login'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/Login' element={<Login></Login>}></Route>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
