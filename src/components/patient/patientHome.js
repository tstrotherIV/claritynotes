import React from "react";
import "./patientHome.css";
import { Button, Container, Row, Col } from "reactstrap";

function PatientHomePage(props) {

  let USERNAME = "Chris"

  return (
    <>
      <div className="d-flex flex-row justify-content-center mt-5">
        <h1>Welcome</h1> `<h1>{USERNAME}</h1>`
      </div>
      <h4 className="d-flex justify-content-center textWhite">
        Please select an option
      </h4>
      <br></br>
      <Container>
        <Row>
          <Col>
            <Button
              // className="mr-2"
              block
              color="light"
              onClick={() => {
                props.history.push(`/sessionStep1`);
              }}
            >
              New Patient
            </Button>
          </Col>
          <Col>
            <Button
              // className="mt-0 ml-2"
              block
              color="light"
              // onClick={() => {
              //   props.history.push(`/tourViewer/${props.tour.id}`);
              // }}
            >
              Search Existing
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            
          </Col>
          <Col className="d-flex justify-content-center">
            <h4 className="textWhite">Or Click Here to Browse all records</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PatientHomePage;
