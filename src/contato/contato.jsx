import React from 'react';
import "./contato.css"

import email from "../imagens/icones/email.png"
import img from "../imagens/contato.png"
const contato = () => {
    return (
        <div className="contato" id="contato">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titulo-contato">
                            <img src={email} alt="" />
                            <h2>Entre em contato</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="formulario">
                            <form action="">
                                <label htmlFor="nome">Nome</label>
                                <input className="form-control" type="text" />
                                <label htmlFor="Email">Email</label>
                                <input className="form-control" type="text" />
                                <label htmlFor="Whatsapp ">Whatsapp</label>
                                <input className="form-control phone" type="text" />
                                <label htmlFor="assunto">Assunto</label>
                                <select name="assunto" className="form-control" id="">
                                    <option value="estagio">Estágio</option>
                                    <option value="emprego">Emprego</option>
                                    <option value="freela">Freela</option>
                                    <option value="outro">Outro</option>
                                </select>
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea name="mensagem" id="" cols="30" rows="5" className="form-control"></textarea>
                                <button type="submit">enviar</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contato-img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contato;
