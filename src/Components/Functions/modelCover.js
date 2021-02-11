import React from "react";

function Cover(project) {
  return (
    <div className="col-12 col-md-6 col-lg-4 text-center cover">
        <h3 className="my-4 text-center">{project.title}</h3>
        <model-viewer className="m-auto" src={project.src} auto-rotate camera-controls></model-viewer>
        <p>{project.description}</p>
        <a href={project.route} className="button btn btn-sm my-3">More information</a>
    </div>
  );
}

export default Cover;