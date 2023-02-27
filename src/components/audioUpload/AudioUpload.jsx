import React from "react";
import { useEffect } from "react";
import "./audioUpload.css";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import CustomModal from "../../containers/modal/Modal";
import UploadedAudios from "../uploadedAudios/UploadedAudios";
import noisySpectogram from "../../spectograms_for_uploaded_audio/spec_noisy.png";
import denoisedSpectogram from "../../spectograms_for_uploaded_audio/spec_denoised.png";
import logo from "../../assets/sound.png";
import DenoiseModal from "../denoiseModal/DenoiseModal";
import { TailSpin } from "react-loader-spinner";
const AudioUpload = () => {
  const [modal, setModal] = useState(false);
  const [audioSource, setAudioSource] = useState(null);
  const [specImgUrl, setSpecImgUrl] = useState(denoisedSpectogram);
  const [loading, setLoading] = useState(false);

  const [showDenoisedModal, setShowDenoisedModal] = useState(false);
  const rawUrl = "http://localhost:8000/denoise-uploaded-audio-raw";

  const showDenoiseModal = () => {
    setShowDenoisedModal(!showDenoisedModal);
  };

  const startLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 50000);
    setLoading(true);
    setShowDenoisedModal(false);
  };

  const handleAudioChange = (event) => {
    const file = event.target.files[0];
    setAudioSource(file);
  };

  //file uplaod in a folder
  const onAudioSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/upload-audio";
    const data = new FormData();
    data.append("file", audioSource);
    data.append("fileName", audioSource.name);

    axios.post(url, data).then((e) => {
      console.log("success");
    });

    alert("Audio Uploaded Successfully");
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

      <div className="audio_upload">
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

        <div className="audio_upload-container section__padding ">
          <div className="audio_upload-container-title">
            <div />
            <h1>Select your audio file:</h1>
          </div>
          <div className="audio_upload-container-text">
            <form
              method="post"
              action="#"
              id="#"
              onSubmit={onAudioSubmit}
              className="form-group"
            >
              <input
                disabled={loading}
                type="file"
                className="form-control"
                id="media-URL"
                accept="audio/wav,audio/mp3,audio/*;capture=microphone"
                onChange={(event) => {
                  handleAudioChange(event);
                }}
              />
              <button
                className="submitbtn"
                style={{
                  color: loading === true ? "#383838" : "white",
                  backgroundColor: loading === true ? "gray" : "",
                  borderColor: loading === true ? "gray" : "",
                  cursor: loading === true ? "default" : "pointer",
                }}
                disabled={loading}
              >
                {" "}
                Submit{" "}
              </button>
            </form>
          </div>
          <div className="audio_upload_buttons_section ">
            <div className="audio_upload_denoise_button">
              <button
                disabled={loading}
                onClick={() => showDenoiseModal()}
                type="submit"
                style={{
                  color: loading === true ? "#383838" : "white",
                  backgroundColor: loading === true ? "gray" : "",
                  borderColor: loading === true ? "gray" : "",
                  cursor: loading === true ? "default" : "pointer",
                }}
              >
                Denoise
              </button>
            </div>

            <div className="audio_upload_denoise_button">
              <button
                disabled={loading}
                style={{
                  border: "2px solid #0c0572",
                  color: loading === true ? "#383838" : "white",
                  backgroundColor: loading === true ? "gray" : "#1a068a",
                  borderColor: loading === true ? "gray" : "#1a068a",
                  cursor: loading === true ? "default" : "pointer",
                }}
                onClick={() => selectModal()}
                id="show-spec-btn"
              >
                Show Spectograms
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
      {loading ? (
        <TailSpin
          height="100"
          width="100"
          color="#ff4820"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{ paddingLeft: "600px", paddingTop: "70px" }}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <UploadedAudios />
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
            <p>Request a Reciter</p>
            <p>Found any problem?</p>
            <p>Want to know more?</p>
          </div>
        </div>

        <div className="gpt3__footer-copyright">
          <p>@2022 NOICE•REDS. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default AudioUpload;
