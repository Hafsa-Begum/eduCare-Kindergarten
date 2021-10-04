import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='text-center bacground-image d-flex justify-content-center align-items-center'>
            <div className=''>
                <h1>404</h1>
                <h3>Oooppps!</h3>
                <p>The page you search is not available!!!</p>
                <Link to='/home'>
                    <button className="btn text-white fw-bold  px-3 py-2 my-3" style={{ backgroundColor: 'tomato' }}>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;