import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 101

function BehaviorObservationsAndTestingConditionsPg4(props) {
  const [item, setItem] = useState("");
  const [
    patientBehavioralObservationsPg4,
    setPatientBehavioralObservationsPg4,
  ] = useState({
    behavioral_observations_and_testing_conditions_pg4_a: "",
    behavioral_observations_and_testing_conditions_pg4_b: "",
    behavioral_observations_and_testing_conditions_pg4_c: "",
    behavioral_observations_and_testing_conditions_pg4_d: "",
    behavioral_observations_and_testing_conditions_pg4_e: "",
    behavioral_observations_and_testing_conditions_pg4_f: "",
    behavioral_observations_and_testing_conditions_pg4_g: "",
  });

  const next = "/behavioral_observations_and_testing_conditions_pg_5";
  const back = "/behavioral_observations_and_testing_conditions_pg_3";

  const handleFieldChange = (e) => {
    setPatientBehavioralObservationsPg4({
      ...patientBehavioralObservationsPg4,
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
      behavioral_observations_and_testing_conditions_pg4_a:
        patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_a,
      behavioral_observations_and_testing_conditions_pg4_b:
        patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_b,
      behavioral_observations_and_testing_conditions_pg4_c:
        patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_c,
      behavioral_observations_and_testing_conditions_pg4_d:
        patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_d,
      behavioral_observations_and_testing_conditions_pg4_e:
        patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_e,
      behavioral_observations_and_testing_conditions_pg4_f:
        patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_f,
      behavioral_observations_and_testing_conditions_pg4_g:
        patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_g,
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
        "behavioral_observations_and_testing_conditions_pg4_a",
        "behavioral_observations_and_testing_conditions_pg4_b",
        "behavioral_observations_and_testing_conditions_pg4_c",
        "behavioral_observations_and_testing_conditions_pg4_d",
        "behavioral_observations_and_testing_conditions_pg4_e",
        "behavioral_observations_and_testing_conditions_pg4_f",
        "behavioral_observations_and_testing_conditions_pg4_g",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientBehavioralObservationsPg4(filtered);
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
            Behavioral Observations and Testing Conditions
          </h2>
          <div className="questionsContainer">
            <div className="interview_div1">
              <div className="d-flex align-items-center textWhite m-2">
                <Label className="textWhite col-3 text-right p-0 m-0" for="">
                  [Patient Name, First]
                </Label>
                <div className="ml-2 p-0 mr-2">mood was</div>
                <TextareaAutosize
                  className="mb-2 fieldData"
                  type="text"
                  id="behavioral_observations_and_testing_conditions_pg4_a"
                  name="behavioral_observations_and_testing_conditions_pg4_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_a
                  }
                  placeholder="depressed/anxious/irritable"
                />
              </div>
              <div className="d-flex align-items-center textWhite m-2">
                <Label className="textWhite col-3 text-right p-0 m-0" for="">
                  [Patient Name, First]
                </Label>
                <div className="ml-2 p-0 col-4">was very hyperactive.</div>
                <TextareaAutosize
                  className="col-2 mr-2 mb-2 fieldData"
                  type="text"
                  id="behavioral_observations_and_testing_conditions_pg4_b"
                  name="behavioral_observations_and_testing_conditions_pg4_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_b
                  }
                  placeholder="yes/no"
                />
              </div>

              <div className="d-flex align-items-center textWhite m-2">
                <Label className="textWhite col-3 text-right p-0 m-0" for="">
                  [Patient Name, First]
                </Label>
                <div className="ml-2 p-0 col-4">was irritable.</div>
                <TextareaAutosize
                  className="col-2 mr-2 mb-2 fieldData"
                  type="text"
                  id="behavioral_observations_and_testing_conditions_pg4_c"
                  name="behavioral_observations_and_testing_conditions_pg4_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_c
                  }
                  placeholder="yes/no"
                />
              </div>

              <div className="d-flex align-items-center textWhite m-2">
                <Label className="textWhite col-3 text-right p-0 m-0" for="">
                  [Patient Name, First]
                </Label>
                <div className="ml-2 p-0 col-4">was withdrawn.</div>
                <TextareaAutosize
                  className="col-2 mr-2 mb-2 fieldData"
                  type=""
                  id="behavioral_observations_and_testing_conditions_pg4_d"
                  name="behavioral_observations_and_testing_conditions_pg4_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_d
                  }
                  placeholder="yes/no"
                />
              </div>
              <div className="d-flex align-items-center textWhite m-2">
                <Label className="textWhite col-3 text-right p-0 m-0" for="">
                  [Patient Name, First]
                </Label>
                <div className="ml-1 p-0 col-4">
                  ’s eye contact was strong.{" "}
                </div>
                <TextareaAutosize
                  className="col-2 mr-2 mb-2 fieldData ml-1"
                  type=""
                  id="behavioral_observations_and_testing_conditions_pg4_e"
                  name="behavioral_observations_and_testing_conditions_pg4_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_e
                  }
                  placeholder="yes/no"
                />
              </div>
              <div className="d-flex align-items-center textWhite m-2">
                <Label className="textWhite col-3 text-right p-0 m-0" for="">
                  [Patient Name, First]
                </Label>
                <div className="ml-2 p-0 col-4">
                  was circumspect in her answers.
                </div>
                <TextareaAutosize
                  className="col-2 mr-2 mb-2 fieldData"
                  type=""
                  id="behavioral_observations_and_testing_conditions_pg4_f"
                  name="behavioral_observations_and_testing_conditions_pg4_f"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_f
                  }
                  placeholder="yes/no"
                />
              </div>
              <div className="d-flex align-items-center textWhite m-2">
                <Label className="textWhite col-3 text-right p-0 m-0" for="">
                  [Patient Name, First]
                </Label>
                <div className="ml-2 p-0 col-4">
                  offered information readily.{" "}
                </div>
                <TextareaAutosize
                  className="col-2 mr-2 mb-2 fieldData"
                  type=""
                  id="behavioral_observations_and_testing_conditions_pg4_g"
                  name="behavioral_observations_and_testing_conditions_pg4_g"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg4.behavioral_observations_and_testing_conditions_pg4_g
                  }
                  placeholder="yes/no"
                />
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientBehavioralObservationsPg4}
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

export default BehaviorObservationsAndTestingConditionsPg4;
