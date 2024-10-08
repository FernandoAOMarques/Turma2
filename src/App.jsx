
import React from 'react'
import Footer from './Components/Footer/Footer'
import Rotas from './Components/Rotas/Rotas'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import {ContextoImagem} from './Components/ContextoImagem/ContextoImagem'





const App = () => {
  return (
    <div>
    <BrowserRouter>
    <ContextoImagem>
    <Header/>
    <Rotas/>
    <Footer/>
    </ContextoImagem>
    </BrowserRouter>
    </div>
  )
}

export default App
