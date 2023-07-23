import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>vibhavsingh0532@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/_vkyadav_?igshid=MzNlNGNkZWQ4Mg=="><Insta color="white" size={"3rem"} /></a>
          <a href="https://twitter.com/vibhavyadav_?t=7LLHP4gY-1bGmautH4fkSQ&s=09"><Twitter color="white" size={"3rem"} /></a>
          <a href="https://github.com/vibhav804"><Github color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
