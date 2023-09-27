import Link from "antd/es/typography/Link";
import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

const navigation = [
  {
    url: "/",
    name: "Action",
    img: "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
  },
  {
    url: "/indie",
    name: "Indie",
    img: "https://media.rawg.io/media/crop/600/400/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
  },
  {
    url: "/adventure",
    name: "Adventure",
    img: "https://media.rawg.io/media/crop/600/400/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
  },
  {
    url: "/puzzle",
    name: "Puzzle",
    img: "	https://media.rawg.io/media/crop/600/400/games/328/3283617cb7d75d67257fc58339188742.jpg",
  },
  {
    url: "/shooter",
    name: "Shooter",
    img: "https://media.rawg.io/media/crop/600/400/games/120/1201a40e4364557b124392ee50317b99.jpg",
  },
  {
    url: "/rpg",
    name: "RPG",
    img: "		https://media.rawg.io/media/crop/600/400/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
  },
  {
    url: "/multiplayer",
    name: "Multiplayer",
    img: "https://media.rawg.io/media/crop/600/400/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
  },
];

const Navigation = () => {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ fontSize: 40, fontWeight: 700 }}>Genres</Col>
        </Row>
      </Container>

      {navigation.map((nav, index) => (
        <Container key={index} style={{ paddingBottom: 10 }}>
          <Row>
            <Col xs={5} style={{ textAlign: "left" }}>
              <Image
                style={{ borderRadius: 10 }}
                src={nav.img}
                width={40}
                height={40}
              />
            </Col>
            <Col xs={5}>
              <NavLink className="nav-color" to={nav.url}>
                {" "}
                {nav.name}
              </NavLink>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
};

export default Navigation;
