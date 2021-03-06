import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg17(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg17,
    setPatientMentalHealthHistory_pg17,
  ] = useState({});

  const next = "/mental_health_history_pg_18";
  const back = "/mental_health_history_pg_16";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg17({
      ...patientMentalHealthHistory_pg17,
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
      mental_health_history_pg17_a:
        patientMentalHealthHistory_pg17.mental_health_history_pg17_a,
      mental_health_history_pg17_b:
        patientMentalHealthHistory_pg17.mental_health_history_pg17_b,
      mental_health_history_pg17_c:
        patientMentalHealthHistory_pg17.mental_health_history_pg17_c,
      mental_health_history_pg17_d:
        patientMentalHealthHistory_pg17.mental_health_history_pg17_d,
      mental_health_history_pg17_e:
        patientMentalHealthHistory_pg17.mental_health_history_pg17_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg17(props.patientDetails);
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
                When under stress have you ever just fallen apart?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg17_a"
                  name="mental_health_history_pg17_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg17.mental_health_history_pg17_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you been accused of being misunderstanding people’s
                motives?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg17_b"
                  name="mental_health_history_pg17_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg17.mental_health_history_pg17_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you feel that your thoughts and actions are outside of your
                control?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg17_c"
                  name="mental_health_history_pg17_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg17.mental_health_history_pg17_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever had a conversation with someone, and they complain
                you are hard to follow?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg17_d"
                  name="mental_health_history_pg17_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg17.mental_health_history_pg17_d
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Describe your self-image for me? How do you see yourself?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg17_e"
                  name="mental_health_history_pg17_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg17.mental_health_history_pg17_e
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
              patientNotes={patientMentalHealthHistory_pg17}
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

export default MentalHealthHistoryPg17;
