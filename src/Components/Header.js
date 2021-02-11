import React, {Fragment} from 'react';
import "../Header.css"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const Header=() => {
    function toggle(){
        document.querySelector("nav").classList.toggle("open");
        document.querySelector(".container").classList.toggle("h-60");
        document.querySelectorAll(".navIcon").forEach(icon => {
            icon.classList.toggle("hidden");
        })
    }

    window.addEventListener("resize", ()=>{
        if(document.body.clientWidth>576){
            document.querySelector("nav").classList.remove("open");
            document.querySelectorAll(".navIcon").forEach(icon => {
                icon.classList.add("hidden");
            })
            document.querySelector("#hamburguer").classList.remove("hidden");
            document.querySelector(".container").classList.add("h-60");
        } 
    })
    return(
        <Fragment>
<header>
    <div id="header" className="container h-60">
        <div className="shown">
        <a href="/" id="brand" className="navbar-brand"><img className="logo" alt="Logo" src="../../imgs/logo.png"></img> <span className="d-none d-lg-inline">Valeria Toscano</span> </a>
            <div onClick={toggle} className="nav-toggle" id="navToggle">
                <i id="hamburguer" className="navIcon key-icon fas fa-bars"></i>
                <i className="navIcon hidden key-icon fas fa-times"></i>
            </div>

        </div>
        <nav>
            <ul>
                <li><a href="/about-me">About Me</a></li>

                {/* Dropdown Portfolio */}
                <li className="nav-item dropdown">
                      {/* <!-- class for hovering effect see css --> */}
                      <div className="dropbtn1">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Portfolio
                        </a>
                        <div id="portfolio-menu" className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="/portfolio/ux">UX Design</a>
                          <a className="dropdown-item" href="/portfolio/ui">UI Design</a>
                          <a className="dropdown-item" href="/portfolio/front-end">Font-End</a>
                        <a className="dropdown-item" href="/portfolio/3d-modeling">3D Modeling</a>
                       </div>
                      </div>
                    </li>

                    {/* Dropdown Skills */}
                    <li className="nav-item dropdown">
                      {/* <!-- dropbtn class is for dropdown when toggle (in css) --> */}
                      <div className="dropbtn2">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Skills
                        </a>
                        <div id="skills-menu" className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="/skills/ux">UX Design</a>
                          <a className="dropdown-item" href="/skills/ui">UI Design</a>
                          <a className="dropdown-item" href="/skills/front-end">Front-End</a>
                        </div>
                      </div>
                    </li>

                <li><a href="/contact">Contact</a></li>
                <li><a href="/software">Software</a></li>
            </ul>
        </nav>
    </div>
</header>

{/* <h1>hello</h1> */}
</Fragment>)}

export default Header;