import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { PageNotFound } from './pages/PageNotFound'
import { Product } from './pages/Product'

function App() {

  return (
    <>
      <BrowserRouter>
      <h3>This is Header</h3>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='About' element ={<About/>}/>
        <Route path='Contact' element ={<Contact/>}/>
        <Route path='Product/:ProductId' element ={<Product/>}/>
        
        <Route path='*' element ={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
