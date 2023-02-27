import React from "react";
import "./videoupload.css";
import axios from "axios";
import { useState } from "react";

function VideoUpload(props) {
  const [videoSrc, setVideoSrc] = useState(null);
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    const file = event.target.files[0];
    setVideoSrc(file);
  };

  //file uplaod in a folder
  const onSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/upload-video";
    const data = new FormData();
    data.append("file", videoSrc);
    data.append("fileName", videoSrc.name);

    axios.post(url, data).then((e) => {
      console.log("success");
    });

    alert("video uploaded successfully");
  };

  return (
    <>
      <div>
        <div className="gpt3__features-container__feature">
          <div className="gpt3__features-container__feature-title">
            <div />
            <h1>Select your video file:</h1>
          </div>
          <div className="gpt3__features-container__feature-text">
            <form
              method="post"
              action="#"
              id="#"
              onSubmit={onSubmit}
              className="form-group"
            >
              <input
                disabled={props.disabled}
                type="file"
                className="form-control"
                id="media-URL"
                accept="video/mp4,video/x-m4v,video/*,.mkv"
                onChange={(event) => {
                  handleChange(event);
                }}
              />
              <button
                disabled={props.disabled}
                className="submitbtn"
                onClick={() => setShow(true)}
              >
                {" "}
                Submit{" "}
              </button>
            </form>
          </div>

          <br />
        </div>
      </div>
    </>
  );
}

export default VideoUpload;
