import React from "react";

// show each project with its name, image and description
function ShowRender(render) {
  console.log(render);
  let column;
  (render.index===0)?column="d-none"
  :column="col-12 col-md-6 col-lg-4"

  // console.log(project);
  return (
    <div className={`text-center my-4 ${column}`}> 
      <img src={render.src} alt="render"></img>
      <p className="text-center my-3">{render.name}</p>
    </div>
  );
}

export default ShowRender;