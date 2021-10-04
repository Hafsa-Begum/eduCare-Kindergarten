import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-background pt-5'>
            <section className="">
                <div className='d-flex text-white justify-content-around align-items-center'>
                    <div className='pe-0 me-0 ps-5 '>
                        <h3 style={{ color: 'tomato' }}>edu-Care</h3>
                        <p><small>Kindergarten</small></p>
                        <img className='rounded-circle bg-white' src="https://i.ibb.co/QPDcxVw/logo.png" alt=""
                            style={{ width: '100px' }} /> <br />
                        <div className='pt-3'>
                            <i className="fab fa-facebook pe-3"></i>
                            <i className="fab fa-instagram pe-3"></i>
                            <i className="fab fa-linkedin-in pe-3"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                    <div className='pe-5 me-5 ps-5 ms-5'>
                        <h4 className='py-3'>Get in touch</h4>
                        <p> <i className="fas fa-map-marker-alt"></i> 4000 Central Florida Blvd. Orlando, Florida, 32816</p>
                        <p><i className="fas fa-phone"></i> +03601 885399</p>
                        <p><i className="fas fa-envelope"></i> info@eduCareKindergarten.com</p>

                    </div>
                    <div className='ps-0 ms-0 pe-5 me-5'>
                        <h4 className='py-3'>Useful Links</h4>
                        <div >
                            <a className='text-decoration-none text-white' href="/home">Home</a> <br />
                            <a className='text-decoration-none text-white' href="/about">About</a> <br />
                            <a className='text-decoration-none text-white' href="/services">Services</a> <br />
                            <a className='text-decoration-none text-white' href="/contact">Contact Us</a>
                        </div>
                    </div>
                </div>
                <p className='text-center pt-5 mt-5' style={{ color: 'tomato' }}><small>© All Rights Reserved by edu-Care Kindergarten</small></p>
            </section>

        </div>
    );
};

export default Footer;