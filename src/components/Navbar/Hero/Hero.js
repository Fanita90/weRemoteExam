import React from "react";
import "../../../styles/Hero.scss";
import Slider from "infinite-react-carousel";
import heroM1 from "../../../assets/heroM1.png";
import heroD1 from "../../../assets/heroD1.png";
import heroM2 from "../../../assets/heroM2.png";
import heroD2 from "../../../assets/heroD2.png";
import heroM3 from "../../../assets/heroM3.png";
import heroD3 from "../../../assets/heroD3.png";
import heroM4 from "../../../assets/heroM4.png";
import heroD4 from "../../../assets/heroD4.png";
//import heroM5 from "../../../assets/heroM5.png";
//import heroD5 from "../../../assets/heroD5.png";

const Hero = () => {
  return (
    <div className="slider">
      <Slider className="sliderContent">
        <div className="sliderContentItem">
          <img className="heroMobile" alt="heroMobile" src={heroM1} />
          <img className="heroDesktop" alt="heroDesktop" src={heroD1} />
        </div>
        <div className="sliderContentItem">
          <img className="heroMobile" alt="heroMobile" src={heroM2} />
          <img className="heroDesktop" alt="heroDesktop" src={heroD2} />
        </div>
        <div className="sliderContentItem">
          <img className="heroMobile" alt="heroMobile" src={heroM3} />
          <img className="heroDesktop" alt="heroDesktop" src={heroD3} />
        </div>
        <div className="sliderContentItem">
          <img className="heroMobile" alt="heroMobile" src={heroM4} />
          <img className="heroDesktop" alt="heroDesktop" src={heroD4} />
        </div>
        {/*<div className="sliderContentItem">
          <img className="heroMobile" alt="heroMobile" src={heroM5} />
          <img className="heroDesktop" alt="heroDesktop" src={heroD5} />
        </div>*/}
        
      </Slider>
    </div>
  );
};

export default Hero;
