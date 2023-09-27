import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const Root = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={2}>
            <Navigation />
          </Col>
          <Col xs={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Root;
