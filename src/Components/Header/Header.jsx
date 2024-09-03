import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import Cart from '../../assets/carrinho.png'
import { Link } from 'react-router-dom'




const Header = () => {
  return (
    <div>
      <div>
      <header className='header' >
        
        <div className='navbar1' >
        <Logo />
            <input type="text" placeholder='Pesquisa produto...' />
            <a href="/">Cadastre-se</a>
            <button>Entrar</button>  
            
         {/*<Link to={'/'}>
            <img src={Cart} alt="Carrinho"/>
            </Link>*/}
               

        </div>
        <nav className='navbar'>
        {/*<Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/services'}>Services</Link>
        <Link to={'/contact'}>Contact</Link>*/}
        </nav>
      </header>
    </div>
    </div>
  )
}

export default Header

