import React from 'react';

const Aboutme = () => {
    return ( 
        <section className="text-center mt-3 mt-lg-5 home justify-content-around">
            <div className="row">
                <div className="col-12 col-xl-5 m-auto">
                    <h1 className="d-block d-lg-none">Nice to meet you</h1>
                    <img id="profile" src="../../imgs/profile.jpg" alt="profile"></img>
                    <p className="my-4">UX/UI Designer & Front-End Developer</p>
                </div>
                <div className="col-12 col-xl-5 m-auto">
                    <h1 className="d-none d-lg-block">Nice to meet you</h1>
                    <h4 id="text">Hi! My name is Valeria Toscano, I'm a UX/UI Designer and Front-End Developer. I 
                    enjoy problem solving and learning new things. I would love to work with you. 
                    Get in touch and let's start working.</h4>
                    <a href="/contact" className="btn btn-primary button my-4">Contact</a>
                </div>
            </div>

        </section>
    );
}
 
export default Aboutme;