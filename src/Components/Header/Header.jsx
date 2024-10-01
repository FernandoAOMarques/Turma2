import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Cart from "../../assets/carrinho.png";
import { Link } from "react-router-dom";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="header">
      <section className="menu">
        <Logo />
        <div className="pesquisa">
          <input placeholder="Pesquisa produto..." />
            <i id="lupa" ><HiMiniMagnifyingGlass/></i> 
        </div>
        <a href="/">Cadastre-se</a>
        <button className="btn">Entrar</button>
        <Link to="/carrinho">
          {" "}
          <img src={Cart} alt="carrinho" />{" "}
        </Link>
      </section>
      <nav className="menu2">
        <Link to={"/"} className="nav-link active" >Home</Link>
        <Link to={"/about"} className="nav-link" >About</Link>
        <Link to={"/services"} className="nav-link" >Services</Link>
        <Link to={"/contact"} className="nav-link" >Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
