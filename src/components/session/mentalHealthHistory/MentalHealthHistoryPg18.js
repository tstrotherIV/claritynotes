import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg18(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg18,
    setPatientMentalHealthHistory_pg18,
  ] = useState({});

  const next = "/mental_health_history_pg_19";
  const back = "/mental_health_history_pg_17";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg18({
      ...patientMentalHealthHistory_pg18,
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
      mental_health_history_pg18_a:
        patientMentalHealthHistory_pg18.mental_health_history_pg18_a,
      mental_health_history_pg18_b:
        patientMentalHealthHistory_pg18.mental_health_history_pg18_b,
      mental_health_history_pg18_c:
        patientMentalHealthHistory_pg18.mental_health_history_pg18_c,
      mental_health_history_pg18_d:
        patientMentalHealthHistory_pg18.mental_health_history_pg18_d,
      mental_health_history_pg18_e:
        patientMentalHealthHistory_pg18.mental_health_history_pg18_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg18(props.patientDetails);
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
            <div className="interview_div1">
              <h4 className="textWhite centerItem">
                Is it hard for you to be intimate and emotionally close? What
                makes it hard?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg18_a"
                  name="mental_health_history_pg18_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg18.mental_health_history_pg18_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you like to dress differently to have others keep their
                distance?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg18_b"
                  name="mental_health_history_pg18_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg18.mental_health_history_pg18_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you see yourself as energetic, excitable, over-productive?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg18_c"
                  name="mental_health_history_pg18_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg18.mental_health_history_pg18_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Has anyone noted your speech is pressured, or too fast?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg18_d"
                  name="mental_health_history_pg18_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg18.mental_health_history_pg18_d
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever been accused of being charming?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg18_e"
                  name="mental_health_history_pg18_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg18.mental_health_history_pg18_e
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
              patientNotes={patientMentalHealthHistory_pg18}
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

export default MentalHealthHistoryPg18;
