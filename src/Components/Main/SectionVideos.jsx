import React from "react";
import "./Videos.css";
import Video1 from "./Image 6.JPG";
import Video2 from "./Image 7.JPG";
import Play from "./Play.svg";





export default props =>


<section className="SectionVideos">
    <div className="MainVideos">
        <h3>Ultimos Videos Engraçados</h3>
        <div className="Videos">
            <figure>
                <img src={Video1} alt="video1" className="principalIMG" />
                <img src={Play} alt="play" className="Play"/>
            </figure>
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</span>
        </div>
        <div className="Videos">
            <figure>
                <img src={Video2} alt="video2" className="principalIMG" />
                <img src={Play} alt="play" className="Play" />
            </figure>
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</span>
        </div> 
        <span className="more">mostrar mais</span>  
    </div>
</section>
