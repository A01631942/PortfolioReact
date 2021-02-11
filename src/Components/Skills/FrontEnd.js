// Skills Front End
import React, {Fragment} from 'react';
import Title from "../Skills/TitleSkills"
import SkillsFrontEnd from "../Map/Skills/frontCover";
import Cover from "../Functions/skillCover"
import {nanoid} from "nanoid"


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
        <Title active="FrontEnd" text="Front end tools and skills such as html, css, react, etc. allows us to build a user interface from a previously designed interface which gives us the guidelines of how the user must look, feel and work."/>
        {/* Images */}
        <section className="images m-auto">
            <div className="row">
                {/* mapping through the project */}
                {SkillsFrontEnd.map(callCover)}
            </div>
        </section>
        </Fragment>
      );
}
 
export default UI