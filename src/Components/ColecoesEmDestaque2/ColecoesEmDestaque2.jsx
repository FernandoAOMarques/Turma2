import React from 'react'
import Camisa1 from '../../assets/camisa-rosa.png'
import Calca from '../../assets/calca.png'
import Headp from '../../assets/head.png'
import Calca2 from '../../assets/calca.png'
import Tenis from '../../assets/tenispequeno.png'


function ColecaoDestaque2 () {

  const itens = [
    {img: Camisa1, description: 'Camisa'},
    {img: Calca2, description: 'Calca'},
    {img: Calca, description: 'Bones'},
    {img: Headp, description: 'Head Phone'},
    {img: Tenis, description: 'Tenis.'},
  ]
  return (
    <div id='itens'>
      {itens.map((item, index) => ( 
        <div key={index} className='itens-content'>
          <div className='imgColecao2' >
            <img src={itens.img} alt={itens.description} />
          </div>
          <div className='desColecao2' >
            <p >{itens.description}</p>
          </div>
        </div> ) )}
    </div>
  )
}
export default ColecaoDestaque2

