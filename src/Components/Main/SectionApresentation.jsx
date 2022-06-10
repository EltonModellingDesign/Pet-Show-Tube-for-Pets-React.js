import React from "react";
import "./Apresentation.css";
import ImagemCat from "./Image 5.jpg";
import ImagemDog from "./Image 8.jpg";

export default props =>

<section className="SectionApresentation">
    <div className="ContainerApresentation">
        <h3>VEJA UMA GRANDE VARIEDADE DE VIDEOS DE ANIMAIS ENGRAÇADOS E CURIOSIDADES</h3>
        <ul>
            <li>. Os videos mais engraçados de animais</li>
            <li>. Conheça curiosidades e dicas</li>
            <li>. Ganhe dinheiro compartilhando os momentos hilarios do seu bichano</li>
        </ul>
    </div>
    <div className="MainCategories">
        <div className="ContainerCategories">
            <h2>PRINCIPAIS CATEGORIAS</h2>
            <div>
                <figure>
                    <img src={ImagemCat} alt="Cats"/>
                    <figcaption>Gatos</figcaption>
                </figure>
                <figure>
                    <img src={ImagemDog} alt="Dogs"/>
                    <figcaption>Cachorros</figcaption>
                </figure>
            </div>
            <a href="#">veja mais...</a>  
        </div>       
    </div>
</section>