import React from 'react'
import './ProdutosEmAlta.css'

function ProdutosEmAlta ({listaProdutos}) {
   

   
   
  return (
      <>
          {listaProdutos.map((produto, index) => (
            <div key={index} className='card-off1'>
                <p className='card-sale' > {produto.desconto} </p>
                <img className='card-image' src= {produto.img} alt={produto.categoria} />
                <p className='card-text-tenis' > {produto.categoria} </p>
                <h2 className='card-title'> {produto.nomeDoProduto} </h2>
                <span className='preco'> {produto.preco} </span>
                <span className='precoDesconto'> {produto.precoDesconto} </span>
              </div>)) }        
      </> )
}

export default ProdutosEmAlta