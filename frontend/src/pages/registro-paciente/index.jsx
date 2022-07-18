import React from 'react'
import './index.css'
import NavigationTo from '../../componets/NavigationTo'

const RegistroPaciente = (props) => {
  return (
    <>
      <div className="card-sm">
        <div className="card-header fondocabecera">
          <h1 className="perfil_login">EMPRESA XYZ</h1>
        </div>
      </div>
      <div className="row">
        <div className="col mx-4">
          <div className="container aislarcontenido borde mt-5 mb-3 color_letra">
            <h1 className="text-center pt-3">Registro paciente</h1>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="input-group mt-5 mb-3">
                  <span className="input-group-text color_letra">Nombre :</span>
                  <input type="text" className="form-control" id="nombrePaciente" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="input-group mb-3">
                  <span className="input-group-text color_letra">Apellido P. :</span>
                  <input type="text" className="form-control" id="nombrePaciente" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="input-group mb-3">
                  <span className="input-group-text color_letra">Apellido M. :</span>
                  <input type="text" className="form-control" id="nombrePaciente" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="input-group mb-3">
                  <span className="input-group-text color_letra">DNI :</span>
                  <input type="text" className="form-control" id="nombrePaciente" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="input-group mb-3">
                  <span className="input-group-text color_letra">Email :</span>
                  <input type="text" className="form-control" id="nombrePaciente" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="input-group mb-3">
                  <span className="input-group-text color_letra">
                    Nombre de usuario :
                  </span>
                  <input type="text" className="form-control" id="nombrePaciente" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="input-group mb-3">
                  <span className="input-group-text color_letra">Contraseña :</span>
                  <input type="password" className="form-control" id="nombrePaciente" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="input-group mb-3">
                  <span className="input-group-text color_letra">
                    Confirmar contraseña :
                  </span>
                  <input type="password" className="form-control" id="nombrePaciente" />
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center pt-5 pb-2">
              <div className="d-grid gap-2 col-sm-2 mb-3 ">
                <NavigationTo className="btn btn-success" href="/login" role="button">
                  Registrar
                </NavigationTo>
              </div>
              <div className="d-grid gap-2 col-sm-2 mb-3">
                <a className="btn btn-danger " href="/login" role="button">
                  Cancelar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegistroPaciente
