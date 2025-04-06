import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../style/Home.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    "/sliderimage.png",
    "/sliderimage.png",
    "/sliderimage.png",
  ];

  const handlePrev = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  const handleNext = () =>
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );

  return (
    <Row className="mb-5">
      <Col>
        <div className="custom-slider-wrapper hide-scrollbar d-flex">
          {/* First card with slider */}
          <div className="custom-slider-card d-flex flex-column justify-content-center align-items-center">
            <div
              className="card-content d-flex flex-column align-items-center"
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={carouselImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="carousel-image"
              />
            </div>

            <div
              className="slider-indicator d-flex align-items-center justify-content-center mt-3"
              style={{ cursor: "pointer" }}
            >
              <span className="arrow mx-2" onClick={handlePrev}>
                ←
              </span>
              {carouselImages.map((_, index) => (
                <span
                  key={index}
                  className={`dot mx-1 ${
                    index === currentSlide ? "active-dot" : ""
                  }`}
                >
                  •
                </span>
              ))}
              <span className="arrow mx-2" onClick={handleNext}>
                →
              </span>
            </div>
          </div>

          {/* Second static card (untouched) */}
          <div className="custom-slider-card d-flex flex-column justify-content-center align-items-center">
            <div
              className="card-content d-flex flex-column align-items-center"
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src="/sliderimage.png" alt="Card 2" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Slider;
