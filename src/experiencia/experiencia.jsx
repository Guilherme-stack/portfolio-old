import React from 'react';
import "./experiencia.css"

import xp from "../imagens/icones/experiencia.png"
import edu from "../imagens/icones/educacao.png"
import trampo1 from "../imagens/icones/trampo-1.png"
import ufg from "../imagens/icones/ufg.png"
import web from "../imagens/icones/dev-web.png"
import layout from "../imagens/icones/layout.png"
const experiencia = () => {
    return (
        <div className="carreira">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="experiencia">
                            <div className="titulo-experiencia">
                                <img src={xp} alt="" />
                                <h2>Experiência</h2>
                            </div>
                        </div>
                        <div className="trampo1">
                            <div className="titulo-trampo">
                                <img src={trampo1} alt="" />
                                <h3>
                                    red cake agência de marketing digital
                                </h3>
                            </div>
                            <div className="info-trampo">
                                <div>
                                    <h4>Atividades</h4>
                                    <p>Desenvolvimento de Sites em HTML CSS e Bootstrap.</p>
                                    <p>Manutenção de sites.</p>
                                    <p>Integrar templates desenvolvidos e html,css e bootstrap no WordPress com PHP (básico).</p>
                                </div>
                                <div>
                                    <h4>Início</h4>
                                    <p>27/05/2021</p>
                                </div>
                                <div>
                                    <h4>Início</h4>
                                    <p>01/09/2021</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="educacao">
                            <div className="titulo-educacao ">
                                <h2>Educação</h2>
                                <img src={edu} alt="" />
                            </div>
                        </div>
                        <div className="edu1">
                            <div className="titulo-edu">
                                <img src={ufg} alt="" />
                                <h4>universidade federal de goiás</h4>
                            </div>
                            <div className="info-edu">
                                <div>
                                    <h4>Curso</h4>
                                    <p>Sistemas de Informação</p>
                                </div>
                                <div>
                                    <h4>Período</h4>
                                    <p>3º Período</p>
                                </div>
                                <div>
                                    <h4>Início</h4>
                                    <p>02/03/2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="edu1">
                            <div className="titulo-edu">
                                <img src={web} alt="" />
                                <h4>DESENVOLVIMENTO WEB 2020</h4>
                            </div>
                            <div className="info-edu">
                                <div>
                                    <h4>Plataforma</h4>
                                    <p>Udemy</p>
                                </div>
                                <div>
                                    <h4>Carga Horária</h4>
                                    <p>100 horas</p>
                                </div>
                                <div>
                                    <h4>Início</h4>
                                    <p>15/07/2020</p>
                                </div>
                                <div>
                                    <h4>Atividades</h4>
                                    <p>HTML,
                                        CSS,
                                        Javascript,
                                        Bootstrap
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="edu1">
                            <div className="titulo-edu">
                                <img src={layout} alt="" />
                                <h4>DESENVOLVIMENTO LAYOUT GRID - CSS GRID</h4>
                            </div>
                            <div className="info-edu">
                            <div>
                                    <h4>Plataforma</h4>
                                    <p>ORIGAMID</p>
                                </div>
                                <div>
                                    <h4>Carga Horária</h4>
                                    <p>2 horas</p>
                                </div>
                                <div>
                                    <h4>Início</h4>
                                    <p>20/09/2021</p>
                                </div>
                                <div>
                                    <h4>Atividades</h4>
                                    <p>HTML,
                                        CSS,
                                        Javascript,
                                        Grid Layout,
                                        Desenvolvmento de Site
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default experiencia;
