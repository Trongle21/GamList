import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { BiSearch } from "react-icons/bi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import useGameContext from "../hooks/useGameContext";
import { Button } from "react-bootstrap";

const Header = () => {
  const { search, setSearch } = useGameContext();

  const handleSearch = (e) => {
    setSearch(e);
  };

  return (
    <header>
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col xs={2}>
            <Image
              src="https://felstar.com/demo/gamehub/assets/logo-ff4914e6.webp"
              roundedCircle
              width={60}
              height={60}
            />
          </Col>
          <Col xs={8}>
            <Container>
              <Row>
                <Col>
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <BiSearch />
                    </InputGroup.Text>
                    <Form.Control
                      // style={{ backgroundColor: "#212529" }}
                      placeholder="Tìm kiếm ..."
                      aria-describedby="basic-addon1"
                      value={search}
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Button variant="dark">Dark Mode</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
