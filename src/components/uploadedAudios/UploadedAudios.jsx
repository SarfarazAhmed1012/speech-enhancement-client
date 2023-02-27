import React from "react";
import "./uploadedaudios.css";
import { useEffect } from "react";
import InputAudio from "../../denoised_uploaded_audio/inputUploadAudio.wav";
import DenoisedAudio from "../../denoised_uploaded_audio/denoisedUploaded.wav";

const UploadedAudios = () => {
  // let denoisedAud;
  // useEffect(() => {
  //   denoisedAud = DenoisedAudio;
  // }, []);
  return (
    <div className="gpt3__brand">
      <div className="video_cont">
        <h4 className="video_text">Original</h4>
        <audio src={InputAudio} controls="controls" id="audio-element" />
      </div>
      <div className="video_cont">
        <h4 className="video_text">Denoised</h4>
        <audio
          style={{ marginLeft: "25px" }}
          src={DenoisedAudio}
          controls="controls"
          id="audio-element"
          //   autostart="0"
          //   autostart="false"
          //   preload="none"
        />
      </div>
    </div>
  );
};

export default UploadedAudios;
