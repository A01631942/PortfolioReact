import React from 'react';

const Aboutme = () => {
    return ( 
        <section className="text-center aboutme mt-5">
            <h1>About Me</h1>
            <div className="my-5">
               <img className="profile mb-3" src="../../imgs/profile.jpg" alt="Profile"></img>
                <p>I am a UX/UI Designer and Front-End Developer with knowledge in UX research tools, UI design process and front-end development languages and frameworks. </p> 
            </div>
            
            <div className="my-5">
                <img className="mb-3 svg" src="../../imgs/ux-design.svg" alt="UX/UI Icon" />
                <h2>UX/UI Design</h2>
                <p>From contextual interviews up to usability testing, what I love about UX/UI design is that it provides a way to identify users’ motivations, concerns and desires, and know what is important for them and translate it into a user-friendly, aesthetic and fucntional digital product.</p>
            </div>

            <div className="my-5">
                <img className="mb-3 svg" src="../../imgs/front-end.svg" alt="UX/UI Icon" />
                <h2>Front-End Development</h2>
                <p>Using HTML5, CSS3, Bootstrap4, Javascript ES6 and React JS I can help you transform your idea into a functional, user-friendly and aesthetic applicaion.</p>
            </div>

            <div className="my-5">
                <img className="mb-3 svg" src="../../imgs/responsive.svg" alt="UX/UI Icon" />
                <h2>Responsive Design</h2>
                <p>I know how importat it is for your users to be able to see your website in any device, this is why making a responsive website is one of my biggest priorities, allowing your users to have a pleasant experience wheter they are using a mobile phone, a tablet or a computer.</p>
            </div>

            <div className="my-5">
                <img className="mb-3 svg" src="../../imgs/portfolio.svg" alt="UX/UI Icon" />
                <h2>Portfolio</h2>
                <p>Take a look at my work</p>
                <a href="/portfolio" className="button btn btn-sm my-3">See Projects</a>
                <p>Or download my PDF portfolio</p>
                <img className="m-auto" id="qr" src="../../imgs/filePortfolio.svg" alt=""></img>
                <p className="small mt-4 mb-0">Click the button to download PDF</p>
                <a href="https://p.flowcode.com/FERFn3sA?fc=0" target="window" className="button btn btn-sm my-3">Download</a>
            </div>
        </section>
    );
}
 
export default Aboutme;