import React from 'react';

const AllServices = (props) => {
    const { image, name, age, price, duration } = props.service;
    return (
        <div className="col">
            <div className="card h-100 hover-effect">
                <img className='w-100 rounded-3 mb-3 card-img-top' style={{ height: '300px' }} src={image} alt="" />
                <div style={{ backgroundColor: 'teal' }} className="card-body text-white">
                    <h5 className="card-title">{name}</h5>
                    <div className='d-flex justify-content-between pt-3'>
                        <p><i className="fas fa-child"></i> {age}</p>
                        <p className="card-text">  ${price}</p>
                        <p className=''><small> <i className="fas fa-clock"></i> {duration}</small></p>
                    </div>
                    <div className="card-footer text-center">
                        <small className="text-muted"><button className="btn text-white fw-bold  px-3 py-2 " style={{ backgroundColor: 'tomato' }}>Join Today</button></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;