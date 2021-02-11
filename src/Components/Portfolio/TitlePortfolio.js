import React from 'react';

const Title = ({text, active}) => {

    var classUX;
    var classUI;
    var classFrontEnd;
    var classModeling;
    var lineUX;
    var lineUI;
    var lineFrontEnd;
    var lineModeling;

    if(active==="UX"){
        classUX="col-lg-3 col-sm-6 col-12 text-center active";
        lineUX="d-sm-block d-none";
    }else{
        classUX="col-lg-3 col-sm-6 col-12 text-center";
        lineUX="d-none";
    }
  
  
    if(active==="UI"){
        classUI="col-lg-3 col-sm-6 col-12 text-center active";
        lineUI="d-sm-block d-none";
    }else{
        classUI="col-lg-3 col-sm-6 col-12 text-center";
        lineUI="d-none";
    }

    if(active==="FrontEnd"){
        classFrontEnd="col-lg-3 col-sm-6 col-12 text-center active";
        lineFrontEnd="d-sm-block d-none";
    }else{
        classFrontEnd="col-lg-3 col-sm-6 col-12 text-center";
        lineFrontEnd="d-none";
    }

    if(active==="Modeling"){
        classModeling="col-lg-3 col-sm-6 col-12 text-center active";
        lineModeling="d-sm-block d-none";
    }else{
        classModeling="col-lg-3 col-sm-6 col-12 text-center";
        lineModeling="d-none";
    }
    

    // check which element is active

    return (
    <div className="title">
        {/* <!-- Jumbotron --> */}
        <div className="jumbotron yellow">
                <h1 className="mb-3 text-center">Portfolio</h1> 
                <section className="m-auto">
                    <div className="row mt-5">
                                <div className={classUX}>
                                    <a className="mx-3" href="/portfolio/ux">UX Design</a>
                                    <hr className={lineUX}></hr>
                                </div>
                                <div className={classUI}>
                                    <a className="mx-3" href="/portfolio/ui">UI Design</a>
                                    <hr className={lineUI}></hr>
                                </div>
                                <div className={classFrontEnd}>
                                    <a className="mx-3" href="/portfolio/front-end">Front-End</a>
                                    <hr className={lineFrontEnd}></hr>
                                </div>
                                <div className={classModeling}>
                                    <a className="mx-3" href="/portfolio/3d-modeling">3D Modeling</a>
                                    <hr className={lineModeling}></hr>
                                </div>
                    </div>
                </section>
            </div>

            <p className="d-none d-lg-block text-center">{text}</p>
    </div>
      );
}
 
export default Title;