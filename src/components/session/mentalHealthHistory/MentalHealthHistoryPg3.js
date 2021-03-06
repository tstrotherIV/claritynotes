import React, { useState, useEffect } from "react";
import { Label, Input } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg3(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg3,
    setPatientMentalHealthHistory_pg3,
  ] = useState({});

  const next = "/mental_health_history_pg_4";
  const back = "/mental_health_history_pg_2";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg3({
      ...patientMentalHealthHistory_pg3,
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
      mental_health_history_pg3_a:
        patientMentalHealthHistory_pg3.mental_health_history_pg3_a,
      mental_health_history_pg3_b:
        patientMentalHealthHistory_pg3.mental_health_history_pg3_b,
      mental_health_history_pg3_c:
        patientMentalHealthHistory_pg3.mental_health_history_pg3_c,
      mental_health_history_pg3_d:
        patientMentalHealthHistory_pg3.mental_health_history_pg3_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg3(props.patientDetails);
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
              It is important for you to stay positive no matter what?
              </h4>
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
              When you have a setback in your life, do you find yourself feeling numb?
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
              <h4 className="textWhite centerItem">
              When others are upset, do you find you are indifferent, or at least try to be?
              </h4>
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
              <h4 className="textWhite centerItem">
              Have you ever wanted to be numb to stop the hurt or being vulnerable anymore?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg3_d"
                  name="mental_health_history_pg3_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg3.mental_health_history_pg3_d
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
