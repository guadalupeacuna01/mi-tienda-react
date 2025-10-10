import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import ThemeContext, {tema} from './components/ThemeContext'
import CartProvider from './components/CartContext'

import Layout from './components/Layout'
import Home from './components/Home'
import Contacto from './components/Contacto'
import ProductListContainer from './components/ProductListContainer'
import ProductDetail from './components/ProductDetail'
import Error from './components/Error'


function App() {
  const [temaActual, setTemaActual] = useState(tema.claro);

  const handleTema = () => {
    temaActual === tema.primavera ?
    setTemaActual(tema.claro) :
    setTemaActual(tema.primavera)
  }


  return (
    <>
      <ThemeContext.Provider value={{temaActual, handleTema}}>
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
      </ThemeContext.Provider>
    </>
  )
}

export default App
