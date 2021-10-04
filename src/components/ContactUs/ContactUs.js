import React from 'react';

const Contact = () => {
    return (
        <div className='my-5'>
            <div className='text-center'>
                <h4 style={{ color: "tomato" }}>Contact Us</h4>
                <h1 style={{ color: "tomato" }}>Stay in touch with us</h1>
                <p> <i class="fas fa-map-marker-alt"></i> 4000 Central Florida Blvd. Orlando, Florida, 32816</p>
                <p><i class="fas fa-phone"></i> +03601 885399</p>
                <p><i class="fas fa-envelope"></i> info@eduCareKindergarten.com</p>
            </div>
            <div className="row my-5">
                <div className="col-md-6">
                    <form className='w-75 ms-5'>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>
                <div className="col-md-6 text-center" style={{ height: "350px" }}>
                    <img className='img-fluid mb-5 rounded-3' src="https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/04/email_image.jpg" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Contact;