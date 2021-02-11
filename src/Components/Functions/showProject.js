import React from "react";

// show each project with its name, image and description
function ShowProject(project) {
  // console.log(project);
  return (
    <div id="show-project" className="col-12 col-md-6 col-lg-4 text-center cover mt-2 mb-2 my-lg-5"> 
      <h4 className="mb-3">{project.name}</h4>
      <img className="mb-3" alt={project.alt} src={project.src}/>
      <p className="proyect" >{project.text}</p>
      {project.button? <a href={project.route} className="button btn btn-sm my-3">See Tool</a>:null }
      {/* <hr className="d-block d-md-none mt-2"></hr>         */}
    </div>
  );
}

export default ShowProject;