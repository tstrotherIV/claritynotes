import React, { useState, useEffect } from "react";
import { Label, Navbar } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 98

function BehavioralObservationsPg1(props) {
  const [item, setItem] = useState("");
  const [
    patientBehavioralObservationsPg1,
    setPatientBehavioralObservationsPg1,
  ] = useState({
    behavioral_observations_and_testing_conditions_pg1_a: "",
    behavioral_observations_and_testing_conditions_pg1_b: "",
    behavioral_observations_and_testing_conditions_pg1_c: "",
    behavioral_observations_and_testing_conditions_pg1_d: "",
    behavioral_observations_and_testing_conditions_pg1_e: "",
    behavioral_observations_and_testing_conditions_pg1_f: "",
  });

  const next = "/behavioral_observations_and_testing_conditions_pg_2";
  const back = "/material_resources_pg_1";

  const handleFieldChange = (e) => {
    setPatientBehavioralObservationsPg1({
      ...patientBehavioralObservationsPg1,
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
      behavioral_observations_and_testing_conditions_pg1_a:
        patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_a,
      behavioral_observations_and_testing_conditions_pg1_b:
        patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_b,
      behavioral_observations_and_testing_conditions_pg1_c:
        patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_c,
      behavioral_observations_and_testing_conditions_pg1_d:
        patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_d,
      behavioral_observations_and_testing_conditions_pg1_e:
        patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_e,
      behavioral_observations_and_testing_conditions_pg1_f:
        patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_f,
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
        "behavioral_observations_and_testing_conditions_pg1_a",
        "behavioral_observations_and_testing_conditions_pg1_b",
        "behavioral_observations_and_testing_conditions_pg1_c",
        "behavioral_observations_and_testing_conditions_pg1_d",
        "behavioral_observations_and_testing_conditions_pg1_e",
        "behavioral_observations_and_testing_conditions_pg1_f",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientBehavioralObservationsPg1(filtered);
    });
  };

  useEffect(() => {
    getData();
  },);

  return (
    <div>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <h2 className="textWhite text-center mb-1">
            Behavioral Observations and Testing Conditions
          </h2>
          <div className="questionsContainer">
            <p className="textWhite text-center m-0 ">
              DO THIS IN MOMENT-NOT AFTER THE FACT
            </p>
            <div className="row mt-3">
              <div className="d-flex flex-wrap col-6 justify-content-center">
                <Label className="text-white text-center">
                  How did they express emotions?
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="behavioral_observations_and_testing_conditions_pg1_a"
                  name="behavioral_observations_and_testing_conditions_pg1_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_a
                  }
                />
              </div>
              <div className="d-flex flex-wrap col-6 justify-content-center">
                <Label className="text-white text-center">
                  What was the person's conduct in the office?
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="behavioral_observations_and_testing_conditions_pg1_b"
                  name="behavioral_observations_and_testing_conditions_pg1_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_b
                  }
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="d-flex flex-wrap col-6 justify-content-center">
                <Label className="text-white text-center mt-2 mb-2">
                  What was the person's conduct in the office? Withdrawn, Hoodie
                  Shirt, Clingy, Needy, Aggressive, Frightening
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="behavioral_observations_and_testing_conditions_pg1_c"
                  name="behavioral_observations_and_testing_conditions_pg1_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_c
                  }
                />
              </div>
              <div className="d-flex flex-wrap col-6 justify-content-center align-items-end">
                <Label className="textWhite d-flex text-center align-items-end m-0 p-0">
                  Are they able to focus?
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="behavioral_observations_and_testing_conditions_pg1_d"
                  name="behavioral_observations_and_testing_conditions_pg1_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_d
                  }
                  placeholder=""
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="d-flex flex-wrap col-6 justify-content-center">
                <Label className="text-white text-center mt-2 mb-2">
                  Able to synthesize information presented?
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="behavioral_observations_and_testing_conditions_pg1_e"
                  name="behavioral_observations_and_testing_conditions_pg1_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_e
                  }
                />
              </div>
              <div className="d-flex flex-wrap col-6 justify-content-center align-items-end">
                <Label className="textWhite d-flex text-center align-items-end m-0 p-0">
                  How do they observe the office and people around them?
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="behavioral_observations_and_testing_conditions_pg1_f"
                  name="behavioral_observations_and_testing_conditions_pg1_f"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientBehavioralObservationsPg1.behavioral_observations_and_testing_conditions_pg1_f
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            back={back}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientBehavioralObservationsPg1}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            item={item}
          />
        </div>
      </div>
    </div>
  );
}

export default BehavioralObservationsPg1;
