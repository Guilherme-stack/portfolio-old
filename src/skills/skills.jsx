import React from 'react';
import "./skills.css"

import ninja from "../imagens/icones/ninja.png"
import web from "../imagens/icones/web.png"
import design from "../imagens/icones/design.png"
import figma from "../imagens/icones/figma-skill.png"
import react from "../imagens/icones/react-skill.png"
import javascript from "../imagens/icones/javascript-skill.png"
import bootstrap from "../imagens/icones/bootstrap-skill.png"
import html from "../imagens/icones/html-skill.png"
import css from "../imagens/icones/css-skill.png"
const skills = () => {
    return (
        <div className="skills">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titulo-skills">
                            <img src={ninja} alt="" />
                            <h2>Skills</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="dev-web">
                            <div>
                                <img src={web} alt="" />
                            </div>
                            <h2>Desenvolvimento Web</h2>
                            <p>Criação de sites, landing pages, portfólio e blogs com códigos limpos que auxiliam na otimização, velocidade dos projetos e responsividade das aplicações desenvolvidos. Além disso, utilizando as tecnologias mais usadas do munda da programação.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="dev-design">
                            <div>
                                <img src={design} alt="" />
                            </div>
                            <h2>Design de interfaces</h2>
                            <p>Criação de sites, landing pages, portfólio e blogs com códigos limpos que auxiliam na otimização, velocidade dos projetos e responsividade das aplicações desenvolvidos. Além disso, utilizando as tecnologias mais usadas do munda da programaçaõ.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="tec">
                        <div className="xp flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <img src={figma} alt="" />
                                    <h3>Figma</h3>
                                </div>
                                <div className="back">
                                    <img src={figma} alt="" />
                                    <h3>Figma</h3>
                                </div>
                            </div>

                        </div>

                        <div className="xp flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <img src={bootstrap} alt="" />
                                    <h3>Bootstrap</h3>
                                </div>
                                <div className="back">
                                    <img src={bootstrap} alt="" />
                                    <h3>Bootstrap</h3>
                                </div>
                            </div>

                        </div>

                        <div className="xp flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <img src={javascript} alt="" />
                                    <h3>Javascript</h3>
                                </div>
                                <div className="back">
                                    <img src={javascript} alt="" />
                                    <h3>Javascript</h3>
                                </div>
                            </div>

                        </div>




                        <div className="xp flip-container">
                            <div className="flipper">
                                <div className="front" style={{top:"-10px"}}>
                                    <img src={html} alt="" />
                                    <h3>HTML 5</h3>
                                </div>
                                <div className="back" style={{top:"-10px"}}>
                                    <img src={html} alt="" />
                                    <h3>HTML 5</h3>
                                </div>
                            </div>

                        </div>
                        <div className="xp flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <img src={css} alt="" />
                                    <h3>CSS 3</h3>
                                </div>
                                <div className="back">
                                    <img src={css} alt="" />
                                    <h3>CSS 3</h3>
                                </div>
                            </div>

                        </div>

                        <div className="xp flip-container">
                            <div className="flipper">
                                <div className="front" style={{top:"-7px"}}>
                                    <img src={react} alt="" />
                                    <h3>React</h3>
                                </div>
                                <div className="back" style={{top:"-7px"}}>
                                    <img src={react} alt="" />
                                    <h3>React</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default skills;
