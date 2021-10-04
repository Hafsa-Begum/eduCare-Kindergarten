import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <section class="pattern">
                <div class="footer">

                    <div className='d-flex text-white justify-content-evenly align-items-center'>
                        <div className='ps-5 pe-0 me-0 '>
                            <h3>edu-Care</h3>
                            <p><small>Kindergarten</small></p>
                            <img className='w-25 ps-0 ms-0 mb-3 rounded-circle bg-white' src="https://i.ibb.co/QPDcxVw/logo.png" alt="" /> <br />
                            <i class="fab fa-facebook pe-3"></i>
                            <i class="fab fa-instagram pe-3"></i>
                            <i class="fab fa-linkedin-in pe-3"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div className='pe-5 me-5'>
                            <h4 className='py-2'>Get in touch</h4>
                            <p>4000 Central Florida Blvd. Orlando, Florida, 32816</p>
                            <p>Contact no. +03601 885399</p>
                            <p>Email: info@eduCareKindergarten.com</p>

                        </div>
                        <div className='ps-5 ms-5'>
                            <h4 className='py-2'>Useful Links</h4>
                            <div >
                                <a className='text-decoration-none text-white' href="/home">Home</a> <br />
                                <a className='text-decoration-none text-white' href="/about">About</a> <br />
                                <a className='text-decoration-none text-white' href="/services">Services</a> <br />
                                <a className='text-decoration-none text-white' href="/contact">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <p className='text-center'><small>© All Rights Reserved by edu-Care Kinder Garten</small></p>
        </div>
    );
};

export default Footer;