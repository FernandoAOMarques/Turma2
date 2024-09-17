import React from "react";
import './Informacoes.css'

const Informacoes = ({ title, info }) => {
  return (
    <>
      <div className="titulo-lista">
        <h3>{title}</h3>
      </div>
      <ul className="conteudo-lista">
        {info.map((item, index) => (
          <li key={index}>
            <a href={item.link}> {item.text} </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Informacoes;
