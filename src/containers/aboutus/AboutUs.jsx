import React from "react";
import { Navbar } from "../../components";
import logo from "../../assets/sound.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <>
      <div className="responsive-container-block outer-container">
        <Navbar />
        <div className="responsive-container-block inner-container">
          <p className="text-blk section-head-text">Meet Our Team Members</p>
          <p className="text-blk section-subhead-text">
            Meet the team of Designers, Creators and Problem Solvers. 
          </p>
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
              <div className="team-card">
                <div className="img-wrapper">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQEMbZtB1b8byA/profile-displayphoto-shrink_800_800/0/1668163020483?e=1677715200&v=beta&t=XC-Ac2pTycmQgJCgrKb_jFuxLXnC-HbWS0L58XeNdus"
                    className="team-img"
                  />
                </div>
                <p className="text-blk name">Muhammad Danish</p>
                <p className="text-blk position">Team Lead</p>
                <div className="social-media-links">
                  <a href="http://www.facenook.com/" target="_blank">
                    <FacebookRoundedIcon />
                  </a>
                  <a href="http://www.twitter.com/" target="_blank">
                    <TwitterIcon />
                  </a>
                  <a href="http://www.linkedin.com/" target="_blank">
                    <LinkedInIcon />
                  </a>
                  <a href="http://www.gmail.com/" target="_blank">
                    <GoogleIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
              <div className="team-card">
                <div className="img-wrapper">
                  <img
                    src="https://media.licdn.com/dms/image/C4D03AQHAKDkQx2xG3Q/profile-displayphoto-shrink_800_800/0/1654546000595?e=1677715200&v=beta&t=RgI5rp9jCTpVpNftwJCHOR_Jh-A45_apetFONkivFl4"
                    className="team-img"
                  />
                </div>
                <p className="text-blk name">Huda Rauf</p>
                <p className="text-blk position">Team Member</p>
                <div className="social-media-links">
                  <a href="http://www.facenook.com/" target="_blank">
                    <FacebookRoundedIcon />
                  </a>
                  <a href="http://www.twitter.com/" target="_blank">
                    <TwitterIcon />
                  </a>
                  <a href="http://www.linkedin.com/" target="_blank">
                    <LinkedInIcon />
                  </a>
                  <a href="http://www.gmail.com/" target="_blank">
                    <GoogleIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
              <div className="team-card">
                <div className="img-wrapper">
                  <img
                    src="https://avatars.githubusercontent.com/u/69521378?v=4"
                    className="team-img"
                  />
                </div>
                <p className="text-blk name">Sarfaraz Ahmed</p>
                <p className="text-blk position">Team Member</p>
                <div className="social-media-links">
                  <a href="http://www.facenook.com/" target="_blank">
                    <FacebookRoundedIcon />
                  </a>
                  <a href="http://www.twitter.com/" target="_blank">
                    <TwitterIcon />
                  </a>
                  <a href="http://www.linkedin.com/" target="_blank">
                    <LinkedInIcon />
                  </a>
                  <a href="http://www.gmail.com/" target="_blank">
                    <GoogleIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gpt3__footer_about-links">
          <div className="gpt3__footer_about-links_logo">
            <img src={logo} alt="logo" />
            <p>Karachi, Pakistan. @2022 QuranRecite. All rights reserved.</p>
          </div>
          <div className="gpt3__footer_about-links_div">
            <h4>Links</h4>
            <p>Oversons</p>
            <p>Facebook</p>
            <p>Linkedin</p>
            <p>Instagram</p>
          </div>
          <div className="gpt3__footer_about-links_div">
            <h4>About us</h4>
            <p>What are we?</p>
            <p>Join us</p>
            <p>Find us</p>
            <p>Book your session</p>
          </div>
          <div className="gpt3__footer_about-links_div">
            <h4>NOICE•REDS</h4>
            <p>Request a Demo</p>
            <p>Found any problem?</p>
            <p>Want to know more?</p>
          </div>
        </div>
        <div className="gpt3__footer_about-copyright">
          <p>@2022 NOICE•REDS. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
