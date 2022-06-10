import React from "react";
import "./Header.css";
import Logo from "./Logo-Pet.svg";
import ToggleCustom from "./ToggleComponent";

export default props =>

<header>

    <div className="Login">
        <span>Entrar</span>
        <span>|</span>
        <span>Cadastra-se</span>
    </div>
    <nav className="Menu">
        <a href="#" className="LogoContainer">
            <img src={Logo} alt="logo" className="Logo"/>
        </a>       
        <ul className="MenuList">
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Nossos Produtos</a></li>
            <li><a href="#">Poste e Ganhe</a></li>           
        </ul>
        <ToggleCustom/>
    </nav>
</header>