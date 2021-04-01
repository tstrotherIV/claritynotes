import React, { useState, useEffect } from "react";
import { Label, FormGroup, Input, Container, Row, Col } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 100

function BehaviorObservationsAndTestingConditionsPg3(props) {
  const [item, setItem] = useState("");
  const [
    patientBehavioralObservationsPg3,
    setPatientBehavioralObservationsPg3,
  ] = useState({
    behavioral_observations_and_testing_conditions_pg3_a: "",
    behavioral_observations_and_testing_conditions_pg3_b: "",
    behavioral_observations_and_testing_conditions_pg3_c: "",
    behavioral_observations_and_testing_conditions_pg3_d: "",
    behavioral_observations_and_testing_conditions_pg3_e: "",
    behavioral_observations_and_testing_conditions_pg3_f: "",
    behavioral_observations_and_testing_conditions_pg3_g: ""
  });

  const next = "/behavioral_observations_and_testing_conditions_pg_4";
  const back = "/behavioral_observations_and_testing_conditions_pg_2";

  const handleFieldChange = (e) => {
    setPatientBehavioralObservationsPg3({
      ...patientBehavioralObservationsPg3,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioBtnChange = (e) => {
    setPatientBehavioralObservationsPg3({
      ...patientBehavioralObservationsPg3,
      [e.target.id]: e.target.value,
    });
  };

  // const handleRadioBtnChange = (e) => {
  //   setRadioBtn(e.target.id);
  // };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      behavioral_observations_and_testing_conditions_pg3_a:
        patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_a,
      behavioral_observations_and_testing_conditions_pg3_b:
        patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_b,
      behavioral_observations_and_testing_conditions_pg3_c:
        patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_c,
      behavioral_observations_and_testing_conditions_pg3_d:
        patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_d,
      behavioral_observations_and_testing_conditions_pg3_e:
        patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_e,
      behavioral_observations_and_testing_conditions_pg3_f:
      patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_f,
      behavioral_observations_and_testing_conditions_pg3_g:
        patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_g,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "behavioral_observations_and_testing_conditions_pg3_a",
        "behavioral_observations_and_testing_conditions_pg3_b",
        "behavioral_observations_and_testing_conditions_pg3_c",
        "behavioral_observations_and_testing_conditions_pg3_d",
        "behavioral_observations_and_testing_conditions_pg3_e",
        "behavioral_observations_and_testing_conditions_pg3_f",
        "behavioral_observations_and_testing_conditions_pg3_g",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientBehavioralObservationsPg3(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">
            Behavioral Observations and Testing Conditions
          </h2>
          <div className="text-center questionsContainer">
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name}
              </Label>
              <Label className="textWhite m-2">Height:</Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_a"
                name="behavioral_observations_and_testing_conditions_pg3_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={
                  patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_a
                }
              />
            </div>

            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name}
              </Label>
              <Label className="textWhite m-2">Weight:</Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_b"
                name="behavioral_observations_and_testing_conditions_pg3_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={
                  patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_b
                }
              />
            </div>

            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name}
              </Label>
              <Label className="textWhite m-2">Build:</Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_c"
                name="behavioral_observations_and_testing_conditions_pg3_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={
                  patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_c
                }
              />
            </div>

            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name}
              </Label>
              <Label className="textWhite m-2">Hearing:</Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_d"
                name="behavioral_observations_and_testing_conditions_pg3_d"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={
                  patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_d
                }
              />
            </div>

            <div className=" mb-4">
              <Label className="textWhite interview_title" for="">
                Was {props.patientName.patient_first_name} groom appropriately? (Yes/No)
              </Label>
              <input
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_e"
                name="behavioral_observations_and_testing_conditions_pg3_e"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                placeholder="Yes/No"
                value={
                  patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_e
                }
              />
            </div>

            <div className="mb-4">
              <Label className="textWhite interview_title" for="">
                What kind of effort did {props.patientName.patient_first_name} show?
              </Label>
              <Container>
                <Row xs="2">
                  <Col className="text-md-right">
                    <FormGroup check>
                      <Label className="textWhite" check>
                        <Input
                          type="radio"
                          name="radio1"
                          id="behavioral_observations_and_testing_conditions_pg3_f"
                          value="1"
                          onClick={handleRadioBtnChange}
                          checked={
                            patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_f ===
                            "1"
                          }
                        />{" "}
                        Poor Effort
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col className="text-md-left">
                    <FormGroup check>
                      <Label className="textWhite" check>
                        <Input
                          type="radio"
                          name="radio1"
                          id="behavioral_observations_and_testing_conditions_pg3_f"
                          value="2"
                          onClick={handleRadioBtnChange}
                          checked={
                            patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_f ===
                            "2"
                          }
                        />{" "}
                        Good Effort
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col className="text-md-right">
                    <FormGroup check>
                      <Label className="textWhite" check>
                        <Input
                          type="radio"
                          name="radio1"
                          id="behavioral_observations_and_testing_conditions_pg3_f"
                          value="3"
                          onClick={handleRadioBtnChange}
                          checked={
                            patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_f ===
                            "3"
                          }
                        />{" "}
                        Adequate Effort
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col className="text-md-left">
                    <FormGroup check>
                      <Label className="textWhite" check>
                        <Input
                          type="radio"
                          name="radio1"
                          id="behavioral_observations_and_testing_conditions_pg3_f"
                          value="4"
                          onClick={handleRadioBtnChange}
                          checked={
                            patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_f ===
                            "4"
                          }
                        />{" "}
                        Exceptional Effort
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="mb-4">
              <Label className="textWhite interview_title" for="">
                Did the patient display signs of difficulty with fine or gross
                motor skills? (Yes/No)
              </Label>
              <input
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_g"
                name="behavioral_observations_and_testing_conditions_pg3_g"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                placeholder="Yes/No"
                value={
                  patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_g
                }
              />
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientBehavioralObservationsPg3}
            />
            <TermOfParentalRights
              questionId={item}
              patientId={props.patientId}
              item={item}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BehaviorObservationsAndTestingConditionsPg3;
