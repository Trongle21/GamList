import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const DetailGame = () => {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Card.Title style={{ fontSize: 36, fontWeight: 700 }}>
            Grand Auto five
          </Card.Title>
          <Card.Text>
            Rockstar Games went bigger, since their previous installment of the
            series. You get the complicated and realistic world-building from
            Liberty City of GTA4 in the setting of lively and diverse Los
            Santos, from an old fan favorite GTA San Andreas. 561 different
            vehicles
          </Card.Text>
          <Container>
            <Row>
              <Col xs={6}>
                <Card.Title>Platform</Card.Title>
                <Card.Text>PC</Card.Text>
                <Card.Text>Play Station</Card.Text>
                <Card.Text>Xbox</Card.Text>
              </Col>
              <Col xs={6}>
                <Card.Title>Metascore</Card.Title>
                <Card.Text>92</Card.Text>
              </Col>
              <Col xs={6}>
                <Card.Title>Genres</Card.Title>
                <Card.Text>Action</Card.Text>
                <Card.Text>Adventure</Card.Text>
              </Col>
              <Col xs={6}>
                <Card.Title>Genres</Card.Title>
                <Card.Text>Rockstar Games</Card.Text>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={6}>
          <Container>
            <Row>
              <Col xs={6}>
                <Card>
                  <Card.Img src="https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"></Card.Img>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Img src="https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"></Card.Img>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Img src="https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"></Card.Img>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Img src="https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"></Card.Img>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailGame;
