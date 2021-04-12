import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg19(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg19,
    setPatientMentalHealthHistory_pg19,
  ] = useState({});

  const next = "/mental_health_history_pg_20";
  const back = "/mental_health_history_pg_18";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg19({
      ...patientMentalHealthHistory_pg19,
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
      mental_health_history_pg19_a:
        patientMentalHealthHistory_pg19.mental_health_history_pg19_a,
      mental_health_history_pg19_b:
        patientMentalHealthHistory_pg19.mental_health_history_pg19_b,
      mental_health_history_pg19_c:
        patientMentalHealthHistory_pg19.mental_health_history_pg19_c,
      mental_health_history_pg19_d:
        patientMentalHealthHistory_pg19.mental_health_history_pg19_d,
      mental_health_history_pg19_e:
        patientMentalHealthHistory_pg19.mental_health_history_pg19_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg19(props.patientDetails);
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
                Do you ever find you get angry easily and then over it just as
                quickly?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg19_a"
                  name="mental_health_history_pg19_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg19.mental_health_history_pg19_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">Do you joke a lot?</h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg19_b"
                  name="mental_health_history_pg19_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg19.mental_health_history_pg19_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                When people get in your way do you get quick-tempered or
                irritable?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg19_c"
                  name="mental_health_history_pg19_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg19.mental_health_history_pg19_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                When people drive too slowly, does it aggravate you?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg19_d"
                  name="mental_health_history_pg19_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg19.mental_health_history_pg19_d
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Has impulsivity ever been an issue?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg19_e"
                  name="mental_health_history_pg19_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg19.mental_health_history_pg19_e
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
              patientNotes={patientMentalHealthHistory_pg19}
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

export default MentalHealthHistoryPg19;
