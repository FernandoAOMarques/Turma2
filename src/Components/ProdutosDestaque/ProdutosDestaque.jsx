import React from 'react'
import Camisa from '../../assets/star-wars.png'
import Tenis from '../../assets/Mask group (1).png'
import Head from '../../assets/headgrande.png'
import { Link } from 'react-router-dom'


const ProdutosDestaque = () => {
  const card = [
    { 
    promo: 30,
    img: Camisa,
    text: "Novo drop Supreme",
    nome: "camisa star wars",
    },
   { 
    promo: 30,
    img: Tenis,
    text: "Colecao Adidas",
    nome: "tenis adidas",
    },
    {
    promo: 30,        
    img: Head,
    text: "Novo Beats",
    nome: "headphone",
     }
  ]
  return (
  <div id='cards'>
    {card.map((produto, index) => {
    <div key={index} className="card-content">
      <div className="discount-card">
        <h2 className="discount-title">{produto.promo}% OFF</h2>
        <p className="discount-description">{produto.text}</p>
        <Link to='/produtos' type="button" className="discount-button">Comprar</Link>   
      </div>
      <div className="card-image">
        <img src={produto.img} alt={produto.nome} />
      </div>
    </div>  
  })} 
  </div>
  )
}

export default ProdutosDestaque
