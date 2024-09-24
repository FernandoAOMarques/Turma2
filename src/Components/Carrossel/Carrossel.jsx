

import './Carrossel.css'
import React from 'react'
import imagem1 from "./Frame 53659(1).png";
import imagem2 from "./Frame 53659(2).png";
import imagem3 from "./Frame 53659(3).png";
// import fogo from "./fogo(1).png";
import imagem4 from "./Frame 53659(4).png";
import imagem5 from "./Frame 53659(5).png";
import fogo from "./fogo.png"
const Carrossel = () => {
  // const imagens = [imagem1,imagem2,imagem3,imagem4,imagem5]
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div>
        <div className='carrossel-flex'>
        <p>Melhores ofertas personalizadas</p>
          <h1> Queima de stoque Nike<img src={fogo} alt="fogo" />  </h1>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button>Ver Ofertas</button>
        </div>
        <div className='imagemCarrossel'>
        <img className="d-block w-100" src={imagem1} alt="First slide"/>
        </div>
        </div>
      </div>
      <div  className="carousel-item">
      <div className='carrossel-flex'>
        <div>
        <p>Melhores ofertas personalizadas</p>
          <h1> Queima de stoque Nike<img src={fogo} alt="fogo" />  </h1>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button>Ver Ofertas</button>
        </div>
        <div className='imagemCarrossel'>
        <img className="d-block w-100" src={imagem2} alt="First slide"/>
        </div>
        </div>
      </div>
      <div  className="carousel-item">
      <div className='carrossel-flex'>
        <div>
        <p>Melhores ofertas personalizadas</p>
          <h1> Queima de stoque Nike<img src={fogo} alt="fogo" /> </h1>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button>Ver Ofertas</button>
        </div>
        <div className='imagemCarrossel'>
        <img className="d-block w-100" src={imagem3} alt="First slide"/>
        </div>
        </div>
      </div>
      <div  className="carousel-item">
      <div className='carrossel-flex'>
        <div>
        <p>Melhores ofertas personalizadas</p>
          <h1> Queima de stoque Nike<img src={fogo} alt="fogo" /> </h1>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button>Ver Ofertas</button>
        </div>
        <div className='imagemCarrossel'>
        <img className="d-block w-100" src={imagem4} alt="First slide"/>
        </div>
        </div>
      </div>
      <div className="carousel-item">
      <div className='carrossel-flex'>
        <div>
        <p>Melhores ofertas personalizadas</p>
          <h1> Queima de stoque Nike<img src={fogo} alt="fogo" /> </h1>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button>Ver Ofertas</button>
        </div>
        <div className='imagemCarrossel'>
        <img className="d-block w-100" src={imagem5} alt="First slide"/>
        </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
      )
}

export default Carrossel
