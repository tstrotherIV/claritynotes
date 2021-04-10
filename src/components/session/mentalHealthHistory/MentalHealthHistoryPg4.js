import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
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
  ] = useState({});

  const next = "/mental_health_history_pg_5";
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

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg4(props.patientDetails);
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
                When people reject you do you tell yourself, “I don’t care, or
                it doesn’t matter?”
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
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
                When you get angry do you take it out on yourself or others? How
                so?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
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
                Do you ever feel bitter? What does that look like? Do you take
                it out on others?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
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
              <h4 className="textWhite centerItem">
                How do you feel about rules?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg4_d"
                  name="mental_health_history_pg4_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg4.mental_health_history_pg4_d
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
