import React, { useState, useEffect } from "react";
import { Label, Input } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg2(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg2,
    setPatientMentalHealthHistory_pg2,
  ] = useState({});

  const next = "/mental_health_history_pg_3";
  const back = "/mental_health_history_pg_1";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg2({
      ...patientMentalHealthHistory_pg2,
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
      mental_health_history_pg2_a:
        patientMentalHealthHistory_pg2.mental_health_history_pg2_a,
      mental_health_history_pg2_b:
        patientMentalHealthHistory_pg2.mental_health_history_pg2_b,
      mental_health_history_pg2_c:
        patientMentalHealthHistory_pg2.mental_health_history_pg2_c,
      mental_health_history_pg2_d:
        patientMentalHealthHistory_pg2.mental_health_history_pg2_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg2(props.patientDetails);
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
                Did this loss leave you feeling hollow or empty feeling inside?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg2_a"
                  name="mental_health_history_pg2_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg2.mental_health_history_pg2_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you ever try to avoid thinking about things?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg2_b"
                  name="mental_health_history_pg2_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg2.mental_health_history_pg2_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you find that you try to remain on the sunny side of life?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg2_c"
                  name="mental_health_history_pg2_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg2.mental_health_history_pg2_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever found yourself thinking, “I am not going to think
                about this right now?”
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg2_d"
                  name="mental_health_history_pg2_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg2.mental_health_history_pg2_d
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
              patientNotes={patientMentalHealthHistory_pg2}
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

export default MentalHealthHistoryPg2;
