// Portfolio UX
import React, {Fragment} from 'react';
import Title from "./TitlePortfolio"
import uximages from "../Map/Portfolio/uxcover";
import Cover from "../Functions/projectCover"

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


const UX = () => {
    return (
        <Fragment>
        <Title active="UX" text="Using UX and service design that allows me to find insights about the users, regarding their thoughts, concerns, motivations and frustrations, in order to know what they are looking for, what is important for them and how can a product create a good experience for them, while satysfying their needs."/>
        {/* Images */}
        <section className="images m-auto">
            <div className="row">
                {/* mapping through the project */}
                {uximages.map(callCover)}
            </div>
        </section>
        </Fragment>
      );
}
 
export default UX;