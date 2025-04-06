import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "../style/Home.css";


const Footer = () => (
  <>
    <Row className="mt-5">
      <Col className="text-center">
        <div className="social-icons">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
            <div key={i} className="social-icon-container">
              <Icon className="social-icon" />
            </div>
          ))}
        </div>
      </Col>
    </Row>
    <Row className="mt-3">
      <Col className="text-center">
        <p className="footer">Example@email.com</p>
      </Col>
    </Row>
    <Row className="mb-4">
      <Col className="text-center footer">
        <p>Copyright © 2020 Name. All rights reserved.</p>
      </Col>
    </Row>
  </>
);

export default Footer;
