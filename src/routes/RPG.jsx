import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import useGameContext from "../hooks/useGameContext";
// import RenderGame from "../components/RenderGame";

const RPG = () => {
  const [state, dispactch] = useAppContext();

  const { arrange } = useGameContext();

  const { games, search } = state;

  let arrangeGames;

  if (arrange == "Date") {
    arrangeGames =
      games.results &&
      games.results
        .slice()
        .sort((a, b) => new Date(b.updated) - new Date(a.updated));
  } else if (arrange == "Name") {
    arrangeGames = games.results
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  } else if (arrange == "Score") {
    arrangeGames = games.results
      .slice()
      .sort((a, b) => b.metacritic - a.metacritic);
  } else {
    arrangeGames = games.results;
  }

  if (search && games && games.results) {
    arrangeGames = games.results.filter((game) =>
      game.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <Container>
      <Container>
        <Row>
          <Col style={{ fontSize: 40, fontWeight: 700 }}>RPG Game</Col>
        </Row>
      </Container>
      <Filter />
      <Container style={{ paddingTop: 20 }}>
        <Row>
          {games.results &&
            arrangeGames.map((game) =>
              game.genres.map((genres) => {
                if (genres.name === "RPG") {
                  return (
                    <Col lg={4} md={6} sm={12} key={game.name}>
                      <Card>
                        <Card.Img
                          variant="top"
                          style={{ width: `100%` }}
                          src={game.background_image}
                        />
                        <Card.Body style={{ background: "#252525" }}>
                          <Container>
                            <Row>
                              <Col
                                xs={9}
                                style={{
                                  display: "flex",
                                  gap: 10,
                                  color: "#fff",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-windows"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z" />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-playstation"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356ZM9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.454 8.454 0 0 1-4.018-.323Z" />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-xbox"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M7.202 15.967a7.987 7.987 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33Zm-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.372 8.372 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.495 9.495 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4.171 4.171 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.778 7.778 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12.246 12.246 0 0 1-.654-.319Z" />
                                </svg>
                              </Col>
                              <Col
                                xs={3}
                                style={{
                                  background: "rgba(154, 230, 180,0.8)",
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  fontWeight: "bold",
                                  color: "#fff",
                                }}
                              >
                                {game.metacritic}
                              </Col>
                            </Row>
                          </Container>
                          <Container>
                            <Row>
                              <Col style={{ fontSize: 20, fontWeight: "bold" }}>
                                <Card.Text>
                                  <Link
                                    style={{ color: "#fff" }}
                                    to={`/detail/${game.id}`}
                                  >
                                    {game.name}
                                  </Link>
                                </Card.Text>
                              </Col>
                            </Row>
                          </Container>
                          <Container>
                            <Row>
                              <Col>
                                <Card.Img
                                  style={{ width: "2rem" }}
                                  src="https://felstar.com/demo/gamehub/assets/bulls-eye-d37f7fe5.webp"
                                />
                              </Col>
                            </Row>
                          </Container>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                }
              })
            )}
        </Row>
      </Container>
    </Container>
  );
};

export default RPG;
