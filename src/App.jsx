import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import Rotas from './Components/Rotas/Rotas'
import { BrowserRouter } from 'react-router-dom'




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
