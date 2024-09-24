import React from 'react'
import Camisa1 from '../../assets/camisaRosa.png'
import Calca from '../../assets/calca.png'
import Headp from '../../assets/head.png'
import Calca2 from '../../assets/calca.png'
import Tenis from '../../assets/tenispequeno.png'
import './ColecoesEmDestaque2.css'

function ColecaoDestaque2 () {

  const itens = [
    {img: Camisa1, description: 'Camisetas'},
    {img: Calca2, description: 'Calcas'},
    {img: Calca, description: 'Bones'},
    {img: Headp, description: 'Headphone'},
    {img: Tenis, description: 'Tenis.'},
  ]
  return (
    <div id='itens'>
      {itens.map((item, index) => ( 
        <div key={index} className='itens-content'>
          <div className='imgColecao2' >
            <img src={item.img} alt={item.description} />
          </div>
          <div className='desColecao2' >
            <p >{item.description}</p>
          </div>
        </div> ) )}
    </div>
  )
}
export default ColecaoDestaque2

