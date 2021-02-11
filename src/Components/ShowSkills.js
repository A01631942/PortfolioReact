import React, {Fragment} from 'react';
import ShowTool from "./Functions/showTool"
import uxTitles from "./Show/Skills/titlesUX";
import uiTitles from "./Show/Skills/titlesUI";
import frontEndTitles from "./Show/Skills/titlesFrontEnd";
import {nanoid} from "nanoid";
// import TitlesSkills from "./Functions/titlesSkills";
import Slider from "../Components/Slider"


// show images of each tool
function callTools(tool) {
    return (
        <ShowTool
            key= {nanoid()}
            src={tool.src}
            alt={tool.alt}
            text={tool.text}
            text2={tool.text2}
            text3={tool.text3}
            text4={tool.text4}
            tool={tool.tool}
        />
    );
  }

// guardar en variable si es ux, ui o front-end
const ShowSkills = (tool) => {
    var titles;
    var active;
    // seleccionar el objeto
    const element=tool.project;
    // console.log(element);
    // save tool Name to a variable ex:interviews
    const selectedTool=element[0].find;
    // console.log(selectedTool);
    // choose what title files to use based on what project type it is (ux, ui, front-end)
    const toolType = element[0].type;
    // console.log(toolType)
    if (toolType==="UX"){
        titles=uxTitles;
        active="UX";
    } else if(toolType==="UI"){
        titles=uiTitles;
        active="UI";
    }else if(toolType==="FrontEnd"){
        titles=frontEndTitles;
        active="FrontEnd";
    }
    
    // find the index of the title in the titles array
    const index = titles.findIndex(title => title.tool === selectedTool);

    // console.log(titles);
    // console.log(index);
    // console.log(selectedTool)
    let image;
    let par;
    if(titles[index].title==="Service Blueprints" || titles[index].title==="Customer Journey Map"|| titles[index].type==="ui"){
        image="col-12";
        par="col-12";
    }else{
        image="col-12 col-lg-6 mb-4 my-lg-auto";
        par="col-12 col-lg-6 my-auto";
    }
    console.group("tool");
    console.log(tool.project[0].type);

    return (
        <Fragment>
        <section className="images m-auto show">
            <h3 className="my-2 my-lg-5 text-center">Skills | {titles[index].title}</h3>
            {/* Slider showing all tools */}
            <Slider active={active} type ="skills" titles={titles}/>

            <div className="row">
                    <div className={image}>
                        <img src={titles[index].src} alt=""></img>
                    </div>
                    <div className={`text-left mt-1 mt-lg-4 ${par}`}>
                        <p>{titles[index].text}</p>
                        {titles[index].text2?<p>{titles[index].text2}</p>:null}
                        {titles[index].text3?<p>{titles[index].text3}</p>:null}
                        {titles[index].text4?<p>{titles[index].text4}</p>:null}
                    </div>
                    {/* show images of skill */}
                    {(tool.project[0].type==="UI"||tool.project[0].type==="UX")?element.map(callTools):null}
            </div>
        </section>
        </Fragment>
      );
}
 
export default ShowSkills;