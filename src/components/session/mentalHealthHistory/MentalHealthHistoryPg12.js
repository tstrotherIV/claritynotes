import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg12(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg12,
    setPatientMentalHealthHistory_pg12,
  ] = useState({});

  const next = "/mental_health_history_pg_13";
  const back = "/mental_health_history_pg_11";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg12({
      ...patientMentalHealthHistory_pg12,
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
      mental_health_history_pg12_a:
        patientMentalHealthHistory_pg12.mental_health_history_pg12_a,
      mental_health_history_pg12_b:
        patientMentalHealthHistory_pg12.mental_health_history_pg12_b,
      mental_health_history_pg12_c:
        patientMentalHealthHistory_pg12.mental_health_history_pg12_c,
      mental_health_history_pg12_d:
        patientMentalHealthHistory_pg12.mental_health_history_pg12_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg12(props.patientDetails);
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
                Does your lack of self-confidence create a tendency to
                procrastinate and feel overwhelmed by the responsibilities you
                feel obligated to do?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg12_a"
                  name="mental_health_history_pg12_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg12.mental_health_history_pg12_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you underestimate your own abilities despite evidence of
                successes?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg12_b"
                  name="mental_health_history_pg12_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg12.mental_health_history_pg12_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Are you indecisive and suffer from thinking so much that you are
                slower to act?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg12_c"
                  name="mental_health_history_pg12_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg12.mental_health_history_pg12_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Are you generally apprehensive about life?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg12_d"
                  name="mental_health_history_pg12_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg12.mental_health_history_pg12_d
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
              patientNotes={patientMentalHealthHistory_pg12}
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

export default MentalHealthHistoryPg12;
