import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Dropdown, ButtonGroup } from "react-bootstrap";
import { filterByRegion } from "../redux/actions/countryActions";
import { selectRegion } from "../redux/selectors";
import "../style/Home.css";

const regions = ["All", "Asia", "Europe"];

const RegionFilter = () => {
  const dispatch = useDispatch();
  const currentRegion = useSelector(selectRegion);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Col xs={12} md={6} className="text-md-end mt-2 mt-md-0">
      {/* Desktop View - Horizontal Tabs */}
      <div className="d-none d-md-flex justify-content-md-end justify-content-center gap-4 filter">
        {regions.map((region) => (
          <span
            key={`desktop-${region}`}
            onClick={() => dispatch(filterByRegion(region))}
            style={{
              cursor: "pointer",
              fontWeight: currentRegion === region ? "bold" : "normal",
              borderBottom:
                currentRegion === region ? "2px solid #3E3E3E" : "none",
              paddingBottom: "2px",
            }}
          >
            {region}
          </span>
        ))}
      </div>

      {/* Mobile View - Dropdown */}
      <div className="d-md-none text-end">
        <Dropdown show={showMobileMenu} onToggle={setShowMobileMenu}>
          <Dropdown.Toggle
            variant="outline-secondary"
            id="mobile-region-menu"
            style={{
              border: "none",
              backgroundColor: "transparent",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "black",
            }}
          >
            ☰
          </Dropdown.Toggle>

          <Dropdown.Menu align="end" className="mt-2">
            {regions.map((region) => (
              <Dropdown.Item
                key={`mobile-${region}`}
                active={currentRegion === region}
                onClick={() => {
                  dispatch(filterByRegion(region));
                  setShowMobileMenu(false);
                }}
                className={
                  currentRegion === region ? "active-dropdown-item" : ""
                }
              >
                {region}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Col>
  );
};

export default RegionFilter;
