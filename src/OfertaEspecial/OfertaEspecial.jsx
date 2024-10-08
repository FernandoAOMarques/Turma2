import React from "react";
import Tenis from "./../assets/Laye.png";
import './OfertaEspecial.css'
import elipse from '../assets/Ellipse.png'

const OfertaEspecial = () => {
  return (
    <div className="containerOferta">
      <div className="row-50"> <img className='img1' src= {Tenis} alt="Tenis" /> <img className="img2" src={elipse} alt="elipse" />
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
