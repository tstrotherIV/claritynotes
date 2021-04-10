import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg9(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg9,
    setPatientMentalHealthHistory_pg9,
  ] = useState({});

  const next = "/mental_health_history_pg_10";
  const back = "/mental_health_history_pg_8";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg9({
      ...patientMentalHealthHistory_pg9,
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
      mental_health_history_pg9_a:
        patientMentalHealthHistory_pg9.mental_health_history_pg9_a,
      mental_health_history_pg9_b:
        patientMentalHealthHistory_pg9.mental_health_history_pg9_b,
      mental_health_history_pg9_c:
        patientMentalHealthHistory_pg9.mental_health_history_pg9_c,
      mental_health_history_pg9_d:
        patientMentalHealthHistory_pg9.mental_health_history_pg9_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg9(props.patientDetails);
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
                  id="mental_health_history_pg9_a"
                  name="mental_health_history_pg9_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg9.mental_health_history_pg9_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Has there been a time when you felt humiliated or criticized?
                Maybe even by a parent or trusted loved one?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg9_b"
                  name="mental_health_history_pg9_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg9.mental_health_history_pg9_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you ever find that you are rigid about things, perhaps to
                protect against rejection and criticism?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg9_c"
                  name="mental_health_history_pg9_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg9.mental_health_history_pg9_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have ever felt like no matter what you are never good enough?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg9_d"
                  name="mental_health_history_pg9_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg9.mental_health_history_pg9_d
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
              patientNotes={patientMentalHealthHistory_pg9}
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

export default MentalHealthHistoryPg9;
