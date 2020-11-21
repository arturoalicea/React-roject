import React, { Component } from "react";
import { Linkedin, Phone, Email, Address } from "../../assets/index";

class Contact extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="text-left">
          <img src={Address} alt="Address Icon" className="icon m-2"></img>
          150 Union Avenue Brooklyn, N.Y. 11206
        </div>
        <div className="text-left">
          <img src={Email} alt="Email Icon" className="icon m-2"></img>
          arturo.alicea@outlook.com
        </div>
        <div className="text-left">
          <img src={Phone} alt="Phone Icon" className="icon m-2"></img>
          787-376-2563
          <a
            href="https://www.linkedin.com/in/arturo-alicea-a97a2615b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Linkedin}
              alt="LinkedIn Icon"
              className="linkedin float-right"
            ></img>
          </a>
        </div>
      </>
    );
  }
}

export default Contact;
