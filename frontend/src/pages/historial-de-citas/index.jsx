import React from 'react'
import './index.css'

const HistorialDeCitas = (props) => {
  return (
    <>
      <header>
        <div className="header_subtitles">
          <a href="/">Médico</a>/<a href="/historial-de-citas">Historial de citas</a>
        </div>
        <h2 className="header_titles">HISTORIAL DE CITAS</h2>
      </header>
      <main>
        <div className="btn_hist">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle color-buttons"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Frecuencia
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Dia
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Semana
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mes
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="gra_hist">
          <img src={require('../../assets/frecuencia_cita.jpg')} alt="" />
        </div>
      </main>
    </>
  )
}

export default HistorialDeCitas
