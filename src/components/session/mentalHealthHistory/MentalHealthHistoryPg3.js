import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 68

function MentalHealthHistoryPg3(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg3,
    setPatientMentalHealthHistory_pg3,
  ] = useState({
    mental_health_history_pg3_a: "",
    mental_health_history_pg3_b: "",
    mental_health_history_pg3_c: "",
  });

  const next = "/mental_health_history_pg_4";
  const back = "/mental_health_history_pg_2";

  const handleFieldChange = (e) => {
    setPatientMentalHealthHistory_pg3({
      ...patientMentalHealthHistory_pg3,
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
      mental_health_history_pg3_a:
        patientMentalHealthHistory_pg3.mental_health_history_pg3_a,
      mental_health_history_pg3_b:
        patientMentalHealthHistory_pg3.mental_health_history_pg3_b,
      mental_health_history_pg3_c:
        patientMentalHealthHistory_pg3.mental_health_history_pg3_c,
    };

    DataManager.update("patients", editedPatient).then(() => {props.getData()});
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "mental_health_history_pg3_a",
        "mental_health_history_pg3_b",
        "mental_health_history_pg3_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientMentalHealthHistory_pg3(props.patientDetails);
    });
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
           
          <h2 className="textWhite text-center mb-4">Mental Health History</h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              How many times have you gone to your primary care doctor or urgent
              care clinic for mental health reasons?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg3_a"
                  name="mental_health_history_pg3_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg3.mental_health_history_pg3_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever needed to just talk?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg3_b"
                  name="mental_health_history_pg3_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg3.mental_health_history_pg3_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">Who did you talk to?</h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg3_c"
                  name="mental_health_history_pg3_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg3.mental_health_history_pg3_c
                  }
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
              patientNotes={patientMentalHealthHistory_pg3}
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

export default MentalHealthHistoryPg3;
