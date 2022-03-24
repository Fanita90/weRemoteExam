import React from "react";
import "../../../styles/formModal.scss";

export const FormModal = () => {
  return (
    <>
      <div>
        <form className="containerForm">
          <div className="row">
            <label className="label-form">Nombre:</label>
            <input
              className="input-form"
              type="text"
              placeholder="Ingresa tu nombre"
            />

            <br />

            <label className="label-form">Correo electrónico:</label>
            <input
              className="input-form"
              type="email"
              placeholder="alguien@correo.com"
            />

            <br />
            <label className="container">
              <input type="checkbox" checked="checked" />
              <div className="checkmark"></div>
              Acepto recibir notificaciones de nuevo contenido
            </label>

            <br />
            <button> Suscribirme</button>
          </div>
        </form>
      </div>
    </>
  );
};
