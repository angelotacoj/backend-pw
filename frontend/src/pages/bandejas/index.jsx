import React from 'react'
import './index.css'
import user from '../../assets/1430453.png'

const Pagina_BAND = () => {
    return (
        <main>
            <section>
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
                                Bandeja pública
                            </a>
                        </div>
                        <div className="ms-4">
                            <span className="navbar-brand h1" id="letra3">Bandeja pública</span>
                        </div>
                    </div>
                </nav>
            </section>

            <section>
                <div >
                    <div className="d-flex row justify-content-between">
                        <div className="col"><a href="/mensaje_publico/crear_mensaje_publico.html"><button id="button_id" type="button" className="btn btn-btn-primary btn-lg color-buttons">Crear Mensaje</button></a></div>
                        <div className="col d-flex flex-row-reverse"><a href="/InicioPaciente/InicioPaciente.html"><button id="button_id" type="button" className="btn btn-primary btn-lg color-buttons">Regresar</button></a> </div>
                    </div>
                </div>
            </section>
            <section>
                <div id="textt_h1" >
                    <h1>Bandeja </h1>
                </div>
                <div className="container mt-2">
                    <div className="container card mt-2 " id="card-color">
                        <div className="card-body row borde" id="letra">
                            <div className="col-md-2">
                                <img src={user} className="img-circle" alt="..." width="150px;" />
                            </div>
                            <div className="col-md-10">
                                <label className="form-label h4">Nombre de usuario</label>
                                <label className="form-label h4 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in sollicitudin odio, mattis tincidunt felis. Sed in ullamcorper ex. Cras feugiat justo nec est semper euismod id at mauris. Nunc rutrum hendrerit nibh sit amet maximus. Aenean eleifend, leo sed scelerisque varius, lorem mi viverra neque, ac malesuada metus ipsum id urna. Quisque convallis dapibus felis at euismod. Quisque vel aliquam purus. Cras tempor consequat diam. Nam sollicitudin blandit euismod. Nullam vel tincidunt diam. Morbi in arcu sit amet turpis varius vestibulum. Etiam sed nisi consequat, placerat sem vitae, auctor nulla. Duis gravida convallis dui, at condimentum ligula aliquam ac. Sed ut vestibulum diam, quis pulvinar </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-2">
                    <div className="container card mt-2 " id="card-color">
                        <div className="card-body row borde" id="letra">
                            <div className="col-md-2">
                                <img src={user} className="img-circle" alt="..." width="150px;" />
                            </div>
                            <div className="col-md-10">
                                <label className="form-label h4">Nombre de usuario</label>
                                <label className="form-label h4 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in sollicitudin odio, mattis tincidunt felis. Sed in ullamcorper ex. Cras feugiat justo nec est semper euismod id at mauris. Nunc rutrum hendrerit nibh sit amet maximus. Aenean eleifend, leo sed scelerisque varius, lorem mi viverra neque, ac malesuada metus ipsum id urna. Quisque convallis dapibus felis at euismod. Quisque vel aliquam purus. Cras tempor consequat diam. Nam sollicitudin blandit euismod. Nullam vel tincidunt diam. Morbi in arcu sit amet turpis varius vestibulum. Etiam sed nisi consequat, placerat sem vitae, auctor nulla. Duis gravida convallis dui, at condimentum ligula aliquam ac. Sed ut vestibulum diam, quis pulvinar </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
export default Pagina_BAND