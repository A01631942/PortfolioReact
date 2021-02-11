import React from "react";

// show each project with its name, image and description
function ShowProject(project) {
  let column;
   (project.num==="3")?column="col-12 col-md-6 col-lg-4 h-400"
  :column="col-12 col-lg-4"

  return (
    <div className={`text-center my-4 show-models ${column}`}> 
      <model-viewer className="m-auto" src={project.src} auto-rotate camera-controls></model-viewer>
      <p className="text-center my-3">{project.name}</p>
    </div>
  );
}

export default ShowProject;