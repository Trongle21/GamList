import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import useAppContext from "../hooks/useAppContext";
import { actions } from "../store";

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
  const [state, dispatch] = useAppContext();

  const { select } = state;

  const handleArrange = (data) => {
    dispatch(actions.selectGames(data));
    dispatch(actions.searchGames(""));
    dispatch(actions.filterGameBySelect());
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
                  value={select}
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
