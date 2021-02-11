// import react, {Fragment} from "react"

const Software = () => {
    return ( 
        <section>
        <h1>Software</h1>
            <div id="software" className="row my-5">

            {/* ux/ui design */}
                <div className="col-12 col-sm-6 col-lg-3 my-2 my-lg-2 text-center">
                    <h6 className="software">UX/UI Design</h6>
                    <hr className="w-75 "></hr>
                    <p>Adobe XD</p>
                    <img className="svg mb-3" alt="" src="../../imgs/Software/xd.svg"></img>
                    <p>Figma</p>
                    <img className="svg mb-3" alt="" src="../../imgs/Software/figma.svg"></img>
                    <p>Sketch</p>
                    <img className="svg mb-3" alt="" src="../../imgs/Software/sketch.svg"></img>
                </div>
                
                {/* graphic */}
                <div className="col-12 col-sm-6 col-lg-3 my-2 my-lg-2 text-center">
                    <h6 className="software">Graphic Design</h6>
                    <hr className="w-75 "></hr>
                    <p>Adobe Illustrator</p>
                    <img className="svg mb-3" alt="" src="../../imgs/Software/illustrator.svg"></img>
                    <p>Adobe Photoshop</p>
                    <img className="svg mb-3" alt="" src="../../imgs/Software/photoshop.svg"></img>
                    <p>Adobe Indesign</p>
                    <img className="svg mb-3" alt="" src="../../imgs/Software/indesign.svg"></img>
                </div>
                
                {/* 3d modeling */}
                <div className="col-12 col-sm-6 col-lg-3 my-2 my-md-4 my-lg-2 text-center">
                    <h6 className="software">3D Modeling</h6>
                    <hr className="w-75 "></hr>
                    <p>SolidWorks</p>
                    <img className="svg mb-3" alt="" src="../../imgs/Software/solid.svg"></img>
                    <p>Autodesk Fusion 360</p>
                    <img className="svg mb-3" alt="" src="../../imgs/Software/fusion.svg"></img>
                    <p>Rhinoceros</p>
                    <img className="svg mb-3" alt="" src="../../imgs/Software/rhino.svg"></img>
                </div>
                
                {/* rendering */}
                <div className="col-12 col-sm-6 col-lg-3 my-2 my-md-4 my-lg-2 text-center">
                    <h6 className="software">Rendering</h6>
                    <hr className="w-75 "></hr>
                    <p>Autodesk Fusion 360</p>
                    <img className="svg mb-3" alt="" src="../../imgs/Software/fusion.svg"></img>
                    <p>Keyshot</p>
                    <img className="svg mb-3" alt="" src="../../imgs/Software/keyshot.svg"></img>
                </div>
            </div>
        </section>
     );
}
 
export default Software;