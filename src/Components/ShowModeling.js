import React, {Fragment} from 'react';
import ShowModel from "./Functions/showModel";
import modelingTitles from "./Show/Portfolio/titlesModels";
import Slider from "./Slider";
import {nanoid} from "nanoid";
// import { render } from '@testing-library/react';
import ShowRender from "./Functions/showRender";

// show models of the process
function showModels1(project) {
    console.log("1 column");
    return (
        <ShowModel
            key={nanoid()}
            src={project.src}
            alt={project.alt}
            name={project.name}
            text={project.text}
            route={project.route}
            num="1"
        />
    );
  }
function showModels3(project) {
    console.log("3 columns");
    return (
        <ShowModel
            key={nanoid()}
            src={project.src}
            alt={project.alt}
            name={project.name}
            text={project.text}
            route={project.route}
            num="3"
        />
    );
  }

// show images of the process
function showRender2(project, index) {
    return (
        <ShowRender
            key={nanoid()}
            src={project.src}
            alt={project.alt}
            name={project.name}
            num="2"
            index={index}
        />
    );
  }
function showRender3(project, index) {
    return (
        <ShowRender
            key={nanoid()}
            src={project.src}
            alt={project.alt}
            name={project.name}
            num="3"
            index={index}
        />
    );
  }


// guardar en variable si es ux, ui o front-end
const ShowPortfolio = (project) => {
    const titles = modelingTitles;
    const active = "Modeling";
    const renders= project.project[0];
    // save renders length to a variable to pass on to ShowRender, wether to show 2 or 3 cols 
    // console.log("renders");
    // console.log(renders[0].src);
    const models= project.project[1];
    // save project Name to a variable
    const projectName=renders[0].projectName;
    // find the index of the title in the titles array
    const index = titles.findIndex(title => title.project === projectName);
    return (
        <Fragment>
        {/* <Title text="" title={header}/> */}
        <section id="models" className="images m-auto show">
            <h3 className="my-5 text-center">3d Modeling | {titles[index].title}</h3>
            {/* slider showing all projects */}
            <Slider active={active} type="portfolio" titles={titles}/>

            {/* Imagenes */}
            <div className="row">
                <div className="col-12 col-lg-8 my-4">
                    <img src={renders[0].src} alt="3d model"></img>
                </div>
                <div className="col-12 col-lg-4 my-auto">
                    <p>{titles[index].text}</p>
                </div>

                {/* mapping through the 3d models */}
                {models.length%3===0?
                  models.map(showModels3)
                : models.map(showModels1)}

                {/* show the other renders, but the cover */}
                {(renders.length-1)%2===0?
                renders.map(showRender2)
                :renders.map(showRender3)
                }

            </div>
        </section>
        </Fragment>
      );
}
 
export default ShowPortfolio;