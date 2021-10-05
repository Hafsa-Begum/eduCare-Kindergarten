import React, { useContext } from 'react';
import { ServiceContext } from '../../App';

const Services = () => {

    const services = useContext(ServiceContext);

    return (
        <div className='container mb-5'>
            <h1 className='py-5 text-center' style={{ color: "tomato" }}>Services <div className='straight-line'></div></h1>

            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    services.map(service => (
                        <div class="col">
                            <div class="card h-100 hover-effect">
                                <img className='w-100 rounded-3 mb-3 card-img-top' style={{ height: '300px' }} src={service.image} alt="" />
                                <div style={{ backgroundColor: 'teal' }} className="card-body text-white">
                                    <h5 class="card-title">{service.name}</h5>
                                    <div className='d-flex justify-content-between pt-3'>
                                        <p><i class="fas fa-child"></i> {service.age}</p>
                                        <p class="card-text">  ${service.price}</p>
                                        <p className=''><small> <i class="fas fa-clock"></i> {service.duration}</small></p>
                                    </div>
                                    <div class="card-footer text-center">
                                        <small class="text-muted"><button className="btn text-white fw-bold  px-3 py-2 " style={{ backgroundColor: 'tomato' }}>Join Today</button></small>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;