import React from 'react'
import Carrossel from '../../Components/Carrossel/Carrossel'
import ProdutosDestaque from '../../Components/ProdutosDestaque/ProdutosDestaque'
import Section from '../../Components/Section/Section.jsx'
import ProdutosEmAlta from '../../Components/ProdutosEmAlta/ProdutosEmAlta.jsx'
import ColecoesEmDestaque2 from '../../Components/ColecoesEmDestaque2/ColecoesEmDestaque2.jsx'
import OfertaEspecial from '../../OfertaEspecial/OfertaEspecial.jsx'
import { useContext } from 'react'
import { CardContexto } from '../../Components/ContextoImagem/ContextoImagem.jsx'

const Home = () => {
  const {produto, setProduto} = useContext(CardContexto);

  let stop = [];
    for( let i = 0; i < 8; i++ ) {
      stop[i] = produto[i]
    }
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
        <ProdutosEmAlta listaProdutos={stop}/>
      </Section>
      <OfertaEspecial />
    </div>
  )
}

export default Home
