import React from 'react'
import Informacoes from './Informacoes'
import Logo from '../Logo/Logo'
import './Footer.css'
const Footer = () => {
  const list1 = [
    {text: 'Sobre Drip Store', link: '/about'},
    {text: 'Segurança', link: '/segurança'},
    {text: 'Wishlist', link: '/favoritos'},
    {text: 'Blog', link: '/blog'},
    {text: 'Trabalhe Conosco', link: '/carreira '},
    {text: 'Meus Pedidos', link: '/pedidos'}
  ]
  const list2 = [
    {text: 'Camisetas', link: '/camisetas'},
    {text: 'Calças', link: '/calcas'},
    {text: 'Bonés', link: '/bones'},
    {text: 'Headphones', link: '/fone'},
    {text: 'Tênis', link: '/tenis '}
  ]
  return (
  <footer>
    <div className='logoFooter'>
      <Logo cor='branca' />
    </div>
    <div className='apresentacao'>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      dipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore.
    </p>
    </div>
    <div className='midiaSocial'>
      
    </div>
    <div>
      <Informacoes title="Informação" info={list1} /> 
      <Informacoes title='Categorias' info={list2} /> 
    </div>
  </footer> )
}

export default Footer
