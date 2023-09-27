import React from "react";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import useGameContext from "../hooks/useGameContext";

const dataArrange = [
  {
    id: 1,
    name: "Name",
  },
  {
    id: 2,
    name: "Score",
  },
  {
    id: 3,
    name: "Date",
  },
];
const Filter = () => {
  const { onArrange, arrange, setSearch } = useGameContext();

  const handleArrange = (data) => {
    onArrange(data);
    setSearch("");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Sắp xếp theo
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {dataArrange.map((data) => (
                <Dropdown.Item
                  key={data.id}
                  href="#/action-1"
                  value={arrange}
                  onClick={() => handleArrange(data.name)}
                >
                  {data.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
