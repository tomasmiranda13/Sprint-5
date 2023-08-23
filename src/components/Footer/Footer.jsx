import React from "react";
import "./Footer.css";
import Login from "./Login";

export const Footer = () => {
  return (
    <>
      <div className="bkgnd-footer">
        <div className="div-log">
          <Login />
        </div>
        <div className="logo-position">
          <img className="logo-footer" src="icons/logo.svg" alt="" />
        </div>

        <div className="footer-container">
          <div className="div-location">
            <div>
              <img src="icons/icon-location.svg" alt="" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, laboriosam odit. <br /> Impedit quaerat fugiat iste
                dolores, possimus quibusdam <br />
                ducimus enim laborum temporibus, incidunt maiores consequuntur{" "}
                <br />
                non magnam quod expedita dicta.
              </p>
            </div>
          </div>

          <div className="contact">
            <div className="icon-contact">
              {" "}
              <img src="icons/icon-phone.svg" alt="" />
              <span className="span-contact">+1-543-123-4567</span>
            </div>

            <div className="icon-contact">
              {" "}
              <img src="icons/icon-email.svg" alt="" />
              <span className="span-contact">example@fylo.com</span>
            </div>
          </div>

          <div className="list-row">
            <ul>
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="social-media">
            <img src="icons/facebook.svg" alt="" />
            <img src="icons/twitter.svg" alt="" />
            <img src="icons/instagram.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
