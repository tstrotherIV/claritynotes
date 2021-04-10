import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg5(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg5,
    setPatientMentalHealthHistory_pg5,
  ] = useState({});

  const next = "/mental_health_history_pg_6";
  const back = "/mental_health_history_pg_4";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg5({
      ...patientMentalHealthHistory_pg5,
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
      mental_health_history_pg5_a:
        patientMentalHealthHistory_pg5.mental_health_history_pg5_a,
      mental_health_history_pg5_b:
        patientMentalHealthHistory_pg5.mental_health_history_pg5_b,
      mental_health_history_pg5_c:
        patientMentalHealthHistory_pg5.mental_health_history_pg5_c,
      mental_health_history_pg5_d:
        patientMentalHealthHistory_pg5.mental_health_history_pg5_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg5(props.patientDetails);
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
                Do you ever find you have to bend the rules?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg5_a"
                  name="mental_health_history_pg5_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg5.mental_health_history_pg5_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you find that you are cautious about allowing yourself to
                become emotionally close to others?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg5_b"
                  name="mental_health_history_pg5_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg5.mental_health_history_pg5_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever had problems with trust and vulnerability, and
                this created problems with romantic relationships?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg5_c"
                  name="mental_health_history_pg5_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg5.mental_health_history_pg5_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you ever experience comfort in letting go of control and
                decision making?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg5_d"
                  name="mental_health_history_pg5_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg5.mental_health_history_pg5_d
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
              patientNotes={patientMentalHealthHistory_pg5}
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

export default MentalHealthHistoryPg5;
