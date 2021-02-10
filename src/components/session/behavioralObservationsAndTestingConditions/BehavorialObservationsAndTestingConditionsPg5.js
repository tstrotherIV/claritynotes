import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";

// pdf page 102

function BehavioralObservationsPg5(props) {
  const [item, setItem] = useState("");
  const [
    patientBehavioralObservationsPg5,
    setPatientBehavioralObservationsPg5,
  ] = useState({
    behavioral_observations_and_testing_conditions_pg5_a: false,
    behavioral_observations_and_testing_conditions_pg5_b: false,
    behavioral_observations_and_testing_conditions_pg5_c: false,
    behavioral_observations_and_testing_conditions_pg5_d: false,
    behavioral_observations_and_testing_conditions_pg5_e: false,
    behavioral_observations_and_testing_conditions_pg5_f: false,
    behavioral_observations_and_testing_conditions_pg5_g: false,
  });

  const next = "/procedures_administered_pg_1";
  const back = "/behavioral_observations_and_testing_conditions_pg_4";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientBehavioralObservationsPg5({
      ...patientBehavioralObservationsPg5,
      [e.target.name]: value,
    });
  };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      behavioral_observations_and_testing_conditions_pg5_a:
        patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_a,
      behavioral_observations_and_testing_conditions_pg5_b:
        patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_b,
      behavioral_observations_and_testing_conditions_pg5_c:
        patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_c,
      behavioral_observations_and_testing_conditions_pg5_d:
        patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_d,
      behavioral_observations_and_testing_conditions_pg5_e:
        patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_e,
      behavioral_observations_and_testing_conditions_pg5_f:
        patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_f,
      behavioral_observations_and_testing_conditions_pg5_g:
        patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_g,
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
        "behavioral_observations_and_testing_conditions_pg5_a",
        "behavioral_observations_and_testing_conditions_pg5_b",
        "behavioral_observations_and_testing_conditions_pg5_c",
        "behavioral_observations_and_testing_conditions_pg5_d",
        "behavioral_observations_and_testing_conditions_pg5_e",
        "behavioral_observations_and_testing_conditions_pg5_f",
        "behavioral_observations_and_testing_conditions_pg5_g",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientBehavioralObservationsPg5(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div id="page-container">
        <div id="content-wrap">
           
          <h2 className="textWhite text-center mb-1">
            Behavioral Observations and Testing Conditions
          </h2>
          <div className="questionsContainerWide">
            <p className="textWhite text-center m-0 ">
              Please note the following behaviors you observed in your session
              with [Patient Name, First] [Patient Name, Last].
            </p>
            <div className="row mt-4">
              <div className="d-flex flex-wrap col-6">
                <input
                  className="m-1"
                  type="checkbox"
                  id="behavioral_observations_and_testing_conditions_pg5_a"
                  name="behavioral_observations_and_testing_conditions_pg5_a"
                  checked={
                    patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_a
                  }
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                />
                <Label className="text-white m-0 p-0">Happiness</Label>
                <div className="text-white col-12">
                  Corners of lips turned up. Slightly raised cheeks. Crows feet
                  at side of eyes.
                </div>
              </div>

              <div className="d-flex flex-wrap col-6">
                <input
                  className="m-1"
                  type="checkbox"
                  id="behavioral_observations_and_testing_conditions_pg5_b"
                  name="behavioral_observations_and_testing_conditions_pg5_b"
                  checked={
                    patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_b
                  }
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                />
                <Label className="text-white  m-0 p-0">Contempt</Label>
                <div className="text-white col-12 d-flex align-text-top">
                  One side of lips raised. Head slightly back.
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="d-flex flex-wrap col-6">
                <input
                  className="m-1"
                  type="checkbox"
                  id="behavioral_observations_and_testing_conditions_pg5_c"
                  name="behavioral_observations_and_testing_conditions_pg5_c"
                  checked={
                    patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_c
                  }
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                />
                <Label className="text-white  m-0 p-0">Sadness</Label>
                <div className="text-white col-12">
                  Corners of lips turned down. Eyebrows slanted out, pulled
                  together and raised in middle of forehead.
                </div>
              </div>
              <div className="d-flex flex-wrap col-6">
                <input
                  className="m-1"
                  type="checkbox"
                  id="behavioral_observations_and_testing_conditions_pg5_d"
                  name="behavioral_observations_and_testing_conditions_pg5_d"
                  checked={
                    patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_d
                  }
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                />
                <Label className="text-white m-0 p-0">Disgust</Label>
                <div className="text-white col-12">
                  Raised upper lip. Wrinkled nose.
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="d-flex flex-wrap col-6">
                <input
                  className="m-1"
                  type="checkbox"
                  id="behavioral_observations_and_testing_conditions_pg5_e"
                  name="behavioral_observations_and_testing_conditions_pg5_e"
                  checked={
                    patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_e
                  }
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                />
                <Label className="text-white  m-0 p-0">Anger</Label>
                <div className="text-white col-12">
                  Lips pressed together. Corners of lips flat or turned down.
                  Eyebrows slanted in, lowered in middle of forehead. Widened
                  eyes (brief stare).
                </div>
              </div>
              <div className="d-flex flex-wrap col-6">
                <input
                  className="m-1"
                  type="checkbox"
                  id="behavioral_observations_and_testing_conditions_pg5_f"
                  name="behavioral_observations_and_testing_conditions_pg5_f"
                  checked={
                    patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_f
                  }
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                />
                <Label className="text-white  m-0 p-0">Surprise</Label>
                <div className="text-white col-12">
                  Opened mouth. Raised eyebrows. Widened eyes.
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="d-flex flex-wrap col-6">
                <input
                  className="m-1"
                  type="checkbox"
                  id="behavioral_observations_and_testing_conditions_pg5_g"
                  name="behavioral_observations_and_testing_conditions_pg5_g"
                  checked={
                    patientBehavioralObservationsPg5.behavioral_observations_and_testing_conditions_pg5_g
                  }
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                />
                <Label className="text-white  m-0 p-0">Fear</Label>
                <div className="text-white col-12">
                  Widened mouth, slightly open. Wider eyes with raised eyebrows.
                </div>
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
            patientNotes={patientBehavioralObservationsPg5}
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

export default BehavioralObservationsPg5;
