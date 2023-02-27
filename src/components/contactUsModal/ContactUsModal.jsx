import React from "react";
import "./contactUsModal.css";
import { RiCloseCircleLine } from "react-icons/ri";
import logo from "../../assets/sound.png";

const ContactUsModal = (props) => {
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };

  return (
    <>
      <div className="contact-modal" style={divStyle}>
        {/* <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closeModal}>
            &times;
          </span> */}

        <div className="background">
          <div className="container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <img src={logo} />
                </div>
                <div className="screen-header-right">
                  <div className="">
                    <RiCloseCircleLine
                      className="screen-header-close"
                      onClick={closeModal}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>CONTACT</span>
                    <span>US</span>
                  </div>
                  <div className="app-contact">
                    CONTACT INFO : sarfarazahmed1012@gmail.com
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="NAME" />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="EMAIL" />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="CONTACT NO"
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        className="app-form-control"
                        placeholder="MESSAGE"
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button" onClick={closeModal}>
                        CANCEL
                      </button>
                      <button className="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ContactUsModal;
