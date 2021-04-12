import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg23(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg23,
    setPatientMentalHealthHistory_pg23,
  ] = useState({});

  const next = "/medical_history_health_concerns_limitations_pg_1";
  const back = "/mental_health_history_pg_22";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg23({
      ...patientMentalHealthHistory_pg23,
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
      mental_health_history_pg23_a:
        patientMentalHealthHistory_pg23.mental_health_history_pg23_a,
      mental_health_history_pg23_b:
        patientMentalHealthHistory_pg23.mental_health_history_pg23_b,
      mental_health_history_pg23_c:
        patientMentalHealthHistory_pg23.mental_health_history_pg23_c,
      mental_health_history_pg23_d:
        patientMentalHealthHistory_pg23.mental_health_history_pg23_d,
      mental_health_history_pg23_e:
        patientMentalHealthHistory_pg23.mental_health_history_pg23_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg23(props.patientDetails);
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
                Have you ever seen yourself in an emotional container? Like
                self-contained, autonomous, and adaptive in situations requiring
                sustained periods of solitary activities?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg23_a"
                  name="mental_health_history_pg23_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg23.mental_health_history_pg23_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever gotten lost in thoughts? Like ruminate or
                self-absorbed?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg23_b"
                  name="mental_health_history_pg23_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg23.mental_health_history_pg23_b
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
              patientNotes={patientMentalHealthHistory_pg23}
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

export default MentalHealthHistoryPg23;
