// Skills UX
import React, {Fragment} from 'react';
import Title from "../Skills/TitleSkills"
import SkillsUX from "../Map/Skills/uxcover";
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


const UX = () => {
    return (
        <Fragment>
        <Title active="UX" text="User experience tools helps us to find the exact pain points of our users in order to develop the best solution for them. In this area you will find examples of tools used in projects, however some information is confidential, therefore cannot be shown."/>
        {/* Images */}
        <section className="images m-auto">
            <div className="row">
                {/* mapping through the project */}
                {SkillsUX.map(callCover)}
            </div>
        </section>
        </Fragment>
      );
}
 
export default UX