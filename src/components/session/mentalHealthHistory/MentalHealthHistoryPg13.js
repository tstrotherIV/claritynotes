import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg13(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg13,
    setPatientMentalHealthHistory_pg13,
  ] = useState({});

  const next = "/mental_health_history_pg_14";
  const back = "/mental_health_history_pg_12";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg13({
      ...patientMentalHealthHistory_pg13,
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
      mental_health_history_pg13_a:
        patientMentalHealthHistory_pg13.mental_health_history_pg13_a,
      mental_health_history_pg13_b:
        patientMentalHealthHistory_pg13.mental_health_history_pg13_b,
      mental_health_history_pg13_c:
        patientMentalHealthHistory_pg13.mental_health_history_pg13_c,
      mental_health_history_pg13_d:
        patientMentalHealthHistory_pg13.mental_health_history_pg13_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg13(props.patientDetails);
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
                Do you find that you take life too seriously and worry often?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg13_a"
                  name="mental_health_history_pg13_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg13.mental_health_history_pg13_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you find when you have a duty or worry, you act quickly to
                get it off your plate?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg13_b"
                  name="mental_health_history_pg13_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg13.mental_health_history_pg13_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you have any strange fears or phobias?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg13_c"
                  name="mental_health_history_pg13_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg13.mental_health_history_pg13_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever felt damaged, broken, and alienated from others?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg13_d"
                  name="mental_health_history_pg13_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg13.mental_health_history_pg13_d
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
              patientNotes={patientMentalHealthHistory_pg13}
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

export default MentalHealthHistoryPg13;
