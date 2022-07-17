import './index.css'
import React from 'react'
import paciente from '../../assets/1430453.png'
import imgCard from '../../assets/card-inicio-paciente.jpeg'


const InicioPaciente = () => {

    return(
        <main>
            <nav className="navbar navbar-expand-lg navbar-light fondocabecera" id="nav-color">
                <div className="container-fluid">
                    <div>  
                        <label className="form-label perfil h5">
                            EMPRESA XYZ |
                        </label>    
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fs-5 color_letra" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Preguntas</a>
                                <ul className="dropdown-menu">
                                <li><a className="dropdown-item fs-5 color_letra" href="/buzon/buzon.html">Buzon privado</a></li>
                                <li><div className="dropdown-divider"/></li>
                                <li><a className="dropdown-item fs-5 color_letra" href="/bandeja/Bandeja_de_entrada.html">Bandeja publica</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fs-5 color_letra" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Citas</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fs-5 color_letra" href="/CitasPaciente/misCitas.html">Mis citas</a></li>
                                    <li><div className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item fs-5 color_letra" href="/BuscarMedico/BuscarMedico.html">Agendar citas</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="/EditarPerfil/Perfil.html">Editar datos</a>
                                </li>
                        </ul>
                        <label className="form-label me-2 color_letra h5">
                            | NOMBRE PACIENTE
                        </label>
                        <img src={paciente} className="img-circle"  alt="..." width="50px;"/> 
                    </div>
                </div>
            </nav>
            <div class="container mt-5 mb-5 color_letra">
                <div class="row justify-content-evenly ">
                        <div class="col-sm-3  mx-4">
                        <div class="container card mt-4 aislarcontenido borde">
                            <div class="row mb-3">
                                <div class="col text-center">
                                    <img src={paciente} alt=""class="img-fluid p-3 img-circle text-center"/>
                                </div>
                            </div>
                            <div class="row">
                                <h3 class="text-center mb-3">Nombre paciente</h3>
                            </div>
                            <div class="row mx-auto">
                                <div class="col">
                                    <h5 class="sm-3"><a href="/HistorialCitas/HistorialCitas.html"> Historial de citas: </a> </h5>
                                    <div>Filtrar por: </div>
                                </div>        
                        <div class="fw-bold mt-2">Especialidad:</div>        
                        <div class="mb-5">
                            <div class="form-check ">
                                <input class="form-check-input" type="checkbox" id="check1" checked/>
                                <label for="check1" class="form-check-label">
                                    Todos
                                </label>
                            </div>
                            <div class="form-check ">
                                <input class="form-check-input" type="checkbox" id="check2"/>
                                <label for="check2" class="form-check-label">
                                    Especialidad 1
                                </label>
                            </div>
                            <div class="form-check ">
                                <input class="form-check-input" type="checkbox" id="check3"/>
                                <label for="check3" class="form-check-label">
                                    Especialidad 2
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check4"/>
                                <label for="check4" class="form-check-label">
                                    Especialidad 3
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check5"/>
                                <label for="check5" class="form-check-label">
                                    Especialidad 4
                                </label>
                            </div>
                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                <div class="container card mt-4 aislarcontenido borde">
                    <div id="columnas" class="container mt-2">
                            <div class="row mt-3">
                                <div class="col-sm-6">
                                        <div class="card-body">
                                                <div class="card">
                                                    <div>
                                                        <img src={imgCard} class="card-img" alt="..."/>
                                                    </div>
                                                    <div class="card-body">
                                                        <div>
                                                            <div class="row">
                                                                <div class="col text-center ">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.</p>
                                                                </div> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card-body">
                                            <div class="card">
                                                <div>
                                                <img src={imgCard} class="card-img" alt="..."/>
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <div class="row">
                                                            <div class="col text-center">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.</p>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card-body">
                                        <div class="card">
                                            <div>
                                            <img src={imgCard} class="card-img" alt="..."/>
                                            </div>
                                            <div class="card-body">
                                                <div>
                                                    <div class="row">
                                                        <div class="col text-center">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.</p>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card-body">
                                    <div class="card">
                                        <div>
                                        <img src={imgCard} class="card-img" alt="..."/>
                                        </div>
                                        <div class="card-body">
                                            <div>
                                                <div class="row">
                                                    <div class="col text-center">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.</p>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card-body">
                                <div class="card">
                                    <div>
                                    <img src={imgCard} class="card-img" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <div>
                                            <div class="row">
                                                <div class="col text-center">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.</p>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </div>  
        </main>
    )
}

export default InicioPaciente