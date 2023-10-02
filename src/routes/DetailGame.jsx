import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";

const DetailGame = () => {
  const gameId = useParams();

  const [state, dispatch, { filterGameById }] = useAppContext();

  const idGame = filterGameById(gameId.gameId);

  let renderDetailGame;

  if (idGame) {
    renderDetailGame = idGame;
  }

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Card.Title style={{ fontSize: 36, fontWeight: 700 }}>
            {renderDetailGame.name}
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
                <Card.Title style={{ fontSize: 30 }}>Platform</Card.Title>
                {renderDetailGame.platforms.map((platform, index) => (
                  <Card.Text key={index}>{platform.platform.name}</Card.Text>
                ))}
              </Col>
              <Col xs={6}>
                <Card.Title style={{ fontSize: 30 }}>Metascore</Card.Title>
                <Card.Text>{renderDetailGame.metacritic}</Card.Text>
              </Col>
              <Col xs={6}>
                <Card.Title style={{ fontSize: 30 }}>Genres</Card.Title>
                {renderDetailGame.genres.map((genre, index) => (
                  <Card.Text key={index}>{genre.name}</Card.Text>
                ))}
              </Col>
              <Col xs={6}>
                <Card.Title style={{ fontSize: 30 }}>Genres</Card.Title>
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
                  <Card.Img src={renderDetailGame.background_image}></Card.Img>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Img src={renderDetailGame.background_image}></Card.Img>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Img src={renderDetailGame.background_image}></Card.Img>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Img src={idGame.background_image}></Card.Img>
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
