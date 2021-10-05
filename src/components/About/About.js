import React from 'react';

const About = () => {
    return (
        <div style={{ backgroundColor: 'rgb(170, 219, 219)' }} className=''>
            <h1 style={{ color: "tomato" }} className='text-center py-5'>About Us <div className='straight-line'></div></h1>
            <div className='d-lg-flex d-sm-block w-100 py-5 text-white text-start px-5 mx-5'>

                <div className="w-100">

                    <h1 style={{ color: "#292659" }} className=''>Our Mission</h1>
                    <h4 style={{ color: "tomato" }}>We believe that human rights of a child are non-negotiable.
                    </h4>
                    <p style={{ color: "purple" }}>We are more than educators. We help families build confidence for life. Our programes give children a foundation they can build on. Whenever they go after leave edu-Care Kindergarten</p>

                </div>
                <div className=" w-100 ms-0 ps-0 pe-5 me-5 text-center">
                    <img className='w-100 ps-5 rounded-3 pe-5' src="https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/03/about_image.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;