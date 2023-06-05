import React from "react";
import "./about.css";
import {FaGithub} from 'react-icons/fa'
import me from "../images/pic1.jpg";
 function About(){

    return(
<div className="aboutDivStart" >
  <section id="about">
    <center>
  <h5>Get to know</h5> 
    <h2>About me</h2>
 </center>

    <div className="mainDivAbout">
<div className="leftSide">
    <div className="leftMainDiv">
           <div className="imageDiv">
    <img src={me} alt="" />
           </div>
    </div></div>

<div className="rightSide">
    <div className="up">
        <div className="experience one"><br />
           <span><FaGithub/></span><br />
   <h3>Experience</h3>
   <h4>Recently Engaged</h4>
        </div>
        <div className="clients one"><br />
      <span><FaGithub/></span><br />
   <h3>Clients</h3><br />
   <h5>13 </h5>
        </div>
        <div className="project one"><br />
        <span><FaGithub/></span><br />
   <h3>Projects</h3>
   <h4>Just started</h4>
        </div>
    </div>
  <div className="plainText"><h4>
  I am called Gatchuinne Momo Murielle, a university student studying computer engineering at the Faculty of Engineering and Technology.
  Aspiring to specialise in the field of network engineering.I am a holder of GCE A level.
  After my studies I am planning to get a good paid job to become an independent and responsible lady.
     </h4>
  </div>
</div>
</div>
<button id="btnTalk">let's Discuss</button>
</section>
</div>
    );
}

export default About;