// Portfolio UI
import React, {Fragment} from 'react';
import Title from "./TitlePortfolio"
import uiImages from "../Map/Portfolio/uicover";
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


const UI = () => {
    return (
        <Fragment>
        <Title active="UI" text="User Interface Design is the visual design of the front-end, everything that the user sees and interacts with. User interface has to consider that the experience when navigating is easy and intuitive, creaing a pleasant experience."/>
        {/* Images */}
        <section className="images m-auto">
            <div className="row">
                {/* mapping through the project */}
                {uiImages.map(callCover)}
            </div>
        </section>
        </Fragment>
      );
}
 
export default UI;