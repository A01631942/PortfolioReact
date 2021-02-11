import React from "react";

function SkillCover(project) {
  return (
    <div className="col-12 col-md-6 col-xl-4 text-center cover">
    
    {/* Card */}
      <div className="card my-3">
        <p className="my-4 titleSkills">{project.title}</p>
        <img className="my-4 m-auto w-75" alt={project.alt} src={project.src}/>
        <div className="card-body">
        <p className="skillText">{project.description}</p>
        <a href={project.route} className="button btn btn-sm my-3">More information</a>
        </div>
      </div>
      
    </div>
  );
}

export default SkillCover;