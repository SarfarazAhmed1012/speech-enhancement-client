import React from "react";
import "./imageModal.css";
import { useState } from "react";
import Modal from "antd/es/modal/Modal";

const ImageModal = (props) => {
  const [visible, setVisible] = useState(false);
  const [selectedImgSrc, setSelectedImgSrc] = useState("");

  const imgClick = (imgSrc) => {
    setSelectedImgSrc(imgSrc);
    setVisible(true);
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
      <div className="modal_image" onClick={closeModal} style={divStyle}>
        <div
          className="modal-content_modal_image"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="close_image_modal" onClick={closeModal}>
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
          <div className="row_modal_image">
            <div className="col-50_modal_image">
              <div className="rel_modal_image">
                <img
                  id="modal_image_id"
                  className="img_modal_image"
                  src={props.imgSrc}
                />
                <p>{props.text}</p>
              </div>
            </div>

            {/* <div className="col-50">
              <div className="rel">
                <img
                  className="img2"
                  src="https://www.w3schools.com/howto/img_snow.jpg"
                  onClick={() => {
                    imgClick("https://www.w3schools.com/howto/img_snow.jpg");
                  }}
                />
              </div>
              <p>Denoised Spectogram</p>
            </div> */}
          </div>
        </div>
      </div>
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

export default ImageModal;
