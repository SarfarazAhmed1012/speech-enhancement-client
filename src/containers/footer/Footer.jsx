import React from "react";
import "./footer.css";
import logo from "../../assets/sound.png";
import mic from "../../assets/mic.png";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Integrate our live denoising software
          <br /> into your live meetings.
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>
            Karachi, Pakistan. @2022 NOICE•REDS. <br />
            All rights reserved.
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Oversons</p>
          <p>Facebook</p>
          <p>Linkedin</p>
          <p>Instagram</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>About us</h4>
          <p>What are we?</p>
          <p>Join us</p>
          <p>Find us</p>
          <p>Book your session</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>NOICE•REDS</h4>
          <p>Request a Demo</p>
          <p>Found any problem?</p>
          <p>Want to know more?</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2022 NOICE•REDS. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
