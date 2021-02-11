// Portfolio Modeling
import React, {Fragment} from 'react';
import Title from "./TitlePortfolio"
import models from "../Map/Portfolio/models";
import Cover from "../Functions/modelCover"

function callCover(project) {
    return (
        <Cover
            key={project.id}
            src={project.src}
            alt={project.alt}
            title={project.title}
            description={project.description}
            route={project.route}
        />
    );
  }


const Modeling = () => {
    return (
        <Fragment>
        <Title active="Modeling" text="Usind different techniques in 3D modeling, from using pictures as canvas, modifying spheres or creating a product with surface building, I can create any product you can think of."/>
        {/* Images */}
        <section id="modeling" className="images m-auto">
            <div className="row">
                {/* mapping through the project */}
                {models.map(callCover)}
            </div>
        </section>
        </Fragment>
      );
}
 
export default Modeling;