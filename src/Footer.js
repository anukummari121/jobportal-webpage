import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
//import Rs from "./Rs";

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="col solution">
            <h6>Solutions</h6>

            <ul>
              {/*<li>
                <Link to="/" className="link">
                  Marketing
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  Resume Search
                </Link>
              </li>*/}
              <li>
                <Link to="/rs" className="link">
                  Recruiting Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="col support">
            <h6>Support</h6>

            <ul>
              {/*<li>
                <Link to="/" className="link">
                  Workforce Management
                </Link>
              </li>*/}
              <li>
                <Link to="/" className="link">
                  Documentation
                </Link>
              </li>
              {/*<li>
                <Link to="/" className="link">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  API Status
                </Link>
              </li>*/}
            </ul>
          </div>

          <div className="col Company">
            <h6>Company</h6>

            <ul>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              {/*<li>
                <Link to="/" className="link">
                  Blog
                </Link>
              </li>*/}
              <li>
                <Link to="/career" className="link">
                  Jobs
                </Link>
              </li>
              {/*<li>
                <Link to="/" className="link">
                  Press
                </Link>
              </li>*/}
            </ul>
          </div>

          <div className="col legal">
            <h6>Legal</h6>

            <ul>
              {/*<li>
                <Link to="/" className="link">
                  Claim
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  Cookies
                </Link>
              </li>*/}
              <li>
                <Link to="/" className="link">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          {/*<div className="col-subscribe">
            <h6> Subscibe to our job postings</h6>

            <div className="subscribe">
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>*/}
        </div>

        <div className="footer-bottom">
          <div className="content">
            <div className="rights">
              <p>&copy;Workflow, Inc. All rights reserved.</p>
            </div>
          </div>
          <a href="https://www.facebook.com/sarithm.co">
            <FaFacebook
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </a>
          <a href="https://www.linkedin.com/company/sarithm">
            <FaLinkedin
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </a>
          <a href="https://twitter.com/SarithmLimited">
            <FaTwitter
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </a>
          <a href="https://github.com/Sarithm">
            <FaGithub
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
