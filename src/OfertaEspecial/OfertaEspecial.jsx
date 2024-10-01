import React from "react";
import Tenis from "./../assets/Laye.png";
import './OfertaEspecial.css'

const OfertaEspecial = () => {
  return (
    <div className="container">
      <div className="row-50"> <img className='laye' src= {Tenis} alt="Tenis" />
      </div>
      <div className="ofertaE">
        <p >Ofertas especial</p>
        <h1>Air Jordan edicao de colecionador </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        <button className="btn">Ver Oferta</button>
      </div>
    </div>
  );
};

export default OfertaEspecial;
