import React from "react";
import "./Posts.css";
import ImagePost1 from "./Image 3.jpg";
import ImagePost2 from "./Image 4.jpg";
import ImagePost3 from "./Image 1.jpg";

export default props =>

<section className="SectionPosts">
    <div className="ContainerPosts">
        <figure className="ContainerPost">
            <div>
                <img src={ImagePost1} alt="Image1"/>
            </div>            
            <span>Curiosidades</span>
            <figcaption>Lorem ipsum dolor sit amet, consectetuer.</figcaption>
        </figure>
        <figure className="ContainerPost">
            <div>
                <img src={ImagePost2} alt="Image2"/>
            </div>            
            <span>Dicas</span>
            <figcaption>Lorem ipsum dolor sit amet, consectetuer.</figcaption>
        </figure>
        <figure className="ContainerPost">
            <div>
                <img src={ImagePost3} alt="Image3"/>
            </div>            
            <span>Cuidados</span>
            <figcaption>Lorem ipsum dolor sit amet, consectetuer.</figcaption>
        </figure>
    </div>
</section>