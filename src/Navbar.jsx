import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black bg-body-dark col-12">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
        <h1 className="d-flex flex-row justify-content-centre">
          <img src="Icons_music_platform/icon_logo.png" alt="logo" className="logo" />
        </h1>
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav me-auto mb-2 mb-lg-1 d-flex flex-row justify-content-center" style={{ width: '100%' }}>
          <button className="nav-link active home_but" aria-current="page">
               <i className="fa-solid fa-house icon_nav m-2"></i>
          </button>
          <div className="search-container d-flex flex-row justify-content-center">
              <div className='search_icon d-flex justify-content-center'>
                  <i className=" fa-solid fa-magnifying-glass"></i>
              </div>
            <input className="search_bar" type="search" placeholder="What do you want to play ?" aria-label="Search" />
            <div className="vertical-line"></div>
            <div>
              <i className="fa-solid fa-layer-group icon_nav m-4"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center">
      <div></div>
      <div>
        <button className="button_prof m-auto">
          <i className="fa-solid fa-bell icon" style={{ color: 'white' }}></i>
        </button>
      </div>
      <div>
        <Link to="/login">
          <button className="button_prof m-auto"  >
            <i className="fa-solid fa-user icon" style={{ color: 'white' }}></i>
          </button>
        </Link> 
      </div>
    </div>
    </div>
  </nav>
  )
}
