import React from 'react';

const TitleSkills = ({text, active}) => {
    var classUX;
    var classUI;
    var classFrontEnd;
    var lineUX;
    var lineUI;
    var lineFrontEnd;

    if(active==="UX"){
        classUX="col-sm-4 col-12 text-center mb-2 align-items-center active";
        lineUX="d-sm-block d-none";
    }else{
        classUX="col-sm-4 col-12 text-center mb-2 align-items-center";
        lineUX="d-none";
    }
  
  
    if(active==="UI"){
        classUI="col-sm-4 col-12 text-center mb-2 align-items-center active";
        lineUI="d-sm-block d-none";
    }else{
        classUI="col-sm-4 col-12 text-center mb-2 align-items-center";
        lineUI="d-none";
    }

    if(active==="FrontEnd"){
        classFrontEnd="col-sm-4 col-12 text-center mb-2 align-items-center active";
        lineFrontEnd="d-sm-block d-none";
    }else{
        classFrontEnd="col-sm-4 col-12 text-center mb-2 align-items-center";
        lineFrontEnd="d-none";
    }

    return (
        <div className="title">
            {/* <!-- Jumbotron --> */}
            <div className="jumbotron yellow">
                <h1 className="mb-3 text-center">Skills</h1> 
                <section className="m-auto">
                    <div className="row mt-5">
                        <div className={classUX}>
                            <a className="mx-3" href="/skills/ux">UX Design</a>
                            <hr className={lineUX}></hr>
                        </div>
                        <div className={classUI}>
                            <a className="mx-3" href="/skills/ui">UI Design</a>
                            <hr className={lineUI}></hr>
                        </div>
                        <div className={classFrontEnd}>
                            <a className="mx-3" href="/skills/front-end">Front-End</a>
                            <hr className={lineFrontEnd}></hr>
                        </div>
                    </div>
                </section>
            </div>
            <p className="d-none d-lg-block text-center">{text}</p>
        </div>
    );
}
 
export default TitleSkills;