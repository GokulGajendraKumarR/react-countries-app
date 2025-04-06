import React from "react";
import { Col } from "react-bootstrap";
import "../style/Home.css";
const CountryCard = ({ country }) => (
  <Col md={6} className="mb-4">
    <div
      className="country-card"
      style={{
        border: "2px solid black",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        padding: "16px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
        style={{
          width: "120px",
          height: "80px",
          objectFit: "cover",
          marginRight: "16px",
        }}
      />
      <div>
        <div>
          <h4 style={{ margin: 0 }} className="countries-name">
            {country.name}
          </h4>
          <p style={{ margin: 0 }} className="countries-region">
            {country.region}
          </p>
        </div>
      </div>
    </div>
  </Col>
);

export default CountryCard;
