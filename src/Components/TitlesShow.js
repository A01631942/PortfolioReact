const TitlesShow = ({type, active}) => {
    var classUX, classUI, classFront, classModeling;

    active==="UX"? classUX ="col-12 col-sm-3 active":classUX ="col-12 col-sm-3";
    active==="UI"? classUI ="col-12 col-sm-3 active":classUI ="col-12 col-sm-3";
    active==="FrontEnd"? classFront ="col-12 col-sm-3 active":classFront ="col-12 col-sm-3";
    active==="Modeling"? classModeling ="col-12 col-sm-3 active":classModeling ="col-12 col-sm-3";

    
    return ( 
        <div className="row justify-content-around">
            
            {/* column to align elements if skills active */}
            {type!=="portfolio"?
            <div className="col-1 d-none d-sm-block">
            </div>:null}
            

            {/* check if class active */}
            <div className={classUX}>
                <a href={type==="portfolio"?"/portfolio/ux/mexnia":"/skills/ux/contextual-interviews"}>UX Design</a> 
            </div>
            
            
            <div className={classUI}>
            <a href={type==="portfolio"?"/portfolio/ui/pet-track":"/skills/ui/interactive-prototype"}>UI Design</a> 
            </div>
            
            <div className={classFront}>
            <a href={type==="portfolio"?"/portfolio/front-end/vinner":"/skills/front-end/bootstrap4"}>Front End</a> 
            </div>
            
            {/* if it's portfolio, display column */}
            {type==="portfolio"?
            <div className={classModeling}>
                <a href="/portfolio/3d-modeling/">3D Modeling</a> 
            </div>:null}
            
            {/* column to aling elements if skills active */}
            {type!=="portfolio"?
            <div className="col-1 d-none d-sm-block">
            </div>:null}
        </div>
     );
}
 
export default TitlesShow;