import React from "react";
import "../../../styles/question.scss";
import arrow from "../../../assets/arrow.png";
import arrowB from "../../../assets/arrowB.png";
const Questions = () => {
  return (
    <section>
      <div className="acordion">
        <div className="container-question">
          <div className="acordion-item" id="question1">
            <a className="acordion-link" href="#question1">
              ¿Cuáles son los pasos para tomar una desición?
              <img className="icon-question add" alt="suma" src={arrow} />
              <img className="icon-question remove" alt="resta" src={arrowB} />
            </a>
            <div className="answer">
              <p>
                Small text, cómo mejorar el clima, el capital humano, la
                comunicación o las negociaciones en una empresa?
              </p>
            </div>
          </div>
          <div className="acordion-item" id="question2">
            <a className="acordion-link" href="#question2">
              ¿Cuáles son los pasos para tomar una desición?
              <img className="icon-question add" alt="suma" src={arrow} />
              <img className="icon-question remove" alt="resta" src={arrowB} />
            </a>
            <div className="answer">
              <p>
                Small text, cómo mejorar el clima, el capital humano, la
                comunicación o las negociaciones en una empresa?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
