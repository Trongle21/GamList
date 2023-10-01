import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { BiSearch } from "react-icons/bi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { actions } from "../store";
import useAppContext from "../hooks/useAppContext";

const Header = () => {
  const [state, dispatch, { handleSearchGames }] = useAppContext();

  const { inputSearch } = state;

  const handleSearch = (e) => {
    dispatch(actions.searchGames(e));
  };

  const notify = () => toast("Bạn đang ở dark mode rồi!");

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
                      value={inputSearch}
                      onChange={(e) => {
                        handleSearch(e.target.value),
                          handleSearchGames(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Button variant="dark" onClick={notify}>
              Dark Mode
            </Button>
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
