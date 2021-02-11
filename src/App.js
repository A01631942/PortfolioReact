// import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Aboutme from './Components/Aboutme';
import Home from './Components/Home';
import Contact from "./Components/Contact"
import Software from "./Components/Software"
import Slider from "./Components/Slider"
import Navigation from "./Components/Header"
// Portfolio
import PortfolioUX from './Components/Portfolio/UX';
import PortfolioUI from './Components/Portfolio/UI';
import PortfolioFrontEnd from './Components/Portfolio/FrontEnd';
import PortfolioModeling from './Components/Portfolio/Modeling';
import React from "react";
import {Route,Switch} from "react-router-dom";
// Show Portfolio
import ShowPortfolio from './Components/ShowPortfolio';
import mexnia from "./Components/Show/Portfolio/UX/mexnia";
import nonno from "./Components/Show/Portfolio/UX/nonno"
import uxVinner from "./Components/Show/Portfolio/UX/vinner";
import petTrack from "./Components/Show/Portfolio/UI/petTrack";
import uiVinner from "./Components/Show/Portfolio/UI/vinner";
import frontEndVinner from "./Components/Show/Portfolio/FrontEnd/vinner";
// Skills
import SkillsUX from "./Components/Skills/UX"
import SkillsUI from "./Components/Skills/UI"
import SkillsFrontEnd from "./Components/Skills/FrontEnd"
import ShowSkills from "./Components/ShowSkills"
// Show UX Skills
import interviews from "./Components/Show/Skills/UX/contextualInterviews";
import customerJourney from "./Components/Show/Skills/UX/customerJourney"
import empathyMap from "./Components/Show/Skills/UX/empathyMap"
import extremeUsers from "./Components/Show/Skills/UX/extremeUsers"
import innovationTriggers from "./Components/Show/Skills/UX/innovationTriggers"
import personaMap from "./Components/Show/Skills/UX/personaMap"
import questionnaires from "./Components/Show/Skills/UX/questionnaires"
import scamper from "./Components/Show/Skills/UX/scamper"
import blueprints from "./Components/Show/Skills/UX/serviceBlueprints"
import designCanvas from "./Components/Show/Skills/UX/serviceDesignCanvas"
import safari from "./Components/Show/Skills/UX/serviceSafari"
import shadowing from "./Components/Show/Skills/UX/shadowing"
import stakeholders from "./Components/Show/Skills/UX/stakeholders"
import experieneCanvas from "./Components/Show/Skills/UX/userExperienceCanvas"
import valueProposition from "./Components/Show/Skills/UX/valueProposition"
// Show UI Skills
import mobileFirst from "./Components/Show/Skills/UI/mobileFirst"
import interactivePrototype from "./Components/Show/Skills/UI/interactive"
import siteMap from "./Components/Show/Skills/UI/siteMap"
import taskFlow from "./Components/Show/Skills/UI/taskFlow"
import wireframing from "./Components/Show/Skills/UI/wireframe"
// Show FrontEnd Skills
import bootstrap from "./Components/Show/Skills/FrontEnd/bootstrap"
import css from "./Components/Show/Skills/FrontEnd/css"
import git from "./Components/Show/Skills/FrontEnd/git"
import gitHub from "./Components/Show/Skills/FrontEnd/github"
import html from "./Components/Show/Skills/FrontEnd/html"
import javaScript from "./Components/Show/Skills/FrontEnd/javascript"
import reactJS from "./Components/Show/Skills/FrontEnd/reactjs"
// Show 3d Modeling Skills
import ShowModeling from "./Components/ShowModeling"
import dalia from "./Components/Show/Portfolio/Modeling/dalia"
import octo from "./Components/Show/Portfolio/Modeling/octo"
import ondular from "./Components/Show/Portfolio/Modeling/ondular"
import motron from "./Components/Show/Portfolio/Modeling/motron"
import printer from "./Components/Show/Portfolio/Modeling/printer"
import tennis from "./Components/Show/Portfolio/Modeling/tennis"
import vase from "./Components/Show/Portfolio/Modeling/vase"

function App() {

  function navigate(){
    const head=document.getElementsByTagName("header")
    console.log(head[0]);
  }
  // console.log(document.getElementsByTagName("header"));
  // console.log(document.getElementByTagName("footer"));
  return (
    <div>
    <Navigation/>
    {/* {navigate()} */}
    {/* <Navbar/> */}
      <Switch>
      {/* testing routes */}
      <Route exact path="/test" component={Slider}/>


        {/* General Routes */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/about-me" component={Aboutme}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/software" component={Software}/>
        
        {/* Portfolio */}
        <Route exact path="/portfolio" component={PortfolioUX}/>
        <Route exact path="/portfolio/ux" component={PortfolioUX}/>      
        <Route exact path="/portfolio/ui" component={PortfolioUI}/>
        <Route exact path="/portfolio/front-end" component={PortfolioFrontEnd}/>
        <Route exact path="/portfolio/3d-modeling" component={PortfolioModeling}/>
        
        {/* Show UX */}
        <Route exact path='/portfolio/ux/mexnia' render={
          (props) => <ShowPortfolio {...props} project = {mexnia}/>
        } />
        <Route exact path='/portfolio/ux/nonno' render={
          (props) => <ShowPortfolio {...props} project = {nonno}/>
        } />
        <Route exact path='/portfolio/ux/vinner' render={
          (props) => <ShowPortfolio {...props} project = {uxVinner}/>
        } />
        
        {/* Show UI */}
        <Route exact path='/portfolio/ui/pet-track' render={
          (props) => <ShowPortfolio {...props} project = {petTrack}/>
        } />
        <Route exact path='/portfolio/ui/vinner' render={
          (props) => <ShowPortfolio {...props} project = {uiVinner}/>
        } />
        
        {/* Show Front-End */}
        <Route exact path='/portfolio/front-end/vinner' render={
          (props) => <ShowPortfolio {...props} project = {frontEndVinner}/>
        } />
        
        {/* Skills */}
        <Route exact path="/skills" component={SkillsUX}/>
        <Route exact path="/skills/ux" component={SkillsUX}/>
        <Route exact path="/skills/ui" component={SkillsUI}/>
        <Route exact path="/skills/front-end" component={SkillsFrontEnd}/>

        {/* Show Skills UX */}
        <Route exact path='/skills/ux/contextual-interviews' render={
          (props) => <ShowSkills {...props} project = {interviews}/>
        } />
        <Route exact path='/skills/ux/customer-journey-map' render={
          (props) => <ShowSkills {...props} project = {customerJourney}/>
        } />
        <Route exact path='/skills/ux/empathy-map' render={
          (props) => <ShowSkills {...props} project = {empathyMap}/>
        } />
        <Route exact path='/skills/ux/extreme-users' render={
          (props) => <ShowSkills {...props} project = {extremeUsers}/>
        } />
        <Route exact path='/skills/ux/innovation-triggers' render={
          (props) => <ShowSkills {...props} project = {innovationTriggers}/>
        } />
        <Route exact path='/skills/ux/persona-map' render={
          (props) => <ShowSkills {...props} project = {personaMap}/>
        } />
        <Route exact path='/skills/ux/questionnaires' render={
          (props) => <ShowSkills {...props} project = {questionnaires}/>
        } />
        <Route exact path='/skills/ux/scamper' render={
          (props) => <ShowSkills {...props} project = {scamper}/>
        } />
        <Route exact path='/skills/ux/service-blueprints' render={
          (props) => <ShowSkills {...props} project = {blueprints}/>
        } />
        <Route exact path='/skills/ux/service-design-canvas' render={
          (props) => <ShowSkills {...props} project = {designCanvas}/>
        } />
        <Route exact path='/skills/ux/service-safari' render={
          (props) => <ShowSkills {...props} project = {safari}/>
        } />
        <Route exact path='/skills/ux/shadowing' render={
          (props) => <ShowSkills {...props} project = {shadowing}/>
        } />
        <Route exact path='/skills/ux/stakeholders-map' render={
          (props) => <ShowSkills {...props} project = {stakeholders}/>
        } />
        <Route exact path='/skills/ux/user-experience-canvas' render={
          (props) => <ShowSkills {...props} project = {experieneCanvas}/>
        } />
        <Route exact path='/skills/ux/value-proposition-canvas' render={
          (props) => <ShowSkills {...props} project = {valueProposition}/>
        } />
        {/* Show Skills UI */}
        <Route exact path='/skills/ui/interactive-prototype' render={
          (props) => <ShowSkills {...props} project = {interactivePrototype}/>
        } />
        <Route exact path='/skills/ui/mobile-first' render={
          (props) => <ShowSkills {...props} project = {mobileFirst}/>
        } />
        <Route exact path='/skills/ui/site-map' render={
          (props) => <ShowSkills {...props} project = {siteMap}/>
        } />
        <Route exact path='/skills/ui/task-flow' render={
          (props) => <ShowSkills {...props} project = {taskFlow}/>
        } />
        <Route exact path='/skills/ui/wireframing' render={
          (props) => <ShowSkills {...props} project = {wireframing}/>
        } />
        {/* Show Skills Front End */}
        <Route exact path='/skills/front-end/bootstrap4' render={
          (props) => <ShowSkills {...props} project = {bootstrap}/>
        } />
        <Route exact path='/skills/front-end/css3' render={
          (props) => <ShowSkills {...props} project = {css}/>
        } />
        <Route exact path='/skills/front-end/git' render={
          (props) => <ShowSkills {...props} project = {git}/>
        } />
        <Route exact path='/skills/front-end/github' render={
          (props) => <ShowSkills {...props} project = {gitHub}/>
        } />
        <Route exact path='/skills/front-end/html5' render={
          (props) => <ShowSkills {...props} project = {html}/>
        } />
        <Route exact path='/skills/front-end/javascript-es6' render={
          (props) => <ShowSkills {...props} project = {javaScript}/>
        } />
        <Route exact path='/skills/front-end/react-js' render={
          (props) => <ShowSkills {...props} project = {reactJS}/>
        } />
        {/* Show Modeling */}
        <Route exact path='/portfolio/3d-modeling/dalia' render={
          (props) => <ShowModeling {...props} project = {dalia}/>
        } />
        <Route exact path='/portfolio/3d-modeling/motron' render={
          (props) => <ShowModeling {...props} project = {motron}/>
        } />
        <Route exact path='/portfolio/3d-modeling/octo' render={
          (props) => <ShowModeling {...props} project = {octo}/>
        } />
        <Route exact path='/portfolio/3d-modeling/ondular' render={
          (props) => <ShowModeling {...props} project = {ondular}/>
        } />
        <Route exact path='/portfolio/3d-modeling/3d-printer' render={
          (props) => <ShowModeling {...props} project = {printer}/>
        } />
        <Route exact path='/portfolio/3d-modeling/tennis-shoe' render={
          (props) => <ShowModeling {...props} project = {tennis}/>
        } />
        <Route exact path='/portfolio/3d-modeling/vase-collection' render={
          (props) => <ShowModeling {...props} project = {vase}/>
        } />
      </Switch>
      <Footer/>

      {navigate()}
    </div>
    
  );
}

export default App;
