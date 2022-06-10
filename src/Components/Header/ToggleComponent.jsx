import React from "react";
import "./Header.css";

const LogoCustom = () => {
    return (
        
    <div className="ToggleContainer">
        <input type="checkbox" className="checkbox" id="checkbox"/>
        <label htmlFor="checkbox" className="ToggleContainer">
            <svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 443.3 344" className="Toggle">
            <g>
                <path d="M424.8,46.7H18.5c-5.5,0-9.9-4.4-9.9-9.9V26.5c0-5.5,4.4-9.9,9.9-9.9h406.3c5.5,0,9.9,4.4,9.9,9.9v10.3
                    C434.7,42.2,430.2,46.7,424.8,46.7z"/>
            </g>
            <g>
                <path d="M424.8,139.7H18.5c-5.5,0-9.9-4.4-9.9-9.9v-10.3c0-5.5,4.4-9.9,9.9-9.9h406.3c5.5,0,9.9,4.4,9.9,9.9v10.3
                    C434.7,135.2,430.2,139.7,424.8,139.7z"/>
            </g>
            <g>
                <path d="M424.8,232.7H18.5c-5.5,0-9.9-4.4-9.9-9.9v-10.3c0-5.5,4.4-9.9,9.9-9.9h406.3c5.5,0,9.9,4.4,9.9,9.9v10.3
                    C434.7,228.2,430.2,232.7,424.8,232.7z"/>
            </g>
            <g>
                <path d="M424.8,325.7H18.5c-5.5,0-9.9-4.4-9.9-9.9v-10.3c0-5.5,4.4-9.9,9.9-9.9h406.3c5.5,0,9.9,4.4,9.9,9.9v10.3
                    C434.7,321.2,430.2,325.7,424.8,325.7z"/>
            </g>
            </svg>
        </label>
        <div className="ToggleMenu">
            <ul >
                <li><a href="#">Categorias</a></li>
                <li><a href="#">Nossos Produtos</a></li>
                <li><a href="#">Poste e Ganhe</a></li>           
            </ul>
            <div className="LogginToggle">
                <span>Entrar</span>
                <span>Cadastra-se</span>
            </div>            
        </div>
    </div>
    )
}

export default LogoCustom