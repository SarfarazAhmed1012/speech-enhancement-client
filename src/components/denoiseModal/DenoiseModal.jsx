import React from "react";
import { useState } from "react";
import axios from "axios";
import "./denoiseModal.css";

const DenoiseModal = (props) => {
  const denoiseAudioRaw = (e) => {
    e.preventDefault();
    const url = props.denoiseByRawUrl;
    axios.post(url).then((e) => {
      console.log("successfull");
    });
  };

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };

  return (
    <>
      <div className="denoise_modal" onClick={closeModal} style={divStyle}>
        <div
          className="denoise_modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="denoise_modal_close" onClick={closeModal}>
            &times;
          </span>

          <div className="denoise_modal_row">
            <div className="denoise_modal_col-50">
              <p className="text_modal" style={{ color: "white" }}>
                The audio is converted into time series vector and is processed
                as model input. Model predicts the noise profile in time series
                domain than further this noise is removed from the audio.
                producing denoised output.
              </p>

              <div onClick={denoiseAudioRaw}>
                <button
                  type="submit"
                  onClick={props.onClick}
                  sx={{
                    color: "white",
                    backgroundColor: "#042c54",
                    height: 30,
                    marginTop: 2,
                    marginLeft: 5,
                  }}
                >
                  Denoise using Raw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DenoiseModal;
