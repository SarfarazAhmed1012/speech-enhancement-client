import React from "react";
import "../../containers/footer/footer.css";
import logo from "../../assets/sound.png";
import mic from "../../assets/mic.png";
import pause from "../../assets/stop.png";
import { Navbar } from "../../components";
import MicRecorder from "mic-recorder-to-mp3";
import axios from "axios";
import CustomModal from "../modal/Modal";
import denoisedAudio from "../../denoised-audio/denoised.wav";
import recording from "../../denoised-audio/recording.wav";
import specDenoised from "../../recorded-audio-spectograms/spec_denoised.png";
import specNoisy from "../../recorded-audio-spectograms/spec_noisy.png";
import DenoiseModal from "../../components/denoiseModal/DenoiseModal";
import { TailSpin } from "react-loader-spinner";
export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#031B34",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  mt: 20,
};
const Mp3Recorder = new MicRecorder({ bitRate: 128 });
const rawUrl = "http://localhost:8000/denoise-recorded-audio-raw";

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      blob: null,
      isBlocked: false,
      blobURL: "",
    };
  }
  state = {
    loading: false,
    show: false,
    denoiseModal: false,
  };

  startLoading = () => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 50000);
    this.setState({ loading: true });
    this.setState({
      denoiseModal: false,
    });
  };

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  showDenoiseModal = (e) => {
    this.setState({
      denoiseModal: !this.state.denoiseModal,
    });
  };

  start = () => {
    if (this.state.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        this.setState({ blob, blobURL, isRecording: false });
      })
      .catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        this.setState({ isBlocked: true });
      }
    );
  }

  // this function being called on
  Save = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/record";
    const data = new FormData();
    data.append("audio", this.state.blobURL);
    data.append("audio", this.state.blob, "recording.wav");

    axios.post(url, data).then((e) => {
      console.log("success");
    });

    alert("audio uploaded successfully");
  };

  denoised = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/denoise";
    axios.post(url).then((e) => {
      console.log("successfull");
    });
  };

  render() {
    return (
      <>
        <div className="gpt3__footer ">
          <CustomModal
            displayModal={this.state.show}
            closeModal={this.showModal}
            spectogram1={specNoisy}
            spectogram2={specDenoised}
          />
          <DenoiseModal
            displayModal={this.state.denoiseModal}
            closeModal={this.showDenoiseModal}
            denoiseByRawUrl={rawUrl}
            onClick={this.startLoading}
          />
          <Navbar />
          <div className="gpt3__footer">
            <div></div>
            <div className="gpt3__footer-heading">
              <h1>Record your audio and denoise</h1>
            </div>
            {this.state.loading ? (
              <TailSpin
                height="100"
                width="100"
                color="#ff4820"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{ paddingLeft: "0px", paddingTop: "90px" }}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <>
                <div>
                  <div className="gpt3__footer-heading">
                    <div
                      onClick={() => {
                        this.state.isRecording ? this.stop() : this.start();
                      }}
                    >
                      {this.state.isRecording ? (
                        <img src={pause} className="btn btn--shockwave" />
                      ) : (
                        <img
                          src={mic}
                          className="btn btn--shockwave is-active"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="flex-child magenta">
                      <audio
                        src={recording}
                        controls="controls"
                        id="audio-element"
                      />
                    </div>

                    <div className="flex-child green">
                      <audio controls>
                        <source type="audio/mpeg" src={denoisedAudio} />
                        Your browser does not support the audio tag.
                      </audio>
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="flex-child magenta">
                      <form
                        method="post"
                        action="#"
                        id="#"
                        onSubmit={this.Save}
                        className="form-group"
                        name=""
                      >
                        <button
                          className="button-33"
                          style={{ color: "white" }}
                        >
                          Save
                        </button>
                      </form>
                    </div>

                    <div className="flex-child green">
                      <button
                        className="button-33"
                        style={{ color: "white" }}
                        onClick={(e) => {
                          this.showDenoiseModal(e);
                        }}
                      >
                        Denoise
                      </button>

                      <button
                        className="button-34"
                        style={{ color: "white" }}
                        onClick={(e) => {
                          this.showModal(e);
                        }}
                      >
                        Show Spectograms
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="gpt3__footer-links">
              <div className="gpt3__footer-links_logo">
                <img src={logo} alt="logo" />

                <p>Karachi, Pakistan. @2022 NOICE•REDS. All rights reserved.</p>
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
        </div>
      </>
    );
  }
}

export default Record;
