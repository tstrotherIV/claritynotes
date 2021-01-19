import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 99

function BehavioralObservationsAndTestingConditionsPg2(props) {
  const [item, setItem] = useState("");
  const [
    patientBehavioralObservationsPg2,
    setPatientBehavioralObservationsPg2,
  ] = useState({
    behavioral_observations_and_testing_conditions_pg2_a: "",
    behavioral_observations_and_testing_conditions_pg2_b: "",
  });

  const next = "/behavioral_observations_and_testing_conditions_pg_3";
  const back = "/behavioral_observations_and_testing_conditions_pg_1";

  const handleFieldChange = (e) => {
    setPatientBehavioralObservationsPg2({
      ...patientBehavioralObservationsPg2,
      [e.target.name]: e.target.value,
    });
  };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      behavioral_observations_and_testing_conditions_pg2_a:
        patientBehavioralObservationsPg2.behavioral_observations_and_testing_conditions_pg2_a,
      behavioral_observations_and_testing_conditions_pg2_b:
        patientBehavioralObservationsPg2.behavioral_observations_and_testing_conditions_pg2_b,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "behavioral_observations_and_testing_conditions_pg2_a",
        "behavioral_observations_and_testing_conditions_pg2_b",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientBehavioralObservationsPg2(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <h2 className="textWhite text-center mb-4">
            {" "}
            Behavioral Observations and Testing Conditions
          </h2>
          <div className="questionsContainer text-center textWhite d-flex justify-content-center">
            <div className="m-4 col-10">
              <Label className="">
                (Cognitive Style) Is their attire conforming or non-conforming?
              </Label>
              <TextareaAutosize
                className="fieldData col-12"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg2_a"
                name="behavioral_observations_and_testing_conditions_pg2_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={
                  patientBehavioralObservationsPg2.behavioral_observations_and_testing_conditions_pg2_a
                }
              />
              <div>
                Impoverished, Circumstantial, Distracted, Naive, Flighty,
                Expansive, Mistrustful, non-conforming, Dogmatic, Fatalistic,
                Diffident, Cynical, Vacillating, Constricted, Scattered
              </div>
            </div>
          </div>
          <div className="questionsContainer text-center textWhite d-flex justify-content-center">
            <div className="mt-5 mb-4 ml-4 mr-4 col-10">
              <Label className="">How? Describe the person!</Label>
              <TextareaAutosize
                className="fieldData "
                type="text"
                id="behavioral_observations_and_testing_conditions_pg2_b"
                name="behavioral_observations_and_testing_conditions_pg2_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={
                  patientBehavioralObservationsPg2.behavioral_observations_and_testing_conditions_pg2_b
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
              patientNotes={patientBehavioralObservationsPg2}
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

export default BehavioralObservationsAndTestingConditionsPg2;
