import React from 'react'
import './home.css'
import Doctor from '../assets/doctor.png' // import your image file
import rajiv from '../assets/rajiv.png';
import times from '../assets/times.png';
import patrika from '../assets/patrika.png';
import international from '../assets/international.png'
import edoc from '../assets/edoc.png'
import google from '../assets/google.png'
import reviews from '../assets/reviews.png'
import random from '../assets/random.png'
import './slider.css'
import pataint from '../assets/pataint.png'
import map from '../assets/map.png'
import logoImage from '../assets/logo.png' // import your image file


export default function Home() {
    return (
        <>
            <div className="homepage">
                <div className="homeabout ">
                    <h1>Super speciality <br /> eye hospitals in India</h1>
                    <p>It offers a comprehensive range of eye care services including <br /> treatment and surgeries</p>
                    <button className="btn btnsub mx-3" type="submit">Consult Now</button>

                    <button className="btn btnsub" type="submit">See all doctors</button>


                    <div className="call mt-5">
                        <spam>Let’s talk to doctor</spam>
                        <p>1800 1200 111</p>
                    </div>
                </div>
                <div className="doctor">
                    <img className='photodoctor' src={Doctor} alt="ASG EYE HOSPITALS Logo" />

                </div>

                <div className="Achievers">
                    <p className="Achievers-text mt-4">All India’s Achievers Award</p>

                </div>

                <div className="grid-container">
                    <div className="international">
                        <img src={international} alt="Image 1" />
                        <p>International Achivers <br /> Award 2009</p>
                    </div>
                    <div className="patrika">
                        <img src={patrika} alt="Image 2" />
                        <p>Patrika - 2018 Youth Icon <br /> Award for Healthcare</p>
                    </div>
                    <div className="times">
                        <img src={times} alt="Image 3" />
                        <p>Times wellness Rajasthan <br /> Health Award 2013</p>
                    </div>
                    <div className="rajiv">
                        <img src={rajiv} alt="Image 4" />
                        <p>Rajeev Gandhi Gold<br /> Medal Award 2013</p>
                    </div>

                </div>
                <hr className="new4" />



                {/* eye */}
                <div className="eye">
                    <div className="international">
                        <div className="ephoto">
                            <img className='eyephoto' src={edoc} alt="ASG EYE HOSPITALS Logo" />

                        </div>
                    </div>
                    <div className="patrika">
                        <div className="edoc ">

                            <button className="aboutbt " type="submit">About us</button>

                            <h1>Know more about ASG</h1>
                            <p>ASG Eye Hospitals is a chain of super speciality eye hospitals in India.<br />
                                It offers a comprehensive range of eye care services including <br />
                                treatment and surgeries of Retina, Cataract, Squint, Oculoplasty,<br />
                                Cornea, Lasik, ICL, Glaucoma, and Pediatric Opthalmology. Currently, <br />
                                the group has 150 Eye Hospitals across 83 cities in India.</p>
                            <button className="btn btnsub mx-3" type="submit">Get in Touch</button>

                        </div>
                    </div>

                </div>
                {/* ***************service********** */}
                <div className="ServicesSpecialities mt-4">
                    <button className="aboutbt " type="submit">What we Do</button>

                    <h1 >Services and Specialities</h1>

                    <div className="service">
                        <div className="grid-item">
                            <div className="Cataract">
                                <img src={rajiv} alt="Image 4" />

                                <h3 className='' >Cataract</h3>
                                <p className='Cataracttext'>Cataract Opacify the eye’s natural lens <br /> and limit your ability to see clearly.</p>
                                <a className="btnservice" href="#">Learn More</a>

                            </div>


                        </div>
                        <div className="grid-item">
                            <div className="Cataract">
                                <img src={rajiv} alt="Image 4" />

                                <h3 >Diabetic Retinopathy</h3>
                                <p className='Cataracttext'>Cataract Opacify the eye’s natural lens <br /> and limit your ability to see clearly.</p>
                                <a className="btnservice" href="#">Learn More</a>

                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="Cataract">
                                <img src={rajiv} alt="Image 4" />

                                <h3>Cataract</h3>
                                <p className='Cataracttext'>Cataract Opacify the eye’s natural lens <br /> and limit your ability to see clearly.</p>
                                <a className="btnservice" href="#">Learn More</a>

                            </div>
                        </div>




                        <div className="grid-item">
                            <div className="Cataract">
                                <img src={rajiv} alt="Image 4" />

                                <h3 className='' >Cataract</h3>
                                <p className='Cataracttext'>Cataract Opacify the eye’s natural lens <br /> and limit your ability to see clearly.</p>
                                <a className="btnservice" href="#">Learn More</a>

                            </div>


                        </div>
                        <div className="grid-item">
                            <div className="Cataract">
                                <img src={rajiv} alt="Image 4" />

                                <h3 >Diabetic Retinopathy</h3>
                                <p className='Cataracttext'>Cataract Opacify the eye’s natural lens <br /> and limit your ability to see clearly.</p>
                                <a className="btnservice" href="#">Learn More</a>

                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="Cataract">
                                <img src={rajiv} alt="Image 4" />

                                <h3>Cataract</h3>
                                <p className='Cataracttext'>Cataract Opacify the eye’s natural lens <br /> and limit your ability to see clearly.</p>
                                <a className="btnservice" href="#">Learn More</a>

                            </div>
                        </div>


                    </div>
                    <button className="btn servicesubmit" type="submit">View all Services</button>

                </div>


                {/* *************17 Years of Excellence**************** */}

                <div className="Excellence mt-5">

                    <div className="grid-Excellence">
                        <div>
                            <p>17 Years <br /> of Excellence</p>
                        </div>
                        <div className="vl"></div>
                        <div className='Lakh'>
                            {/* <p>80 Lakh+ <span>Successfully Treated Eyes</span></p> */}

                            <p>80 Lakh+</p>
                            <spam>Successfully Treated Eyes</spam>
                            <br />
                            <spam>
                                Being one of the best eye hospital Chain in India, ASG Eye Hospital provides state-of-the-art<br /> Ophthalmology services in Cataract, Retina, Squint, Glaucoma, Cornea, Oculoplasty
                            </spam>
                        </div>

                    </div>
                </div>

            </div>
            {/* **************Reviews*****************  */}




            <div className="reviews  mt-5">
                <div className="reviewimg mt-4  ">
                    <img src={google} alt="Image 4 " />

                    <h3>reviews</h3>
                </div>
                <div className="review1 mt-4">
                    <div className="reviews-container">
                        <div className="reviews-container-text">
                            <p>   Very good service. Helping , supporting <br />and caring staff. Frank conversation. Good<br /> experience. We will definitely prefer...
                            </p>
                            <div className="coment">
                                <img src={reviews} alt="Image 4 " />
                                <p>Dineshchandra Khilawala</p>
                                <span>14 weeks ago</span>
                            </div>



                        </div>
                        <div>

                            <div className="reviews-container-text">
                                <p>   Very good service. Helping , supporting <br />and caring staff. Frank conversation. Good<br /> experience. We will definitely prefer...
                                </p>
                                <div className="coment">
                                    <img src={reviews} alt="Image 4 " />
                                    <p>Dineshchandra Khilawala</p>
                                    <span>14 weeks ago</span>
                                </div>



                            </div>

                        </div>
                        <div>

                            <div className="reviews-container-text">
                                <p>   Very good service. Helping , supporting <br />and caring staff. Frank conversation. Good<br /> experience. We will definitely prefer...
                                </p>
                                <div className="coment">
                                    <img src={reviews} alt="Image 4 " />
                                    <p>Dineshchandra Khilawala</p>
                                    <span>14 weeks ago</span>
                                </div>



                            </div>
                        </div>
                        <div>

                            <div className="reviews-container-text">
                                <p>   Very good service. Helping , supporting <br />and caring staff. Frank conversation. Good<br /> experience. We will definitely prefer...
                                </p>
                                <div className="coment">
                                    <img src={reviews} alt="Image 4 " />
                                    <p>Dineshchandra Khilawala</p>
                                    <span>14 weeks ago</span>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
                <div className="review2 mt-5">
                    <div className="reviews-container">
                        <div className="reviews-container-text">
                            <p>   Very good service. Helping , supporting <br />and caring staff. Frank conversation. Good<br /> experience. We will definitely prefer...
                            </p>
                            <div className="coment">
                                <img src={reviews} alt="Image 4 " />
                                <p>Dineshchandra Khilawala</p>
                                <span>14 weeks ago</span>
                            </div>



                        </div>
                        <div>

                            <div className="reviews-container-text ">
                                <p>   Very good service. Helping , supporting <br />and caring staff. Frank conversation. Good<br /> experience. We will definitely prefer...
                                </p>
                                <div className="coment">
                                    <img src={reviews} alt="Image 4 " />
                                    <p>Dineshchandra Khilawala</p>
                                    <span>14 weeks ago</span>
                                </div>



                            </div>

                        </div>
                        <div>

                            <div className="reviews-container-text">
                                <p>   Very good service. Helping , supporting <br />and caring staff. Frank conversation. Good<br /> experience. We will definitely prefer...
                                </p>
                                <div className="coment">
                                    <img src={reviews} alt="Image 4 " />
                                    <p>Dineshchandra Khilawala</p>
                                    <span>14 weeks ago</span>
                                </div>



                            </div>
                        </div>
                        <div>

                            <div className="reviews-container-text">
                                <p>   Very good service. Helping , supporting <br />and caring staff. Frank conversation. Good<br /> experience. We will definitely prefer...
                                </p>
                                <div className="coment">
                                    <img src={reviews} alt="Image 4 " />
                                    <p>Dineshchandra Khilawala</p>
                                    <span>14 weeks ago</span>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>


            </div>
            {/* ***********slider******** */}
            {/* <div className="slider">
   <div className="slide">
   
   <div className="video-slider-container">
            <div className="video-slider">
                <iframe className="video-slide" src="https://www.youtube.com/embed/video1?enablejsapi=1&rel=0" frameBorder="0" allowFullScreen title="Video 1"></iframe>
                <iframe className="video-slide" src="https://www.youtube.com/embed/video2?enablejsapi=1&rel=0" frameBorder="0" allowFullScreen title="Video 2"></iframe>
                <iframe className="video-slide" src="https://www.youtube.com/embed/video3?enablejsapi=1&rel=0" frameBorder="0" allowFullScreen title="Video 3"></iframe>
                <iframe className="video-slide" src="https://www.youtube.com/embed/video4?enablejsapi=1&rel=0" frameBorder="0" allowFullScreen title="Video 4"></iframe>
                <iframe className="video-slide" src="https://www.youtube.com/embed/video5?enablejsapi=1&rel=0" frameBorder="0" allowFullScreen title="Video 5"></iframe>
            </div>
        </div>






   </div>
</div> */}


            {/* ********************random doctor********* */}

            <div className="Random mt-5">

                <div className="grid-Random">
                    <div className='all'>
                        <div>
                            <p >
                                All our doctors are<br /> available 24×7 at respective<br /> locations
                            </p>
                            <span>500+ Eye specialists out of which 250+ are alumni of premier <br /> institutes like all India Institute of Medical Sciences (New Delhi),<br /> Sankara Nethralaya, LV Prasad & Aravind Eye Institute</span>

                        </div>

                        <div className="bt mt-5">
                            <button className="btn btnservice" type="submit">Meet all Doctors</button>

                        </div>
                    </div>



                    <div className='Lakh'>
                        <div className="rendom">
                            <img src={random} style={{ top: '20px', left: '20px', transform: 'rotate(10deg)', borderRadius: '100px', width: '90px' }} alt="Random Image 1" />
                            <img src={random} style={{ top: '20px', left: '40px', transform: 'rotate(10deg)', width: '50px', marginLeft: '55px' }} alt="Random Image 1" />
                            <img src={random} style={{ top: '100px', left: '200px', transform: 'rotate(30deg)', width: '94px', marginLeft: '55px' }} alt="Random Image 2" />
                            <img src={random} style={{ top: '50px', left: '400px', transform: 'rotate(-20deg)', width: '69px', marginLeft: '55px' }} alt="Random Image 3" />
                            <img src={random} style={{ top: '200px', left: '50px', transform: 'rotate(-10deg)', width: '80px', marginLeft: '55px' }} alt="Random Image 4" />
                            <img src={random} style={{ top: '250px', left: '300px', transform: 'rotate(45deg)', width: '60px', marginLeft: '55px' }} alt="Random Image 5" />
                            <img src={random} style={{ top: '300px', left: '100px', transform: 'rotate(-15deg)', width: '100px', marginLeft: '55px' }} alt="Random Image 6" />
                            <img src={random} style={{ top: '150px', left: '500px', transform: 'rotate(25deg)', width: '110px', marginLeft: '55px' }} alt="Random Image 7" />
                            <img src={random} style={{ top: '400px', left: '200px', transform: 'rotate(-5deg)', width: '80px', marginLeft: '55px' }} alt="Random Image 8" />
                            <img src={random} style={{ top: '350px', left: '450px', transform: 'rotate(15deg)', width: '70px', marginLeft: '55px' }} alt="Random Image 9" />
                            <img src={random} style={{ top: '430px', left: '380px', transform: 'rotate(-25deg)', width: '60px', marginLeft: '55px' }} alt="Random Image 10" />
                            <img src={random} style={{ top: '430px', left: '380px', transform: 'rotate(-25deg)', width: '60px', marginLeft: '55px' }} alt="Random Image 10" />

                            <img src={random} style={{ top: '430px', left: '380px', transform: 'rotate(-25deg)', width: '60px', marginLeft: '55px' }} alt="Random Image 10" />
                            <img src={random} style={{ top: '430px', left: '380px', transform: 'rotate(-25deg)', width: '60px', marginLeft: '55px' }} alt="Random Image 10" />

                            <img src={random} style={{ top: '430px', left: '380px', transform: 'rotate(-25deg)', width: '60px', marginLeft: '55px' }} alt="Random Image 10" />


                        </div>


                    </div>

                </div>


            </div>



            {/* ************** See our latest News & Eventst*************** */}

            <div className="event ">
            <div className="itemconent">
                <h1>See our latest News & Events</h1>
                <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                    It has been the industry's standard dummy text
                </span>
            </div>
            <div className="grid-event mt-5">
                <div className='all'>
                    <img src={pataint} alt="Image 4" />
                    <p>Eye Care for Professionals: Navigating <br /> Digital Challenges</p>


                    <div className="imgbio">
                        <div className='bioimg'>
                            <img src={pataint} alt="Image 4" />

                        </div>
                        <div className="photodoc">
                            <p><span>by</span>  Dr. Arun Singhvi</p>
                        </div>
                        <div className='date'>
                            <p>Sep 08, 2023</p>
                        </div>
                    </div>

                </div>




                <div className='grid-Lakh'>

                    <div className='doc1'>
                        <div className='doc1img'><img src={pataint} alt="Image 4" /></div>
                        <div><p>How to Give First Aid and Care <br />for Eye Emergencies?</p>
                            <div className="imgbio">
                                <div className='bioimg1'>
                                    <img src={pataint} alt="Image 4" /> </div>
                                <div className="photodoc1">
                                    <p><span>by</span>  Dr. Arun Singhvi</p>
                                </div>
                                <div className='date1'>
                                    <p>Sep 08, 2023</p>
                                </div>
                            </div>
                            <div className="bt mt-5">
                                <button className="btn btnservice" type="submit">Meet all Doctors</button></div>
                        </div></div>
                    <div className='doc2 mt-5'>
                        <div className='doc2img'><img src={pataint} alt="Image 4" />
                        </div>
                        <div className='doc1111'>
                            <div>
                                <p>5 Important Dermatologist Tips <br />for Dry Eyelids (Blepharitis)</p>
                                 
                                    <div className='imgbio'>
                                    <div className='bioimg1'>
                                    <img src={pataint} alt="Image 4" /> </div>
                                    <div className="photodoc1">
                                        <p><span>by</span>   Dr. Arun Singhvi</p>
                                    </div>
                                    <div className='date1'>
                                        <p>Sep 08, 2023</p>
                                    </div>
                                    </div>
                                    
                                    
                               
                            </div>
                            <div className="bt mt-5">
                                <button className="btn btnservice" type="submit">Meet all Doctors</button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>


        {/* **********Get In Touch****** */}

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

        </>
    )
}
