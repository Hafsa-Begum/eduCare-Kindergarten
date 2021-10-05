import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../../App';
import './Home.css';

const Home = () => {

    const services = useContext(ServiceContext);

    return (
        <div className='pb-5 mb-5'>
            <div className='background-img'>
                <div className='d-lg-flex w-100 container d-sm-block py-5 text-start px-5 '>
                    <div className="w-100">
                        <h1 id='banner-name' style={{
                            color: '#292659',
                            fontSize: '64px'
                        }} className='pt-5 my-5'>Welcome to Our <span style={{
                            color: 'tomato'
                        }} >edu-Care Kindergarten</span></h1>

                        <p>We pride ourselves on being able to provide happy, safe inclusive environment which children aged two and a half to twelve years old.</p>
                        <button className="btn text-white fw-bold  px-3 py-2" style={{ backgroundColor: 'tomato' }}>Visit Our School </button>
                    </div>
                    <div className="w-100">
                        <img className='w-100 ps-5 rounded' src="https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/03/hero_area_Image.png" alt="" />
                    </div>

                </div>
            </div>
            <div className='mx-5'>
                <h1 className='py-5 text-center' style={{ color: "tomato" }}>Our Services <div className='straight-line'></div></h1>

                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 card-group'>
                    {
                        services.slice(0, 5).map(service => (
                            <div class="col">
                                <div class="card h-100 hover-effect">
                                    <img className='w-100 rounded-3 mb-3 card-img-top' style={{ height: '300px' }} src={service.image} alt="" />
                                    <div style={{ backgroundColor: 'teal' }} className="card-body text-white px-5">
                                        <h5 class="card-title">{service.name}</h5>
                                        <div className='d-flex justify-content-between pt-3'>
                                            <p><i class="fas fa-child"></i> {service.age}</p>
                                            <p class="card-text">${service.price}</p>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <Link to='/services'>
                    <button className="btn text-white fw-bold  px-3 py-2 my-3" style={{ backgroundColor: 'tomato' }}>View All Services</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;