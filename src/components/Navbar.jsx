import React from 'react'
import './navbar.css'
import logoImage from '../assets/logo.png' // import your image file
export default function App() {
  return (
    <>
      <div className="eyehos">
        <nav className="navbar navbar-expand  ">
          <div className="container-fluid">
            <div className="navhome">
              <a className="navbar-brand" href="#">
                <img className='photologo' src={logoImage} alt="ASG EYE HOSPITALS Logo" />

              </a>


            </div>
            {/*    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
            <div className="collapse navbar-collapse navcon" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ullist">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item  ">
                  <a className="nav-link active" href="#">About</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" href="#">Hospitals</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" href="#">Specialities</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" href="#">Blog</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" href="#">Contact</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button className="btn btnsub" type="submit">Book an Appointment</button>
              </form>
            </div>
          </div>
        </nav>

      </div>
    </>
  )
}
