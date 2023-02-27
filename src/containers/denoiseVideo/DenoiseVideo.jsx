import React from "react";
import { useEffect } from "react";
import { Videos, VideoUpload, Navbar } from "../../components";
import "./denoiseVideo.css";
import "../../containers/footer/footer.css";
import logo from "../../assets/sound.png";
import { useState } from "react";
import CustomModal from "../modal/Modal";
import axios from "axios";
import denoisedSpectogram from "../../spectograms/spec_denoised.png";
import noisySpectogram from "../../spectograms/spec_noisy.png";
import DenoiseModal from "../../components/denoiseModal/DenoiseModal";
import { TailSpin } from "react-loader-spinner";
const DenoiseVideo = () => {
  const [modal, setModal] = useState(false);
  const [showDenoisedModal, setShowDenoisedModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [specImgUrl, setSpecImgUrl] = useState(denoisedSpectogram);
  const rawUrl = "http://localhost:8000/denoise-video-by-raw";

  const showDenoiseModal = () => {
    setShowDenoisedModal(!showDenoisedModal);
  };

  const startLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 60000);
    setLoading(true);
    setShowDenoisedModal(false);
  };

  const selectModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    // Monitor the image file for changes
    const interval = setInterval(() => {
      if (denoisedSpectogram !== specImgUrl) {
        // Update the imageUrl state variable to trigger a re-render
        setSpecImgUrl(denoisedSpectogram);
        setLoading(false);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [specImgUrl]);
  return (
    <>
      <Navbar />

      <section id="#features">
        <CustomModal
          displayModal={modal}
          closeModal={selectModal}
          spectogram1={noisySpectogram}
          spectogram2={denoisedSpectogram}
        />
        <DenoiseModal
          displayModal={showDenoisedModal}
          closeModal={showDenoiseModal}
          denoiseByRawUrl={rawUrl}
          onClick={startLoading}
        />

        <div className="gpt3__features section__padding_features">
          <div className="gpt3__features-heading">
            <h1 className="gradient__text">
              Let's Remove Noise From Your Videos
            </h1>
            <p>
              Annoying background noise in your video? Have no worries! Make
              videos noise-free with a single click.
            </p>
            <div>
              <button
                disabled={loading}
                className="spectogram-button"
                style={{
                  border: "2px solid #0c0572",
                  color: loading === true ? "#383838" : "white",
                  backgroundColor: loading === true ? "gray" : "#1a068a",
                  borderColor: loading === true ? "gray" : "#1a068a",
                  cursor: loading === true ? "default" : "pointer",
                }}
                onClick={() => selectModal()}
              >
                Check Spectograms
              </button>

              <button
                onClick={() => showDenoiseModal()}
                style={{
                  color: loading === true ? "#383838" : "white",
                  backgroundColor: loading === true ? "gray" : "",
                  borderColor: loading === true ? "gray" : "",
                  cursor: loading === true ? "default" : "pointer",
                }}
                className="denoise-button"
                disabled={loading}
              >
                Denoise
              </button>
            </div>
          </div>

          <div className="gpt3__features-container">
            <VideoUpload disabled={loading} />
          </div>
        </div>
      </section>
      {loading ? (
        <TailSpin
          height="100"
          width="100"
          color="#ff4820"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{ paddingLeft: "600px", paddingTop: "150px" }}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <Videos />
        </>
      )}

      <div
        className="gpt3__footer-upload_section"
        style={{ padding: 100, height: 0 }}
      >
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={logo} alt="logo" />
            <p>Karachi, Pakistan. @2022 QuranRecite. All rights reserved.</p>
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
          <p>@2023 NOICE•REDS. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default DenoiseVideo;
