import React from 'react'
import Tenis from '../../assets/Tenis_Promo.png'
import './ProdutosEmAlta.css'

function ProdutosEmAlta () {
  return (
  
      <section>
        <div className='card-off1'>
          <p className='card-sale' >30% OFF</p>
          <img className='card-image' src= {Tenis} alt="Tenis" />
          <p className='card-text-tenis' >Tênis</p>
          <h2 className='card-title'>K-Swis V8 - Masculino <br />$200 $100</h2>
        </div>
        <div className='card-off1'>
          <p className='card-sale' >30% OFF</p>
          <img className='card-image' src= {Tenis} alt="Tenis" />
          <p className='card-text-tenis' >Tênis</p>
          <h2 className='card-title'>K-Swis V8 - Masculino <br />$200 $100</h2>
        </div>
          
        <div className='card'>
            <p className='card-sale' ></p>
            <img className='card-image' src= {Tenis} alt="Tenis" />
            <p className='card-text-tenis' >Tênis</p>
            <h2 className='card-title'>K-Swis V8 - Masculino <br />$200 $100</h2>
        </div>
        <div className='card'>
            <p className='card-sale' ></p>
            <img className='card-image' src= {Tenis} alt="Tenis" />
            <p className='card-text-tenis' >Tênis</p>
            <h2 className='card-title'>K-Swis V8 - Masculino <br />$200 $100</h2>
        </div>
      </section>
  )
}

export default ProdutosEmAlta