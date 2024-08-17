import React from 'react';
import "./redes.css"

import face from "../imagens/icones/facebook.png"
import whats from "../imagens/icones/whatsapp.png"
import linkedin from "../imagens/icones/linkedin.png"
import hotmail from "../imagens/icones/hotmail.png"
import instagram from "../imagens/icones/instagram.png"
import git from "../imagens/icones/git.png"
const redes = () => {
    return (
        <div className="redes">
            <ul className="list-unstyled">
                <li>
                    <a href="https://www.facebook.com/guilherme.limamota" target="_blank"><img src={face} alt="" /></a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5564981247960" target="_blank"><img src={whats} alt="" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/guilherme-lima-mota-8941231a8/" target="_blank"><img src={linkedin} alt="" /></a>
                </li>
                <li>
                    <a href="mailto:guilherme.limamota@hotmail.com"><img src={hotmail} alt="" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/guilherme.limamota/?hl=pt-br" target="_blank"><img src={instagram} alt="" /></a>
                </li>
                <li>
                    <a href="https://github.com/Guilherme-stack" target="_blank">
                        <img src={git} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default redes;
