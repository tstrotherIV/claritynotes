import React, { useState, useEffect } from "react";
import { Label, Input } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg4(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg4,
    setPatientMentalHealthHistory_pg4,
  ] = useState({
    mental_health_history_pg4_a: "",
    mental_health_history_pg4_b: "",
    mental_health_history_pg4_c: "",
    mental_health_history_pg4_d: false,
  });

  const next = "/medical_history_health_concerns_limitations_pg_1";
  const back = "/mental_health_history_pg_3";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg4({
      ...patientMentalHealthHistory_pg4,
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
      mental_health_history_pg4_a:
        patientMentalHealthHistory_pg4.mental_health_history_pg4_a,
      mental_health_history_pg4_b:
        patientMentalHealthHistory_pg4.mental_health_history_pg4_b,
      mental_health_history_pg4_c:
        patientMentalHealthHistory_pg4.mental_health_history_pg4_c,
      mental_health_history_pg4_d:
        patientMentalHealthHistory_pg4.mental_health_history_pg4_d,
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
        "mental_health_history_pg4_a",
        "mental_health_history_pg4_b",
        "mental_health_history_pg4_c",
        "mental_health_history_pg4_d",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientMentalHealthHistory_pg4(filtered);
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
          <h2 className="textWhite text-center mb-4">Mental Health History</h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">What was it about?</h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg4_a"
                  name="mental_health_history_pg4_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg4.mental_health_history_pg4_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever cut or deliberately injured yourself?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg4_b"
                  name="mental_health_history_pg4_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg4.mental_health_history_pg4_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever thought about hurting yourself or anyone else?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg4_c"
                  name="mental_health_history_pg4_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg4.mental_health_history_pg4_c
                  }
                />
              </div>
            </div>
            <div className="textWhite">
              IF SUICIDE REPORTED, ASK ABOUT A PLAN? If yes, CALL 911. IF NOT
              SELECT:
            </div>
          </div>
          <div className="siblingsFields">
            <div className="m-1">
              <Input
                type="checkbox"
                className=""
                id="mental_health_history_pg4_d"
                name="mental_health_history_pg4_d"
                checked={
                  patientMentalHealthHistory_pg4.mental_health_history_pg4_d
                }
                onChange={handleFieldChange}
              />
              <Label className="textWhite" for="firstName">
                [Patient Name, First] denied any current intent or plan.
              </Label>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientMentalHealthHistory_pg4}
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

export default MentalHealthHistoryPg4;
