import React, { useContext } from 'react';
import { ServiceContext } from '../../App';

const Teacher = () => {

    const services = useContext(ServiceContext);

    return (
        <div className='container'>
            <h1 className='py-5 text-center' style={{ color: "tomato" }}>Our Teachers<div className='straight-line'></div></h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    services.map(teachers => (
                        <div className="col">
                            <div className="card">
                                <img src={teachers.teacher.image} className="card-img-top img-fluid w-100" alt="/"
                                    style={{
                                        height: '280px'
                                    }} />
                                <div className="card-body">
                                    <h5 className="card-title text-center" style={{ color: "tomato" }}>{teachers.teacher.name}</h5>
                                    <p className="card-text text-center" style={{ color: '#292659' }}>{teachers.teacher.role}</p>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
};

export default Teacher;