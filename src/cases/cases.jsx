import React from 'react';
import "./cases.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

import vs from "../imagens/icones/visual.png"
import boot from "../imagens/icones/bootstrap-case.png"
import js from "../imagens/icones/js-case.png"
import figma from "../imagens/icones/figma-case.png"
import html from "../imagens/icones/html-case.png"
import css from "../imagens/icones/css-case.png"
import react from "../imagens/icones/react-case.png"
import madefy from "../videos/madefy-2.mp4"
import codeSite from "../videos/code-site-company.mp4"
import academy from "../videos/academy.mp4"
import easy from "../videos/easy.mp4"
const cases = () => {
    return (
        <div className="cases">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titulo-case">
                            <img src={vs} alt="" />
                            <h2>Cases</h2>
                        </div>
                    </div>
                </div>
                <OwlCarousel className="owl-carousel" items={1} autoplay autoplayTimeout={20000} nav="true" dots loop>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="desketop">
                                    <video src={madefy} autoPlay loop muted></video>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="texto-case">
                                    <h2>madefy</h2>
                                    <p>Site desenvolvido enquanto estagiava em uma Agência de Marketing. Site para uma empresa de tecnologia, a MADEFY. Nesse site fui um pouco designer (tendo referência o último site deles) e desenvolvi todo o site em html, css e bootstrap. Um projeto bem legal, dinamico e animações com scroll. <a href="https://www.madefy.com.br/" target="_blank">Visitar</a></p>
                                    
                                    <div>
                                        <img src={boot} alt="" />
                                        <img src={js} alt="" />
                                        <img src={html} alt="" />
                                        <img src={css} alt="" />
                                        <img src={figma} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="desketop">
                                    <video src={codeSite} autoPlay loop muted></video>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="texto-case">
                                    <h2>Code Site Company</h2>
                                    <p>Site desenvolvido para uma empresa fictícia na área de TI. Nela utilizer React JS, transições nos botões e sombas em alguns elementos. Site com total intuito de testar os conhecimentos adquiridos em tuturiais. <a href="https://codesitecompany.netlify.app/" target="_blank">Visitar</a></p>
                                    <div>
                                        <img src={js} alt="" />
                                        <img src={html} alt="" />
                                        <img src={css} alt="" />
                                        <img src={react} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="desketop">
                                    <video src={academy} autoPlay loop muted></video>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="texto-case">
                                    <h2>Academy Gym</h2>
                                    <p>Site desenvolvido para uma academia fictícia. Nela utilizei React JS, transições nos botões e sombas em alguns elementos e efeito parallax. Site com total intuito de testar os conhecimentos adquiridos em tuturiais. <a href="https://academygym.netlify.app/" target="_blank">Visitar</a></p>
                                    <div>

                                        <img src={js} alt="" />
                                        <img src={html} alt="" />
                                        <img src={css} alt="" />
                                        <img src={react} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="desketop">
                                    <video src={easy} autoPlay loop muted></video>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="texto-case">
                                    <h2>Easy Read</h2>
                                    <p>Escrita Fácil é um jogo educacional que desenvolvi durante a matéria Algortimos e Estruturas de Dados da Faculdade. O jogo é voltado para crianças a testar e aumentar seu conhecimento de escrita com imagens e palavras. Foi um projeto bem complexo (levando em consideração meu nível de conhecimento em React na época), mas absorvi muitos aprendizados ao desenvolver um software como esse. <a href="https://github.com/Guilherme-stack/easyread" target="_blank">Link do repositório</a></p>
                                    <div>

                                        <img src={js} alt="" />
                                        <img src={html} alt="" />
                                        <img src={css} alt="" />
                                        <img src={figma} alt="" />
                                        <img src={react} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>

            </div>
        </div>
    );
}

export default cases;
