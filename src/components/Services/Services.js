import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='py-5 text-center' style={{ color: "tomato" }}>Our All Services</h1>

            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    services.map(service => (
                        <div class="col">
                            <div class="card h-100">
                                <img className='w-100 rounded-3 mb-3 card-img-top' style={{ height: '300px' }} src={service.image} alt="" />
                                <div style={{ backgroundColor: 'teal' }} className="card-body text-white px-5">
                                    <h5 class="card-title">{service.name}</h5>
                                    <p class="card-text">Price: $ {service.price}</p>
                                    <p><small> Duration: {service.duration}</small></p>
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