

import React from 'react'
import './slider.css'
import map from '../assets/map.png'
import logoImage from '../assets/logo.png' // import your image file

export default function Slider() {


    return (
        <div className="GetinTouch">
            <div className="Touch">
                <div className="gettouch">
                    <h1>Get in Touch</h1>
                    <span>Call us now if you are in a medical emergency need, we will <br /> reply swiftly and provide you with a medical aid.</span>
                </div>
                <div className="bookappoint">
                    <div className="callnumber">
                        <button className="btn btnsub " type="submit">Consult Now</button>
                        <p>1800 1200 111</p>
                    </div>

                </div>
            </div>
            <div className="address">
                <div className="add">
                    <img className='photologo' src={logoImage} alt="ASG EYE HOSPITALS Logo" />
                    <div className="addtext mt-4">
                        <p>Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy text</p>
                    </div>
                </div>
                <div className="quicklink">
                    <div>
                        <a className="nav-link active" href="#">Quick Link</a>

                    </div>
                    <div className="qlink mt-4">
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
                    </div>

                </div>
                <div className="contactus">
                    <div>
                        <a className="nav-link active" href="#">Contact INFO</a>

                    </div>
                    <div className="coninfo mt-4">
                        <div className="info1">
                            <a className="nav-link active" href="#">Phone No.</a>
                            <span>(+91) 1800 1200 111</span>
                        </div>
                        <div className="info2 mt-3">
                            <a className="nav-link active" href="#">Email</a>
                            <span>a@gmail.com</span>
                        </div>

                    </div>
                </div>
                <div className="location">
                    <div>
                        <a className="nav-link active" href="#">Location</a>

                    </div>
                    <div className="map mt-4">
                        <img className='photologo' src={map} alt="ASG EYE HOSPITALS Logo" />

                    </div>
                </div>
            </div>
            <div className="hr mt-3">
                <hr className='hrtag ' />
            </div>
            <div className="copyright">
                <div className="copy">
                    <p>© Copyright 2023 Laversab Inc. All Rights Reserved.</p>
                </div>
                <div className="copy2">
                    <p>Teleconsultation | Terms and Conditions | Cancellation and Refund Policy</p>
                </div>
            </div>

        </div>





    )
}
