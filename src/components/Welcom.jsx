import React from "react";
import { Row, Col } from "react-bootstrap";
import "../style/Home.css";

const Welcome = () => (
  <>
    <Row className="my-4">
      <Col>
        <div className="d-none d-md-flex flex-column">
          {/* Desktop view */}
          <div className="d-flex justify-content-start">
            <div className="line" style={{ width: "40%", height: "2px" }}></div>
          </div>

          <div className="d-flex justify-content-center my-3">
            <h1 className="fw-bold welcome">WELCOME</h1>
          </div>

          <div className="d-flex justify-content-end">
            <div className="line" style={{ width: "40%", height: "2px" }}></div>
          </div>
        </div>

        <div className="d-flex d-md-none flex-column align-items-center">
          {/* Mobile view */}
          <div className="line" style={{ width: "100%", height: "2px" }}></div>
          <h1 className="fw-bold welcome my-2 text-center">WELCOME</h1>
          <div className="line" style={{ width: "100%", height: "2px" }}></div>
        </div>
      </Col>
    </Row>
  </>
);

export default Welcome;
