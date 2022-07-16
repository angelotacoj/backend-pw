import React from 'react'

const CardOption = ({ href = '', tituloBoton = '', image = '' }) => {
  return (
    <div className="card">
      <div>
        <img src={image} className="card-img" height="200" alt="..." />
      </div>
      <div className="card-body">
        <div>
          <div className="row">
            <div className="col text-center">
              <button type="button" className="btn">
                <a href={href}>{tituloBoton}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardOption
