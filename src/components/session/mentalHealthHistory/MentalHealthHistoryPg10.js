import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg10(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg10,
    setPatientMentalHealthHistory_pg10,
  ] = useState({});

  const next = "/mental_health_history_pg_11";
  const back = "/mental_health_history_pg_9";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg10({
      ...patientMentalHealthHistory_pg10,
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
      mental_health_history_pg10_a:
        patientMentalHealthHistory_pg10.mental_health_history_pg10_a,
      mental_health_history_pg10_b:
        patientMentalHealthHistory_pg10.mental_health_history_pg10_b,
      mental_health_history_pg10_c:
        patientMentalHealthHistory_pg10.mental_health_history_pg10_c,
      mental_health_history_pg10_d:
        patientMentalHealthHistory_pg10.mental_health_history_pg10_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg10(props.patientDetails);
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
                Have you ever found yourself thinking ahead to anticipate what
                will go wrong next?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg10_a"
                  name="mental_health_history_pg10_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg10.mental_health_history_pg10_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Did you act or just resign yourself to the idea that it will all
                end badly anyway?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg10_b"
                  name="mental_health_history_pg10_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg10.mental_health_history_pg10_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you ever find that you are tense, anxious, and feeling
                guilty?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg10_c"
                  name="mental_health_history_pg10_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg10.mental_health_history_pg10_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you find that when you think about things you are self-critical?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg10_d"
                  name="mental_health_history_pg10_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg10.mental_health_history_pg10_d
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
              patientNotes={patientMentalHealthHistory_pg10}
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

export default MentalHealthHistoryPg10;
