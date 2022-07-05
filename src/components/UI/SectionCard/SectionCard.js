import React, { useState } from "react";
import "./SectionCard.css";
import Title from "../Typography/Title/Title";
import { Button as PrimaryBtn } from "react-bootstrap";
import PropTypes from "prop-types";

const SectionCard = (props) => {
  const sectionClassName = [
    "SectionCard",
    props.isReversed ? "reversed" : null,
  ];

  return (
    <section className={sectionClassName.join(" ")}>
      <div className="container">
        <div className="row">
          <div className="col-11 col-sm-8 col-md-12 col-lg-10 col-xl-11 mx-auto">
            <div className="wrapper">
              <div className="content">
                <div className="head">
                  <div className={`wrap-img ${props.imgSize}`}>
                    <img src={props.img} alt="SectionCardImg" />
                  </div>
                </div>

                <div className="body">
                  <div className="title-box">
                    <Title color="red">{props.title}</Title>
                  </div>
                  <div className="text-box">{props.children}</div>
                  {props.list ? (
                    <div className="steps-list">
                      <ol>
                        {props.list.map((value) => (
                          <li>{value}</li>
                        ))}
                      </ol>
                    </div>
                  ) : null}
                  {props.btnText && (
                    <div className="btn-wrap mt-3">
                      <PrimaryBtn variant="warning">{props.btnText}</PrimaryBtn>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SectionCard.propTypes = {
  isReversed: PropTypes.bool.isRequired,
  img: PropTypes.any.isRequired,
  imgSize: PropTypes.oneOf(["md", "lg"]).isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
  btnText: PropTypes.string,
};

export default SectionCard;
