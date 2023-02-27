import React from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { style } from "./Record";
import CustomModal from "../modal/Modal";

export function NestedModal() {
  const denoiseWithUAudioSpectogram = () => {
    // e.preventDefault();
    const url = "http://localhost:8000/denoise-upload-audio-spectogram";
    axios.post(url).then((e) => {
      console.log("successfull");
    });
  };
  const denoiseWithUAudioRaw = () => {
    // e.preventDefault();
    const url = "http://localhost:8000/denoise-upload-audio-raw";
    axios.post(url).then((e) => {
      console.log("successfull");
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{
          color: "white",
          backgroundColor: "#FF4820",
          borderRadius: 100,
          height: 20,
        }}
        onClick={handleOpen}
      >
        Denoise
      </Button>
      <CustomModal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 330 }}>
          {/* <h2 id="parent-modal-title">Text in a modal</h2> */}
          {/* <p id="parent-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p> */}
          <form
            action="http://localhost:3000/record-audio"
            method="POST"
            onSubmit={denoiseWithUAudioSpectogram}
          >
            <button
              type="submit"
              sx={{
                color: "white",
                backgroundColor: "#042c54",
                height: 30,
              }}
            >
              Denoise using Spectogr
            </button>
          </form>
          <form
            // action="/denoise-upload-audio-raw"
            method="POST"
            onSubmit={denoiseWithUAudioRaw}
          >
            <Button
              type="submit"
              sx={{
                color: "white",
                backgroundColor: "#042c54",
                height: 30,
                marginTop: 2,
                marginLeft: 5,
              }}
            >
              Denoise using Raw
            </Button>
          </form>
        </Box>
      </CustomModal>
    </div>
  );
}
