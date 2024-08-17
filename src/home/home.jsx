import React from 'react';
import "../home/home.css"
import backHome from "../imagens/backgrounds/background-home.png"
import img from "../imagens/icones/perfil-rodape.png"
import bootstrap from "../imagens/icones/bootstrap-mov.png"
import js from "../imagens/icones/js-mov.png"
import css from "../imagens/icones/css-mov.png"
import html from "../imagens/icones/html-mov.png"
import figma from "../imagens/icones/figma-mov.png"
import c from "../imagens/icones/c-mov.png"
import react from "../imagens/icones/react.png"

const home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img className="img-animation" src={react} alt="" />
                            <img className="img-animation" src={img} alt="" />
                            <img className="img-animation" src={js} alt="" />
                            <img className="img-animation" src={bootstrap} alt="" />
                            <img className="img-animation" src={figma} alt="" />
                            <img className="img-animation" src={css} alt="" />
                            <img className="img-animation" src={html} alt="" />
                            <img className="img-animation" src={c} alt="" />
                        </div>
                        <div className="col-md-7">
                            <div className="texto-home">
                                <h1 className="titulo-principal">Olá, meu nome é Guilherme. Sou desenvolvedor Front-End e você está no meu portfólio. </h1>
                                <a className="suave" href="#contato">entrar em contato</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;

