import React from 'react';

const About = () => {
    return (
        <div style={{ backgroundColor: 'rgb(170, 219, 219)' }} className='row  py-5 text-white text-start px-5'>
            <h1 style={{ color: "tomato" }} className='text-center pb-5'>About Us <div className='straight-line'></div></h1>
            <div className="col-md-5 px-5 mx-5">
                <h1 style={{ color: "#292659" }} className=''>Our Mission</h1>
                <h4 style={{ color: "tomato" }}>We believe that human rights of a child are non-negotiable.
                </h4>
                <p style={{ color: "purple" }}>We are more than educators. We help families build confidence for life. Our programes give children a foundation they can build on. Whenever they go after leave edu-Care Kindergarten</p>
            </div>
            <div className="col-md-5">
                <img className='img-fluid ps-5 rounded' src="https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/03/about_image.jpg" alt="" />
            </div>

        </div>
    );
};

export default About;