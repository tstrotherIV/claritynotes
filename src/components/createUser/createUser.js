import React from "react";
import "./createUser.scss";
import { Col, Label, Input, Container, Row, Button } from "reactstrap";

function CreateUser() {
  return (
    <>
      <h1 className="titleFontSize whiteBgd d-flex justify-content-center">
        New User Creation
      </h1>
      <Container>
        <Row xs="2" className="" >
          <Col className="">
            <Row>
              <Col>
                <Label className="textWhite" for="examplePassword">
                  Name
                </Label>
              </Col>
              <Col>
                <Input
                  className="h-100"
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="First Name"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label className="textWhite" for="examplePassword">
                  Employee #
                </Label>
              </Col>
              <Col>
                <Input
                  className="h-100"
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Employee Number"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col></Col>
              <Col>
                <Input
                  className="h-100"
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Middle Name"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label className="textWhite" for="examplePassword">
                  Role/Title
                </Label>
              </Col>
              <Col>
                <Input
                  className="h-100"
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Middle Name"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col></Col>
              <Col>
                <Input
                  className="h-100"
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Last Name"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label className="textWhite" for="examplePassword">
                  Admin?
                </Label>
              </Col>
              <Col>
                <Input type="checkbox" name="checkbox" id="checkbox" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="createButtons">
        <Button
          color="info"
          className="gap"
          // onClick={() => {
          //   props.history.push(`/tourViewer/${props.tour.id}`);
          // }}
        >
          Cancel
        </Button>

        <Button
          color="info"
          className="gap"
          // onClick={() => {
          //   props.history.push(`/tourEdit/${props.tour.id}`);
          // }}
        >
          Create User
        </Button>
      </div>
    </>
  );
}

export default CreateUser;
