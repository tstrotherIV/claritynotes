import React, { useState, useEffect } from "react";
import { Label, Input } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg1(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg1,
    setPatientMentalHealthHistory_pg1,
  ] = useState({});

  const next = "/mental_health_history_pg_2";
  const back = "/substance_abuse_pg15";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg1({
      ...patientMentalHealthHistory_pg1,
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
      mental_health_history_pg1_a:
        patientMentalHealthHistory_pg1.mental_health_history_pg1_a,
      mental_health_history_pg1_b:
        patientMentalHealthHistory_pg1.mental_health_history_pg1_b,
      mental_health_history_pg1_c:
        patientMentalHealthHistory_pg1.mental_health_history_pg1_c,
      mental_health_history_pg1_d:
        patientMentalHealthHistory_pg1.mental_health_history_pg1_d,
      mental_health_history_pg1_e:
        patientMentalHealthHistory_pg1.mental_health_history_pg1_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg1(props.patientDetails);
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
                Have you ever feared or thought you were about to be killed or
                harmed?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg1_a"
                  name="mental_health_history_pg1_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg1.mental_health_history_pg1_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever been physically attacked? Do you have any chronic
                pain difficulties?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg1_b"
                  name="mental_health_history_pg1_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg1.mental_health_history_pg1_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you ever find that when you worry, your stomach worries with
                you? What does that look like?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg1_c"
                  name="mental_health_history_pg1_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg1.mental_health_history_pg1_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever had anyone very important to you pass away that
                you experienced as an irretrievable and significant loss in your
                life?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg1_d"
                  name="mental_health_history_pg1_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg1.mental_health_history_pg1_d
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
                id="mental_health_history_pg1_e"
                name="mental_health_history_pg1_e"
                checked={
                  patientMentalHealthHistory_pg1.mental_health_history_pg1_e
                }
                onChange={handleFieldChange}
              />
              <Label className="textWhite" for="firstName">
                {props.patientDetails.patient_first_name} denied any current
                intent or plan.
              </Label>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientMentalHealthHistory_pg1}
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

export default MentalHealthHistoryPg1;
