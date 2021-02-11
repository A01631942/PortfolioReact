// Skills UI
import React, {Fragment} from 'react';
import Title from "../Skills/TitleSkills"
import SkillsUI from "../Map/Skills/uicover";
import Cover from "../Functions/skillCover"
import {nanoid} from "nanoid";


function callCover(project) {
    return (
        <Cover
            key={nanoid()}
            src={project.src}
            alt={project.tool}
            title={project.tool}
            description={project.text}
            route={project.route}
        />
    );
  }


const UI = () => {
    return (
        <Fragment>
        <Title active="UI" text="User interface tools allows us to create an intuitive experience through a digital product. The interface has to work in a logical way from the user's perspective, creating a user-friendly and intuitive exprience. User interface softwares allow us to design interfaces and create the appropriate documentation needed for the development team to build the interface."/>
        {/* Images */}
        <section className="images m-auto">
            <div className="row">
                {/* mapping through the project */}
                {SkillsUI.map(callCover)}
            </div>
        </section>
        </Fragment>
      );
}
 
export default UI