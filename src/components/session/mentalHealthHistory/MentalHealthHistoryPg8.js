import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg8(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg8,
    setPatientMentalHealthHistory_pg8,
  ] = useState({});

  const next = "/mental_health_history_pg_9";
  const back = "/mental_health_history_pg_7";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg8({
      ...patientMentalHealthHistory_pg8,
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
      mental_health_history_pg8_a:
        patientMentalHealthHistory_pg8.mental_health_history_pg8_a,
      mental_health_history_pg8_b:
        patientMentalHealthHistory_pg8.mental_health_history_pg8_b,
      mental_health_history_pg8_c:
        patientMentalHealthHistory_pg8.mental_health_history_pg8_c,
      mental_health_history_pg8_d:
        patientMentalHealthHistory_pg8.mental_health_history_pg8_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg8(props.patientDetails);
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
                Have you ever found yourself storing resentments?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg8_a"
                  name="mental_health_history_pg8_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg8.mental_health_history_pg8_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever been accused of being jealous?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg8_b"
                  name="mental_health_history_pg8_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg8.mental_health_history_pg8_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever received the feedback that you misunderstand the
                motives of others a bit too often?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg8_c"
                  name="mental_health_history_pg8_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg8.mental_health_history_pg8_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                What problems have you experienced from being sensitive,
                suspicious, or always carrying hurt with you?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg8_d"
                  name="mental_health_history_pg8_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg8.mental_health_history_pg8_d
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
              patientNotes={patientMentalHealthHistory_pg8}
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

export default MentalHealthHistoryPg8;
