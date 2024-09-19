import React from 'react'
import Carrossel from '../../Components/Carrossel/Carrossel'
import ProdutosDestaque from '../../Components/ProdutosDestaque/ProdutosDestaque'
import Section from '../../Components/Section/Section.jsx'
import ProdutosEmAlta from '../../Components/ProdutosEmAlta/ProdutosEmAlta.jsx'
import ColecoesEmDestaque2 from '../../Components/ColecoesEmDestaque2/ColecoesEmDestaque2.jsx'

const Home = () => {
  return (
    <div>
      
      <Carrossel />
      <Section title={'Colecoes em Destaque'} >
        <ProdutosDestaque />
      </Section>
      <Section title={'Colecoes em Destaque'} titleAlign="center"> 
        <ColecoesEmDestaque2 />
      </Section>
      <Section title={'Produtos em alta'} >
        <ProdutosEmAlta />
      </Section>
    </div>
  )
}

export default Home
