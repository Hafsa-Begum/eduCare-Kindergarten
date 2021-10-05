import React from 'react';
import './ContactUs.css';

const Contact = () => {
    return (
        <div className='my-5'>
            <h1 style={{ color: "tomato" }} className='text-center pb-5'>Contact Us <div className='straight-line'></div></h1>

            <div className="row mx-5 ps-5">
                <div className="col-md-6 ps-5">
                    <img className='w-75' src="https://potionwebstudio.com/wp-content/uploads/2018/10/google-map3-1080x630.jpg" alt="" />
                </div>
                <div className=' col-md-6 d-flex justify-content-center align-items-center'>
                    <div className='my-5'>
                        <h2 style={{ color: "tomato" }}>Stay in touch with us</h2>
                        <p> <i className="fas fa-map-marker-alt"></i> 4000 Central Florida Blvd. Orlando, Florida, 32816</p>
                        <p><i className="fas fa-phone"></i> +03601 885399</p>
                        <p><i className="fas fa-envelope"></i> info@eduCareKindergarten.com</p>
                    </div>
                </div>

            </div>
            <div className="row mt-5 px-5 form-background">
                <div className="col-md-6">

                    <form className='w-75 ms-5'>
                        <h3 className='py-3' style={{ color: "tomato" }}>Contact Form</h3>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Write your message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type='submit' className="btn text-white fw-bold  px-3 py-2" style={{ backgroundColor: 'tomato' }}>Submit </button>
                    </form>

                </div>
                <div className="col-md-6 text-center py-3">
                    <img className='w-75 mb-5 rounded-3' style={{ height: "350px" }} src="https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/04/email_image.jpg" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Contact;