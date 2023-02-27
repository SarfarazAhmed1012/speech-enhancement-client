import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../components";
import "./denoiseBy1D.css";
import { names } from "../../assets/speakersNames";
import { Button, Snackbar } from "@material-ui/core";
import logo from "../../assets/sound.png";

import {
  denoisedDkitchen,
  denoisedOmeeting,
  denoisedPresto,
  inputDkitchen,
  inputOmeeting,
  inputPresto,
  referenceAudio,
  compareOmeetingWaveplot,
  referenceSpec,
  inputSpecDkitchen,
  inputSpecOmeeting,
  inputSpecPresto,
  outputSpecDkitchen,
  outputSpecPresto,
  outputSpecOmeeting,
  inputWaveplotDkitchen,
  inputWaveplotOmeeting,
  inputWaveplotPresto,
  refernceWaveplot,
  outputWaveplotDkitchen,
  outputWaveplotOmeeting,
  outputWaveplotPresto,
  compareDkitchenWaveplot,
  comparePrestoWaveplot,
  spectralGatingDkitchenInput,
  spectralGatingOmeetingInput,
  spectralGatingPrestoInput,
} from "../../denoising1D";
import { TailSpin } from "react-loader-spinner";

const DenoiseBy1D = () => {
  const [selectedName, setSelectedName] = useState("");
  const [specImgUrl, setSpecImgUrl] = useState(compareOmeetingWaveplot);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/speaker-in-txt", { selectedName })
      .then((response) => {
        console.log(response.data);
        window.alert("speaker selected!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const denoiseAudio1D = (e) => {
    e.preventDefault();
    setLoading(true);
    const url = "http://localhost:8000/denoise-1d";
    axios.post(url).then((e) => {
      console.log("successfull");
    });
  };
  useEffect(() => {
    // Monitor the image file for changes
    const interval = setInterval(() => {
      if (compareOmeetingWaveplot !== specImgUrl) {
        // Update the imageUrl state variable to trigger a re-render
        setSpecImgUrl(compareOmeetingWaveplot);
        setLoading(false);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [specImgUrl]);
  return (
    <>
      <Navbar />
      {/* <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="API request successful!"
      /> */}
      <div className="denoise_1D section__padding">
        <div className="denoise_1D-content">
          <h1 className="gradient__text">
            Speech Enhancement using Deep Learning UNET AE and Gated CNN
          </h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <label className="custom-select">
                {!selectedName
                  ? "Select speaker"
                  : `Selected Speaker: ${selectedName}`}
                <select
                  value={selectedName}
                  onChange={handleNameChange}
                  className="sample"
                >
                  <option value="">-- Select --</option>
                  {names.map((name, index) => (
                    <option key={index} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" disabled={!selectedName}>
                Select
              </button>
            </form>
          </div>
          <div className="denoise-1d-button">
            <button
              onClick={denoiseAudio1D}
              disabled={!selectedName}
              style={{
                backgroundColor: !selectedName ? "gray" : "",
                cursor: !selectedName ? "pointer" : "",
                border: !selectedName ? "2px solid gray" : "",
                cursor: !selectedName ? "context-menu" : "",
              }}
            >
              Denoise
            </button>
          </div>
          {loading ? (
            <TailSpin
              height="100"
              width="100"
              color="#ff4820"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{ paddingLeft: "450px", paddingTop: "100px" }}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <>
              <div className="audio-heading-main">
                <h1 className="gradient__text">Input Audios</h1>
              </div>
              <div className="audio-container-new">
                <div className="audio-group-new">
                  <h5>Input Dkitchen</h5>
                  <audio controls>
                    <source src={inputDkitchen} type="audio/mpeg" />
                  </audio>
                </div>
                <div className="audio-group-new">
                  <h5>Input Omeeting</h5>
                  <audio controls>
                    <source src={inputOmeeting} type="audio/mpeg" />
                  </audio>
                </div>
                <div className="audio-group-new">
                  <h5>Input Presto</h5>
                  <audio controls>
                    <source src={inputPresto} type="audio/mpeg" />
                  </audio>
                </div>
                <div className="audio-group-new">
                  <h5 id="reference-heading">Reference</h5>
                  <audio controls>
                    <source src={referenceAudio} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
              <div className="audio-heading-main">
                <h1 className="gradient__text">Denoised Audios</h1>
              </div>
              <div className="audio-container-new">
                <div className="audio-group-denoised">
                  <h5>Denoised Dkitchen</h5>
                  <audio controls>
                    <source src={denoisedDkitchen} type="audio/mpeg" />
                  </audio>
                </div>
                <div className="audio-group-denoised">
                  <h5>Denoised Omeeting</h5>
                  <audio controls>
                    <source src={denoisedOmeeting} type="audio/mpeg" />
                  </audio>
                </div>
                <div className="audio-group-denoised">
                  <h5>Denoised Presto</h5>
                  <audio controls>
                    <source src={denoisedPresto} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
              <div className="audio-heading-main">
                <h1 className="gradient__text">Input Spectral Gating</h1>
              </div>
              <div className="audio-container-new">
                <div className="audio-group-denoised">
                  <h5>Spectral Gating Dkitchen Input</h5>
                  <audio controls>
                    <source
                      src={spectralGatingDkitchenInput}
                      type="audio/mpeg"
                    />
                  </audio>
                </div>
                <div className="audio-group-denoised">
                  <h5>Spectral Gating Omeeting Input</h5>
                  <audio controls>
                    <source
                      src={spectralGatingOmeetingInput}
                      type="audio/mpeg"
                    />
                  </audio>
                </div>
                <div className="audio-group-denoised">
                  <h5>Spectral Gating Presto Input</h5>
                  <audio controls>
                    <source src={spectralGatingPrestoInput} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
              <div class="line"></div>
              <div className="audio-heading-main">
                <h1 className="gradient__text">Input Spectograms</h1>
              </div>
              <div class="image-container">
                <div class="item-image">
                  <h5>Dkitchen Spectogram</h5>
                  <img src={inputSpecDkitchen} alt="Image 1" />
                </div>

                <div class="item-image">
                  <h5>Omeeting Spectogram</h5>
                  <img src={inputSpecOmeeting} alt="Image 2" />
                </div>

                <div class="item-image">
                  <h5>Presto Spectogram</h5>
                  <img src={inputSpecPresto} alt="Image 3" />
                </div>

                <div class="item-image">
                  <h5 id="reference-heading">Reference Spectogram</h5>
                  <img src={referenceSpec} alt="Image 4" />
                </div>
              </div>
              <div class="line"></div>
              <div className="audio-heading-main">
                <h1 className="gradient__text">Output Spectograms</h1>
              </div>
              <div class="image-container">
                <div class="item-image">
                  <h5>Dkitchen Denoised</h5>
                  <img src={outputSpecDkitchen} alt="Image 1" />
                </div>

                <div class="item-image">
                  <h5>Omeeting Denoised</h5>
                  <img src={outputSpecOmeeting} alt="Image 2" />
                </div>

                <div class="item-image">
                  <h5>Presto Denoised</h5>
                  <img src={outputSpecPresto} alt="Image 3" />
                </div>
              </div>
              <div class="line"></div>
              <div className="audio-heading-main">
                <h1 className="gradient__text">Waveplots</h1>
              </div>
              <div class="image-container">
                <div class="item-image">
                  <h5>Input waveplot Dkitchen</h5>
                  <img src={inputWaveplotDkitchen} alt="Image 1" />
                </div>

                <div class="item-image">
                  <h5>Input waveplot Omeeting</h5>
                  <img src={inputWaveplotOmeeting} alt="Image 2" />
                </div>

                <div class="item-image">
                  <h5>Input waveplot Presto</h5>
                  <img src={inputWaveplotPresto} alt="Image 3" />
                </div>

                <div class="item-image">
                  <h5 id="reference-heading">Reference waveplot </h5>
                  <img src={refernceWaveplot} alt="Image 3" />
                </div>
              </div>
              <div class="line"></div>
              <div className="audio-heading-main">
                <h1 className="gradient__text">Denoised Waveplots</h1>
              </div>
              <div class="image-container">
                <div class="item-image">
                  <h5>Denoised waveplot Dkitchen</h5>
                  <img src={outputWaveplotDkitchen} alt="Image 1" />
                </div>

                <div class="item-image">
                  <h5>Denoised waveplot Omeeting</h5>
                  <img src={outputWaveplotOmeeting} alt="Image 2" />
                </div>

                <div class="item-image">
                  <h5>Denoised waveplot Presto</h5>
                  <img src={outputWaveplotPresto} alt="Image 3" />
                </div>
              </div>
              <div class="line"></div>
              <div className="audio-heading-main">
                <h1 className="gradient__text">Comparing Waveplots</h1>
              </div>
              <div class="image-container">
                <div class="item-image">
                  <h5>Comparison of Dkitchen Waveplot</h5>
                  <img src={compareDkitchenWaveplot} alt="Image 1" />
                </div>

                <div class="item-image">
                  <h5>Comparison of Omeeting Waveplot </h5>
                  <img src={compareOmeetingWaveplot} alt="Image 2" />
                </div>

                <div class="item-image">
                  <h5>Comparison of Presto Waveplot </h5>
                  <img src={comparePrestoWaveplot} alt="Image 3" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
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

export default DenoiseBy1D;
