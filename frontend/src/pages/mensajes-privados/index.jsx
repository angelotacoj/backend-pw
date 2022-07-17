import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import './index.css'

//no hay nada de react
const Pagina_MPRIV = () => {
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
                                Preguntas Privados
                            </a>
                        </div>
                        <div className="ms-4">
                            <span className="navbar-brand h1" id="letra3">Crear Mensaje Privado</span>
                        </div>
                    </div>
                </nav>
            </div>

            <div>
                <div className="container button_mpriv_row_rev">
                    <a href="/buzon/buzon.html" >
                        <button id="button_id" type="button" className="btn btn-outline-dark btn-lg color-buttons"> Regresar</button>
                    </a>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="border border-dark borde" id="caja" >

                        <div id="columnas_superiores" className="row" >
                            <div className="col">
                                De:  <input id="col11" type="text" placeholder="" />
                            </div>
                            <div className="col">
                                Para:  <input id="col11" type="text" placeholder="" />
                            </div>
                            <div className="col d-flex flex-row-reverse" id="last_col" >
                                <input id="col11" type="date" placeholder="" />
                            </div>
                        </div>

                        <div id="asunto_text" >Asunto: <input id="asunto_box" type="text" placeholder="" />
                        </div>

                        <div>
                            <h1 id="tam_h1" >Redacte</h1>
                        </div>

                        <div  >
                            <textarea id="texto_escrbir" rows="10" cols="30">
                            </textarea>
                        </div>

                        <div id="pre_Sent color-buttons" >
                            <a href="/buzon/buzon.html" > <button id="sent" type="button" className="btn btn-primary btn-lg color-buttons" >Enviar Mensaje</button></a>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    )
}
export default Pagina_MPRIV