import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import './index.css'
import BodyPM from "./components/BodyPM"
import foto from "../../assets/medico.png"


const PuntuarMedico = () => {
    return <>
        <div className="card mb-5"  id="encabezado">
            <div className="card-header">
                <div className="fs-5 ms-2">
                    <a className="link" href="/InicioPaciente/InicioPaciente.html">Principal</a>
                    /
                    {<div to="/iniciopaciente/BuscarMedico">
                        <a className="link" href="/HistorialCitas/HistorialCitas.html">Buscar Médico</a>
                    </div>}
                    /
                    <a className="link" href="/HistorialCitas/HistorialCitas.html">Puntuar Médico</a>
                </div>
                <div className="mt-2 mb-2 ms-2 fw-bold fs-1">
                    EMPRESA XYZ
                </div>
            </div>
        </div>

        <BodyPM medico = {"medico"} foto = {foto}/>

    </>
}

export default PuntuarMedico