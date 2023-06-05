import React from "react";
import Projects from "./project";
import project1Image from "../images/pic2.jpg";
import project2Image  from "../images/pic3.jpg";
import project3Image from "../images/pic1.jpg";
import "./portfolio.css";
 function Portfolio(){

    return(
<div className="portfolioMainDiv">
    <section id="projects">
    <h6>My recent works</h6>
    <h3>Portfolio</h3>
    <div className="CenterDiv">
    <div className="threeInOne">
    <Projects  num={1} url={project1Image} name={'murielle'}/> 
<Projects  num={2}  url={project2Image}  name={'cynthia'}/>
<Projects   num={3}  url={project3Image} name={'momo'} />
</div>

</div>

</section>

</div>
    );
}

export default Portfolio;