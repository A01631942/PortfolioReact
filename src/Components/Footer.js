const Footer = () => {
    return ( 
        <section id="footer">
            <footer>
                <div className="footer section">
                    <hr className="mt-0 mb-4"></hr>
                    
                    <div className="row">
                        <div className="left col-12 col-lg-7">
                            <p id="footer-text"><strong>Valeria Toscano</strong> <span className="d-block d-lg-inline">UX/UI Designer & Front-End Developer</span></p>
                        </div>
                        <div className="footer right col-12 col-lg-5">
                            <a href="https://linkedin.com/in/valeria-toscano-alcala/" target="window"><img className="svg mx-2" alt="" src="../../imgs/linkedin.svg"/></a>
                            <a href="https://behance.net/valeriatdesign/" target="new"><img className="svg mx-2" alt="" src="../../imgs/behance.svg"/></a>
                            <a href="https://github.com/A01631942/" target="new tab"><img className="svg mx-2" alt="" src="../../imgs/github.svg"/></a>
                        </div>
                    </div>
                </div>
            </footer>   
        </section>
     );
}
 
export default Footer;