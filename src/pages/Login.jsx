import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username or email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .matches(/[A-Z]/, "Must include at least 1 uppercase letter")
        .matches(/\d/, "Must include at least 1 number")
        .matches(/[\W_]/, "Must include at least 1 special character")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      navigate("/home");
    },
  });

  return (
    <Container fluid className="login-container">
      <Row className="align-items-center justify-content-center vh-100">
        <Col md={4}>
          <h2 className="sign-in-headingsBold">Sign In</h2>
          <p className="sign-in-headingsNarrow">
            New user?{"  "}
            <a href="#" className="text-primary">
              Create an account
            </a>
          </p>
          <Form onSubmit={formik.handleSubmit}>
            {/* Username Field */}
            <Form.Group controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="Username or email"
                className="sign-in-headingsNarrow"
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username && (
                <div className="error-text">{formik.errors.username}</div>
              )}
            </Form.Group>

            {/* Password Field */}
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Control
                type="password"
                placeholder="Password"
                className="sign-in-headingsNarrow"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="error-text">{formik.errors.password}</div>
              )}
            </Form.Group>

            {/* Keep me signed in */}
            <Form.Group controlId="formCheckbox" className="mt-3 form-check">
              <Form.Check type="checkbox" id="keepSignedIn" />
              <Form.Label
                htmlFor="keepSignedIn"
                className="sign-in-headingsNarrow"
              >
                Keep me signed in
              </Form.Label>
            </Form.Group>

            {/* Sign In Button */}
            <Button type="submit" className="w-100 mt-3 custom-button">
              Sign In
            </Button>
          </Form>

          {/* Divider */}
          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-text">Or Sign In With</span>
            <span className="divider-line"></span>
          </div>

          {/* Social Icons */}
          <div className="social-icons text-center">
            <div className="social-icon-container">
              <FaGoogle className="social-icon" />
            </div>
            <div className="social-icon-container">
              <FaFacebookF className="social-icon" />
            </div>
            <div className="social-icon-container">
              <FaLinkedinIn className="social-icon" />
            </div>
            <div className="social-icon-container">
              <FaTwitter className="social-icon" />
            </div>
          </div>
        </Col>

        {/* Login Image */}
        <Col md={6} className="d-none d-md-block login-image">
          <div className="image-wrapper">
            <img
              src="/login-illustration.png"
              alt="Illustration"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
