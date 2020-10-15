import React from "react";
import "./login.css";
import { Col, Label, Input, Container, Row, Button } from "reactstrap";

function Login() {
  return (
    <Container>
      <Container>
        <Row>
          <Col>
            <h1 className="textWhite titleFontSize d-flex justify-content-center">
              CLARITYNOTES
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="textWhite subHeaderFontSize d-flex justify-content-center">
              Professional Notetaking for Psychologists
            </h3>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <h2 className="textWhite d-flex justify-content-center">
              Welcome to Claritynotes!
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="textWhite d-flex justify-content-center">
              Please login to continue
            </h4>
          </Col>
        </Row>
      </Container>
      <br></br>
      <div>
        <Container>
          <Row className="m-4" style={{ height: 50 }}>
            <Col sm={{ size: 1, offset: 0 }}>
              <Label className="textWhite" for="exampleEmail">
                Email
              </Label>
            </Col>
            <Col>
              <Input
                className="h-100"
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col>
          </Row>
          <Row className="m-4" style={{ height: 50 }}>
            <Col sm={{ size: 1, offset: 0 }}>
              <Label className="textWhite" for="examplePassword">
                Password
              </Label>
            </Col>
            <Col>
              <Input
                className="h-100"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button color="primary" block>CREATE NEW USER</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Login;
