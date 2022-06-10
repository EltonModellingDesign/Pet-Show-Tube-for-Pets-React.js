import React from "react";
import "./Footer.css";
import Certification from "./site-protegido.png";
import Facebook from "./facebook.png";
import Instagran from "./Instagran transparente.png";

export default props =>

<footer className="rodape">
    <div className="text1">
            <span className="Titulo">Páginas</span>
            <nav className="Links1">
                <a href="#">. Home</a>
                <a href="#">. Categorias</a>
                <a href="#">. Nossos Produtos</a>
                <a href="#">. Poste e Ganhe</a>  
            </nav>                       
    </div>
        <div className="text2">
            <span className="Titulo">Informações</span>
            <div className="textContainers">
                Empresa Tom’s Store Solutions<br/>
                MEI: 33.567.594/0001-76<br/>
                Cidade São Paulo/SP<br/>
                CEP: 03685-060<br/>
                Bairro:Jardim São Nicolau<br/>
            </div>
        </div>
        <div className="text4">           
            <span className="Titulo">Support</span>
            <div className="textContainers">
                <p/> SAC <br/> Tel: 0800 7776-9255<br/>Whats:<br/>(11) 99336-5689<p/>
                <p>Ouvidoria Tel: <br/> 0800-7779-6668</p>               
            </div>
            
        </div>
        <div className="text5">
            <span className="Titulo">Selos</span>
            <a href="#"><img src={Certification} alt="site-protegido" weidth="216,44" height="113,77"/></a>
        </div>
        <div className="text6">
            <span className="Titulo">Redes Sociais</span>
            <div className="textContainers">
                <a href="#"><img src={Facebook} alt="facebook" weidth="216,44" height="113,77"/></a>
                <a href="#"><img src={Instagran} alt="Instagram" weidth="216,44" height="113,77"/></a>
            </div>
        </div>
</footer>