import React from "react";
import "./patientHome.scss";
import { Button, Container, Row, Col } from "reactstrap";

function PatientHomePage(props) {

  let USERNAME = "Chris"

  return (
    <>
    <div className="container addMargin">
      <div className="mt-5 aligner">
        <h1 className="textWhite textLarger">Welcome {USERNAME}!</h1>
      </div>
      <p className="textWhite aligner mb-5">
        Please select an option
      </p>
      <Container className="mt-5">
        <Row>
          <Col className="col-6 aligner">
            <Button
              className="optionBtn"
              block
              color="light"
              onClick={() => {
                props.history.push(`/sessionStep1`);
              }}
            >
              New Patient
            </Button>
          </Col>
          <Col className="col-6 aligner">
            <Button
              className="optionBtn"
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
            <p className="textWhite m-2">Or Click Here to Browse all records</p>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}

export default PatientHomePage;
