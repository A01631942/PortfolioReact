import React, {Fragment} from 'react';
import ShowProject from "./Functions/showProject"
import uxTitles from "./Show/Portfolio/titlesUX";
import uiTitles from "./Show/Portfolio/titlesUI";
import frontEndTitles from "./Show/Portfolio/titlesFrontEnd";
import Slider from "./Slider"
import {nanoid} from "nanoid";

// show images of the process
function showImages(project) {
    return (
        <ShowProject
            key={nanoid()}
            src={project.src}
            alt={project.alt}
            name={project.name}
            text={project.text}
            route={project.route}
            button={project.button}
        />
    );
  }


// guardar en variable si es ux, ui o front-end
const ShowPortfolio = (project) => {
    var titles;
    var active;
    const element=project.project;
    // save project Name to a variable
    const projectName=project.project[0].projectName;
    // choose what title files to use based on what project type it is (ux, ui, front-end)
    const projectType = element[0].projectType;
    if (projectType==="UX"){
        titles=uxTitles;
        active="UX"
    } else if(projectType==="UI"){
        titles=uiTitles;
        active="UI"
    }else if(projectType==="FrontEnd"){
        titles=frontEndTitles;
        active="FrontEnd"
    }
    // find the index of the title in the titles array
    const index = titles.findIndex(title => title.project === projectName);
    // console.log(`../../${titles[index].src}`);

    return (
        <Fragment>
        {/* <Title text="" title={header}/> */}
        <section className="images m-auto show">
            <h3 className="my-2 my-md-4 text-center">Portfolio | {titles[index].title}</h3>
            {/* slider showing all projects */}
            <Slider active={active} type="portfolio" titles={titles}/>

            {/* Imagenes */}
            <div className="row">
                <div className="col-12 col-lg-6">
                    <img src={titles[index].src} alt=""></img>
                </div>
                <div className="col-12 col-lg-6 my-auto">
                    <p className="mt-3">{titles[index].text}</p>
                </div>

                {/* mapping through the project */}
                {element.map(showImages)}

            </div>
        </section>
        </Fragment>
      );
}
 
export default ShowPortfolio;