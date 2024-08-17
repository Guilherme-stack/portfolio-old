import React from 'react';
import "./rodape.css"

import topete from "../imagens/icones/topete.png"
import perfil from "../imagens/icones/perfil-rodape.png"
const rodape = () => {
    return (
        <div className="rodape">
            <div className="container">
                <div className="row">
        <div className="col-md-1">
            
        </div>
                    <div className="col-md-10">
                        <div className="copy">
                            <h3>Desenvolvido por <b>Guilherme de Lima Mota</b> </h3>
                            <img src={perfil} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default rodape;
