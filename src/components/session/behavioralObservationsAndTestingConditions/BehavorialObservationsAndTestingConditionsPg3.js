import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
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
    behavioral_observations_and_testing_conditions_pg3_g: "",
    behavioral_observations_and_testing_conditions_pg3_h: "",
    behavioral_observations_and_testing_conditions_pg3_i: "",
    behavioral_observations_and_testing_conditions_pg3_j: "",
    behavioral_observations_and_testing_conditions_pg3_k: "",
    behavioral_observations_and_testing_conditions_pg3_l: "",
  });

  const next = "/behavioral_observations_and_testing_conditions_pg_4";
  const back = "/behavioral_observations_and_testing_conditions_pg_2";

  const handleFieldChange = (e) => {
    setPatientBehavioralObservationsPg3({
      ...patientBehavioralObservationsPg3,
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
      behavioral_observations_and_testing_conditions_pg3_h:
        patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_h,
      behavioral_observations_and_testing_conditions_pg3_i:
        patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_i,
      behavioral_observations_and_testing_conditions_pg3_j:
        patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_j,
      behavioral_observations_and_testing_conditions_pg3_k:
        patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_k,
      behavioral_observations_and_testing_conditions_pg3_l:
        patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_l,
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
        "behavioral_observations_and_testing_conditions_pg3_a",
        "behavioral_observations_and_testing_conditions_pg3_b",
        "behavioral_observations_and_testing_conditions_pg3_c",
        "behavioral_observations_and_testing_conditions_pg3_d",
        "behavioral_observations_and_testing_conditions_pg3_e",
        "behavioral_observations_and_testing_conditions_pg3_f",
        "behavioral_observations_and_testing_conditions_pg3_g",
        "behavioral_observations_and_testing_conditions_pg3_h",
        "behavioral_observations_and_testing_conditions_pg3_i",
        "behavioral_observations_and_testing_conditions_pg3_j",
        "behavioral_observations_and_testing_conditions_pg3_k",
        "behavioral_observations_and_testing_conditions_pg3_l",
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
  }, );

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <h2 className="textWhite text-center mb-4">
            Behavioral Observations and Testing Conditions
          </h2>
          <div className="text-center questionsContainer">
            <h4 className="textWhite centerItem">
              What was the patients height?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_a"
                name="behavioral_observations_and_testing_conditions_pg3_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_a}
              />
            </div>
            <h4 className="textWhite centerItem">
            What was the patients weight?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_b"
                name="behavioral_observations_and_testing_conditions_pg3_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_b}
              />
            </div>

            <h4 className="textWhite centerItem">
            What was the patients build?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_c"
                name="behavioral_observations_and_testing_conditions_pg3_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_c}
              />
            </div>

            <h4 className="textWhite centerItem">
              Was the patient dressed and groomed appropriately?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_d"
                name="behavioral_observations_and_testing_conditions_pg3_d"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_d}
              />
            </div>
            <h4 className="textWhite centerItem">
              Did the patient display signs of difficulties with fine or gross motor skills?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_e"
                name="behavioral_observations_and_testing_conditions_pg3_e"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_e}
              />
            </div>
            <h4 className="textWhite centerItem">
              Were the patients hearing and vision within normal limits?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_f"
                name="behavioral_observations_and_testing_conditions_pg3_f"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_f}
              />
            </div>
            <h4 className="textWhite centerItem">
              Was the patient easily understood?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_g"
                name="behavioral_observations_and_testing_conditions_pg3_g"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_g}
              />
            </div>
            <h4 className="textWhite centerItem">
              Did the patient appear movtiavted or unmotivated to complete the testing presented?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_h"
                name="behavioral_observations_and_testing_conditions_pg3_h"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_h}
              />
            </div>
            <h4 className="textWhite centerItem">
              Did the patient attend to instructions appropriately?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_i"
                name="behavioral_observations_and_testing_conditions_pg3_i"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_i}
              />
            </div>
            <h4 className="textWhite centerItem">
              Did the patient show (good/poor) effort and persistence?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_j"
                name="behavioral_observations_and_testing_conditions_pg3_j"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_j}
              />
            </div>
            <h4 className="textWhite centerItem">
              Did the patient appear to have trouble concentrating?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_k"
                name="behavioral_observations_and_testing_conditions_pg3_k"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_k}
              />
            </div>
            <h4 className="textWhite centerItem">
              Are todays test results believed to be valid except where indicated?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="behavioral_observations_and_testing_conditions_pg3_l"
                name="behavioral_observations_and_testing_conditions_pg3_l"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_l}
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
