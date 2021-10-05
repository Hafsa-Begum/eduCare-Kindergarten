import React, { useContext } from 'react';
import { ServiceContext } from '../../App';
import AllServices from '../AllServices/AllServices';

const Services = () => {

    const services = useContext(ServiceContext);

    return (
        <div className='container mb-5'>
            <h1 className='py-5 text-center' style={{ color: "tomato" }}>Services <div className='straight-line'></div></h1>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    services.map(service => <AllServices key={service.id} service={service}></AllServices>)
                }
            </div>
        </div>
    );
};

export default Services;