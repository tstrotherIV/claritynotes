import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg21(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg21,
    setPatientMentalHealthHistory_pg21,
  ] = useState({});

  const next = "/mental_health_history_pg_22";
  const back = "/mental_health_history_pg_20";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg21({
      ...patientMentalHealthHistory_pg21,
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
      mental_health_history_pg21_a:
        patientMentalHealthHistory_pg21.mental_health_history_pg21_a,
      mental_health_history_pg21_b:
        patientMentalHealthHistory_pg21.mental_health_history_pg21_b,
      mental_health_history_pg21_c:
        patientMentalHealthHistory_pg21.mental_health_history_pg21_c,
      mental_health_history_pg21_d:
        patientMentalHealthHistory_pg21.mental_health_history_pg21_d,
      mental_health_history_pg21_e:
        patientMentalHealthHistory_pg21.mental_health_history_pg21_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg21(props.patientDetails);
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
              <h4 className="textWhite centerItem">Do you enjoy attention?</h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg21_a"
                  name="mental_health_history_pg21_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg21.mental_health_history_pg21_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you find that you switch topics often when talking?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg21_b"
                  name="mental_health_history_pg21_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg21.mental_health_history_pg21_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever overcommitted to too many things?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg21_c"
                  name="mental_health_history_pg21_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg21.mental_health_history_pg21_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">Are you religious?</h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg21_d"
                  name="mental_health_history_pg21_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg21.mental_health_history_pg21_d
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you have any political fantasies?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg21_e"
                  name="mental_health_history_pg21_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg21.mental_health_history_pg21_e
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
              patientNotes={patientMentalHealthHistory_pg21}
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

export default MentalHealthHistoryPg21;
