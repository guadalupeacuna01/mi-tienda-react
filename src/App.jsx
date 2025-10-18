import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

import CartProvider from './components/CartContext';

import Layout from './components/Layout'
import Home from './components/Home'
import Contacto from './components/Contacto'
import ProductListContainer from './components/ProductListContainer'
import ProductDetail from './components/ProductDetail'
import Error from './components/Error'


function App() {

  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}> 

            <Route index element={<Home />} />
            <Route path='productos' element={<ProductListContainer />} />
            <Route path='productos/:id' element={<ProductDetail />} />

            <Route path='Contacto' element={<Contacto />} />
            <Route path='/*' element={<Error />} />

          </Route>

        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
