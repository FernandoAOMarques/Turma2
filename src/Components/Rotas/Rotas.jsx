import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Rotas = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/produtos' element={<ProductList/>}/>
        <Route path='/produtos/:id' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default Rotas
