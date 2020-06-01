import React, { useState } from "react";
import "./Modal.scss";
import Carousel from "react-bootstrap/Carousel";

const Modal = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let vStyle = "w-100";
  if (props.device === "pda") vStyle = "vertical-img";

  return (
    <div className="popup" id={props.href}>
      <div className="popup__container">
        <div className="popup__title">
          <h2 className="heading-secondary u-mb-sm">{props.title}</h2>
        </div>
        <div className="popup__content">
          <div className="popup__left-content">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
            >
              {props.source.map((item) => {

                if (item.type === "video") {
                  return (
                    <Carousel.Item>
                      <video className="popup__video" autoPlay muted loop playsInline controls={true}>
                        <source src={item.path} type="video/mp4" />
                        Sorry, your browser is not supported.
                      </video>
                    </Carousel.Item>
                  );
                } else {
                  return (
                    <Carousel.Item>
                      <img
                        className={`d-block ${vStyle} carousel__img`}
                        src={item.path}
                        alt={item.alt}
                      />
                    </Carousel.Item>
                  );
                }
              })}
            </Carousel>
          </div>

          <div className="popup__right-content">
            <div className="popup__desc">
              <ul className="popup__desc-list">
                {props.desc.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div className="popup__tech">
              <ul className="popup__tag-list">
                {props.tags.map((item) => {
                  return <li className={`popup__tag ${item.type}`}>{item.text}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <a href="#section-about" className="popup__close">
          &times;
        </a>
      </div>
    </div>
  );
};

export default Modal;
