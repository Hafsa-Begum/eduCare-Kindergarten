import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg text-white px-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"> <img src="https://i.ibb.co/QPDcxVw/logo.png" alt="" width="50" height="50" className="d-inline-block align-text-top bg-primary rounded-circle" /></a>
                <div>
                    <h3 className='pb-0 mb-0 mt-2'> edu-Care</h3>
                    <p className='pt-0 mt-0'><small>Kindergarten</small></p>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-white" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;