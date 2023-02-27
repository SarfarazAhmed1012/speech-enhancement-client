import React from "react";
import "./modal.css";
import { useState } from "react";
import ImageModal from "../imageModal/ImageModal";

const CustomModal = (props) => {
  const [imageModal, setImageModal] = useState(false);
  const [selectedImgSrc, setSelectedImgSrc] = useState("");
  const [imageText, setImageText] = useState("");

  const selectimageModal = (src, text) => {
    setImageModal(!imageModal);
    setSelectedImgSrc(src);
    setImageText(text);
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
      <div className="modal" onClick={closeModal} style={divStyle}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>

          {/* <div className="modal-flex">Hello How are you?</div> */}
          {/* <div className="modal_images">
          <div className="row_modal_images">
            <div className="column_modal_images">
              <img src="https://www.w3schools.com/w3images/paris.jpg" />
              <img src="https://www.w3schools.com/w3images/paris.jpg" />
            </div>
          </div>
        </div> */}
          <div className="row">
            <div className="col-50">
              <div className="rel">
                <img
                  className="img1"
                  src={props.spectogram1}
                  onClick={() =>
                    selectimageModal(props.spectogram1, "Noisy Spectogram")
                  }
                />
              </div>
              <p className="spec_text">Noisy Spectogram</p>
            </div>

            <div className="col-50">
              <div className="rel">
                <img
                  className="img2"
                  src={props.spectogram2}
                  onClick={() =>
                    selectimageModal(props.spectogram2, "Denoised Spectogram")
                  }
                />
              </div>
              <p className="spec_text">Denoised Spectogram</p>
            </div>
          </div>
        </div>
      </div>
      <ImageModal
        displayModal={imageModal}
        closeModal={selectimageModal}
        imgSrc={selectedImgSrc}
        text={imageText}
      />
      {/* <Modal
        title="Basic Modal"
        // className="my-custom-class"
        visible={visible}
        okText="close"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        cancelButtonProps={{ disabled: true }}
        style={{ marginTop: 50, height: 100 }}
      >
        <img src={selectedImgSrc} />
      </Modal> */}
    </>
  );
};

export default CustomModal;
