import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='text-center bacground-image d-flex justify-content-center align-items-center'>
            <div className=''>
                <h1>404</h1>
                <h3>Oooppps!</h3>
                <p>The page you search is not available!!!</p>
            </div>
        </div>
    );
};

export default NotFound;