import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Button, Col } from "react-bootstrap";
import {
  fetchCountries,
  loadMoreCountries,
} from "../redux/actions/countryActions";
import {
  selectFilteredCountries,
  selectVisibleCount,
} from "../redux/selectors";
import CountryCard from "../components/CountryCard";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import RegionFilter from "../components/RegionFilter";
import "../style/Home.css";
import Welcome from "../components/Welcom";

const Home = () => {
  const dispatch = useDispatch();
  const filteredCountries = useSelector(selectFilteredCountries);
  const visibleCount = useSelector(selectVisibleCount);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <Container className="mb-2 mt-3">
      <Row className="align-items-center justify-content-between">
        <Col xs="auto" className="header pe-0">
          <h3 className="mb-0">Countries</h3>
        </Col>
        <Col xs="auto">
          <RegionFilter />
        </Col>
      </Row>
      <Welcome />
      <Slider />

      <Row>
        {filteredCountries.slice(0, visibleCount).map((country, index) => (
          <CountryCard key={`${country.cca3}-${index}`} country={country} />
        ))}
      </Row>

      {visibleCount < filteredCountries.length && (
        <Row className="mt-3">
          <Col className="text-center">
            <Button
              className="custom-button"
              onClick={() => dispatch(loadMoreCountries())}
            >
              Load More
            </Button>
          </Col>
        </Row>
      )}

      <Footer />
    </Container>
  );
};

export default Home;
