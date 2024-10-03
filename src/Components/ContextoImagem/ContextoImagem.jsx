import React, { Children } from 'react'
import { createContext, useState } from 'react'
import Tenis from '../../assets/Tenis_Promo.png'

const produtos = [
  { desconto: "30% OFF",
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },
  { desconto: "30% OFF",
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },   
   {
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    {
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    {
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    {
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    { 
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    {
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    { 
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    { 
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    {
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    { 
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },
  {
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    { 
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    { 
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },    { 
    img: Tenis,
    nomeDoProduto: "K-Swis V8 - Masculino",
    preco: "$200",
    precoDesconto: "$100"
  },
 ]

 const CardContexto = createContext()

const ContextoImagem = ({children}) => {
  const [produto, setProduto] = useState(produto);
  return (
    <div>
      <CardContexto.Provider value={{produto, setProduto}} >
        {children}
      </CardContexto.Provider >

    </div>
  )
}

export default {CardContexto, ContextoImagem}
