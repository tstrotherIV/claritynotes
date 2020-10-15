import React from "react";
import "./ClarityNotes.css";
import { Col, Label, Input, Container, Row } from "reactstrap";

function ClarityNotes() {
  return (
    <section>
      <div className="App">
        <h1 className="centerText textWhite titleFontSize titleSpacing">
          CLARITYNOTES
        </h1>
        <h3 className="centerText textWhite subHeaderFontSize">
          Professional Notetaking for Psychologists
        </h3>
        <br></br>
        <h2 className="centerText textWhite welcomeText">
          Welcome to Claritynotes!
        </h2>
        <h4 className="centerText textWhite pleaseLoginText">
          Please login to continue
        </h4>
      </div>
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
        </Container>
      </div>
    </section>
  );
}

export default ClarityNotes;
