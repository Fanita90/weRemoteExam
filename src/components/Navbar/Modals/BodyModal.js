import React , { useState } from "react";
import "../../../styles/bodyModal.scss";
import close from "../../../assets/close.png";

const Modal = ({ children, state, changeState }) => {
    const [showModal, setShowModal] = useState(false);
  return (
    <>
      {state && (
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-title">
              <h1>Suscríbete</h1>
            </div>
            <button
              className="close-btn btn-sticky"
              onClick={() => setShowModal(!showModal)}
              onClick={() => changeState(false)}
            >
              {" "}
              <img className="close-btn" src={close} />{" "}
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
