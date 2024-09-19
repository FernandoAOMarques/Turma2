
import React from 'react'
import Footer from './Components/Footer/Footer'
import Rotas from './Components/Rotas/Rotas'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import ProdutosEmAlta from './Components/ProdutosEmAlta/ProdutosEmAlta'





const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Rotas/>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
