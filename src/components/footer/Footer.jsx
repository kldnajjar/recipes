import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

const Footer = () => (
  <footer className="footer-container">
    <div className="main-footer widgets-dark typo-light">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="widget subscribe no-box">
              <h5 className="widget-title">
                Just Eat<span></span>
              </h5>
              <p>
                food can be desiccated and withered like an old prune. Sometimes
                dry food keeps better, as beans and pulses; then being dry is a
                desirable trait.
              </p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="widget no-box">
              <h5 className="widget-title">
                Our Menu<span></span>
              </h5>
              <ul className="thumbnail-widget">
                <li>
                  <div className="thumb-content">
                    <a href="#products" rel="noreferrer">
                      Products
                    </a>
                  </div>
                </li>
                <li>
                  <div className="thumb-content">
                    <a href="#ingredients" rel="noreferrer">
                      Ingredients
                    </a>
                  </div>
                </li>
                <li>
                  <div className="thumb-content">
                    <a href="#menu" rel="noreferrer">
                      Menu
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="widget no-box">
              <h5 className="widget-title">
                Contact Us<span></span>
              </h5>

              <p>
                <a
                  href="mailto:kld.najjar@gmail.com"
                  title="glorythemes"
                  rel="noreferrer"
                >
                  kld.najjar@gmail.com
                </a>
              </p>
              <ul className="social-footer2">
                <li className="">
                  <a
                    title="youtube"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=mhDJNfV7hjk"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    title="Facebook"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    title="Twitter"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="">
                  <a
                    title="instagram"
                    target="_blank"
                    href="https://www.instagram.com/"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Copyright Just Eat © 2022. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
