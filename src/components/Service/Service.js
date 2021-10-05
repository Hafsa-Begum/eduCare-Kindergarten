import React from 'react';

const Service = (props) => {
    const { image, name, age, price } = props.service;
    return (
        <div className="col">
            <div className="card h-100 hover-effect">
                <img className='w-100 rounded-3 mb-3 card-img-top' style={{ height: '300px' }} src={image} alt="" />
                <div style={{ backgroundColor: 'teal' }} className="card-body text-white px-5">
                    <h5 className="card-title">{name}</h5>
                    <div className='d-flex justify-content-between pt-3'>
                        <p><i className="fas fa-child"></i> {age}</p>
                        <p className="card-text">${price}</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;