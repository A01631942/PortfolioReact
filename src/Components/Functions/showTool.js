import React from "react";

// show each tool in a card
function ShowTool(tool) {
  let column;
  tool.tool==="interactive prototype"?column="col-12 col-md-10 col-lg-8 m-auto":column="col-12 col-md-6"
  return (
    <div className={`${column} text-left mt-4`}>
    
    
    {tool.tool==="interactive prototype"?
    <iframe title="Prototype Video" aria-hidden="true" src={tool.src}/>:<img className="my-4" src={tool.src} alt={tool.alt} title="iteractive prototype"></img>}
    <p>{tool.text}</p>
    {tool.text2?<p>{tool.text2}</p>:null}
    {tool.text3?<p>{tool.text3}</p>:null}
    {tool.text4?<p>{tool.text4}</p>:null}
    </div>
  );
}

export default ShowTool;