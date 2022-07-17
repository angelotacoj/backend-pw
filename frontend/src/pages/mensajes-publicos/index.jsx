import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import './index.css'

//no hay nada de react
const Pagina_MPUB = () => {
    return (
        <main>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
                    <div>
                        <div>
                            <a className="nave ms-4" href="/InicioPaciente/InicioPaciente.html" id="letra">
                                Paciente /
                            </a>
                            <a className="nave" href="#" id="letra">
                                Preguntas /
                            </a>
                            <a className="nave" href="#" id="letra">
                                Preguntas P&uacute;blicas
                            </a>
                        </div>
                        <div className="ms-4">
                            <span className="navbar-brand h1" id="letra3">Crear Mensaje P&uacute;blico</span>
                        </div>
                    </div>
                </nav>
            </div>

            <section>
                <div className="container button_mpub_row_rev">
                    <a href="/bandeja/Bandeja_de_entrada.html" >
                        <button id="button_id" type="button" className="btn btn-btn-primary btn-lg color-buttons" >Retroceder</button>	</a>
                </div>
                <div className="container">
                    <div className="border border-dark borde" id="caja" >

                        <div id="columnas_superiores" className="row" >
                            <div className="col">
                                De:  <input id="col11" type="text" placeholder="" />
                            </div>
                            <div className="col d-flex flex-row-reverse antifrr" id="last_col" >
                                <input id="col11" type="date" placeholder="" />
                            </div>
                        </div>

                        <div id="asunto_text" >Asunto: <input id="col11" type="text" placeholder="" />
                        </div>

                        <div>
                            <h1 id="tam_h1" >Redacte</h1>
                        </div>

                        <div  >
                            <textarea id="texto_escrbir" rows="10" cols="30">
                            </textarea>
                        </div>

                        <div id="pre_Sent color-buttons" >
                            <a href="/bandeja/Bandeja_de_entrada.html" > <button id="sent" type="button" className="btn btn-primary btn-lg color-buttons" >Enviar Mensaje</button></a>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}
export default Pagina_MPUB