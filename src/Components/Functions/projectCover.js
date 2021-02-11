import React from "react";

function Cover(project) {
  return (
    <div className="col-12 col-md-6 col-lg-4 text-center cover">
        <h3 className="my-4 text-center">{project.title}</h3>
        <img className="my-4" alt={project.alt} src={project.src}/>
        <p>{project.description}</p>
        <a href={project.route} className="button btn btn-sm my-3">More information</a>
    </div>
  );
}

export default Cover;