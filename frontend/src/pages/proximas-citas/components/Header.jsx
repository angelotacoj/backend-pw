import React from 'react'

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
        <div>
          <div className="container">
            <a href="/" id="link-header">
              Medico
            </a>
            /
            <a href="#" id="link-header">
              Próximas citas
            </a>
          </div>
          <div className="container">
            <h2 className="header_titles" id="letra">
              PROXIMAS CITAS
            </h2>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
