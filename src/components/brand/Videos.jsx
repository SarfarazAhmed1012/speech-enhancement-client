import React from "react";
import "./videos.css";
import inputVideo from "../../denoised-video/input_video.mp4";
import denoisedVideo from "../../denoised-video/denoised.mp4";

const Videos = () => {
  return (
    <div className="gpt3__brand">
      <div className="video_cont" style={{ paddingTop: "30px" }}>
        <h4 className="video_text">Original</h4>
        <video
          className="video"
          controls
          width={450}
          height={300}
          src={inputVideo}
        ></video>
      </div>
      <div className="video_cont">
        <h4 className="video_text">Denoised</h4>
        <video
          className="video"
          controls
          width={450}
          height={300}
          src={denoisedVideo}
        ></video>
      </div>
    </div>
  );
};

export default Videos;
