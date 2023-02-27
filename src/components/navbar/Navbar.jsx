import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/sound.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ContactUsModal from "../contactUsModal/ContactUsModal";

const Navbar = () => {
  const [contactModal, setContactModal] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const showContactModal = () => {
    setContactModal(!contactModal);
  };

  return (
    <div className="gpt3__navbar">
      <ContactUsModal
        displayModal={contactModal}
        closeModal={showContactModal}
      />
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>

          <p>
            <Link to="/upload-audio">
              <a>Upload Audio</a>
            </Link>
          </p>
          <p>
            <Link to="/upload-video">
              <a>Denoise Video</a>
            </Link>
          </p>
          <p>
            <Link to="/denoise-by-1d">
              <a>Denoise using 1D</a>
            </Link>
          </p>

          <p>
            <Link to="/about-us">
              <a>About Us</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button" onClick={showContactModal}>
          Contact us
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <Link to="/">Home</Link>
              </p>

              <p>
                <Link to="/upload-audio">
                  <a>Upload Audio</a>
                </Link>
              </p>
              <p>
                <Link to="/upload-video">
                  <a>Denoise Video</a>
                </Link>
              </p>
              <p>
                <Link to="/denoise-by-1d">
                  <a>Denoise using 1D</a>
                </Link>
              </p>

              <p>
                <Link to="/about-us">
                  <a>About Us</a>
                </Link>
              </p>
              <div className="gpt3__navbar-menu_container-links-sign">
                <button type="button">Contact us</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
