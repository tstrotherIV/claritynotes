import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg22(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg22,
    setPatientMentalHealthHistory_pg22,
  ] = useState({});

  const next = "/mental_health_history_pg_23";
  const back = "/mental_health_history_pg_21";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg22({
      ...patientMentalHealthHistory_pg22,
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
      mental_health_history_pg22_a:
        patientMentalHealthHistory_pg22.mental_health_history_pg22_a,
      mental_health_history_pg22_b:
        patientMentalHealthHistory_pg22.mental_health_history_pg22_b,
      mental_health_history_pg22_c:
        patientMentalHealthHistory_pg22.mental_health_history_pg22_c,
      mental_health_history_pg22_d:
        patientMentalHealthHistory_pg22.mental_health_history_pg22_d,
      mental_health_history_pg22_e:
        patientMentalHealthHistory_pg22.mental_health_history_pg22_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg22(props.patientDetails);
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
                Do you ever use drugs to just chill?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg22_a"
                  name="mental_health_history_pg22_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg22.mental_health_history_pg22_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you prefer to be alone rather than with others?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg22_b"
                  name="mental_health_history_pg22_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg22.mental_health_history_pg22_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you find that you are shy, interpersonally uncomfortable,
                insecure, introverted, and submissive?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg22_c"
                  name="mental_health_history_pg22_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg22.mental_health_history_pg22_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you have good social supports?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg22_d"
                  name="mental_health_history_pg22_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg22.mental_health_history_pg22_d
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever had problems in establishing meaningful
                attachments with others?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg22_e"
                  name="mental_health_history_pg22_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg22.mental_health_history_pg22_e
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
              patientNotes={patientMentalHealthHistory_pg22}
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

export default MentalHealthHistoryPg22;
