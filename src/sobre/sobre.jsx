import React from 'react';
import "./sobre.css"

import iconePerfil from "../imagens/icones/icone-sobre-perfil.png"
import iconeFutebol from "../imagens/icones/bola.png"
import hamburguer from "../imagens/icones/hamburguer.png"
import volei from "../imagens/icones/volei.png"
import spotify from "../imagens/icones/spotify.png"
import adidas from "../imagens/icones/adidas.png"

import foto from "../imagens/foto.png"
const sobre = () => {
    return (
        <div className="sobre">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="foto">
                            <img className="img-responsive" src={foto} alt="" />
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <div className="texto-sobre">
                            <div>
                                <img src={iconePerfil} alt="" />
                                <h2>
                                    Hello, I am Guilherme de Lima Mota.
                                </h2>
                            </div>
                            <div>
                                <p>
                                Desenvolvedor Front-end, iniciando na área de desenvolvimento e estudando muito tecnologias voltadas para desenvolvimento web. Intusiasta das novas tecnologias do mercado, aprendiz de tuturias do youtube, sonhando em criar o novo Uber, Tinder, Facebook, Instagram em um futuro bem distante. Ademais, crio projetos independentes a fim de colocar em prática os estudos. Enfim, você está no meu portfólio (desenvolvido por mim mesmo) e aqui verá meus projetos e um pouco sobre mim.
                                </p>
                                <ul className="list-unstyled list-inline">
                                    <li>
                                        <img src={iconeFutebol} alt="" />
                                    </li>
                                    <li>
                                        <img src={hamburguer} alt="" />
                                    </li>
                                    <li>
                                        <img src={volei} alt="" />
                                    </li>
                                    <li>
                                        <img src={spotify} alt="" />
                                    </li>
                                    <li>
                                        <img src={adidas} alt="" />
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default sobre;
