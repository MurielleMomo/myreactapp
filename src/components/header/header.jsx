import React from "react";
import "./header.css";
import "./CTA";
import CTA from "./CTA"; //here we import the CTA component inside our header
import me from "../images/mumu.png";
import HeaderSocial from "./HeaderSocial"; //import of headerSocial component
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>HI I'm</h5>
        <h1>GATCHUINNE MOMO </h1>
        <h5 className="text-light"> Aspiring Network Engineer </h5>
        <CTA />
        <HeaderSocial />
        <div className="my_image">
          <img src={me} alt="junior" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};
export default Header;
