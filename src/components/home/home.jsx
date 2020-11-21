import React, { Component } from "react";
import "../home/home.scss";
import { Profile, Resume, ResumeIcon } from "../../assets/index";
import Contact from "../contact/contact";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="info col-md-6 m-auto text-center">
            <img src={Profile} className="m-3 profile" alt="Profile"></img>
            <h1 className="text-uppercase">Arturo Alicea</h1>
            <p className="">Full Stack Software Developer</p>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={Resume}>
              <img
                className="resume float-right"
                src={ResumeIcon}
                alt="Resume Icon">
              </img>
            </a>

            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
