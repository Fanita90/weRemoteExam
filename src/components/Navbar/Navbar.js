import React, { useState } from "react";
import "../../styles/navbar.scss";
import menuIcon from "../../assets/menuIcon.png";
import logo from "../../assets/logo.png";
import add from "../../assets/add.png";
import Modal from "../../components/Navbar/Modals/BodyModal";
import { FormModal } from "../../components/Navbar/Modals/FormModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="containerNav">
      <img className="icon-question add" alt="suma" src={menuIcon} />
      <img className="icon-question remove" alt="resta" src={logo} />
      <button
        className="register-transfer btn-sticky"
        onClick={() => setShowModal(!showModal)}
      >
        <img className="icon-question remove" alt="resta" src={add} />
      </button>

      <div>
        <Modal state={showModal} changeState={setShowModal}>
          <FormModal />
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
