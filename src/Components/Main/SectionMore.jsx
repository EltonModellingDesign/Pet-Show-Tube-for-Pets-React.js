import React from "react";
import "./Videos.css";
import Exemplo1 from "./Exemplo 2.jpg";
import Play from "./Play.svg";


export default props =>
<section className="MoreVideos">
        <div className="MoreHide">
            <figure>
                <img src={Exemplo1} alt="Exemplo1" className="principalIMG" />
                <img src={Play} alt="play" className="Play"/>
            </figure>
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</span>
        </div>   
</section>