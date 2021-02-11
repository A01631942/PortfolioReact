// Portfolio Front End
import React, {Fragment} from 'react';
import Title from "./TitlePortfolio"
import frontEndImages from "../Map/Portfolio/frontCover";
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
        <Title active="FrontEnd" text="Front end is everything where the user interacts, the user interface and how it is arranged and designed using different font sizes, colors and positioning is part of the front end."/>
        {/* Images */}
        <section className="images m-auto">
            <div className="row">
                {/* mapping through the project */}
                {frontEndImages.map(callCover)}
            </div>
        </section>
        </Fragment>
      );
}
 
export default UX;