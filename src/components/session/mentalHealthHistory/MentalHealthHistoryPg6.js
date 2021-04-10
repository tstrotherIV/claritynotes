import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg6(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg6,
    setPatientMentalHealthHistory_pg6,
  ] = useState({});

  const next = "/mental_health_history_pg_7";
  const back = "/mental_health_history_pg_5";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg6({
      ...patientMentalHealthHistory_pg6,
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
      mental_health_history_pg6_a:
        patientMentalHealthHistory_pg6.mental_health_history_pg6_a,
      mental_health_history_pg6_b:
        patientMentalHealthHistory_pg6.mental_health_history_pg6_b,
      mental_health_history_pg6_c:
        patientMentalHealthHistory_pg6.mental_health_history_pg6_c,
      mental_health_history_pg6_d:
        patientMentalHealthHistory_pg6.mental_health_history_pg6_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg6(props.patientDetails);
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
                What happens when someone tries to place rules and control your
                behavior?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg6_a"
                  name="mental_health_history_pg6_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg6.mental_health_history_pg6_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                How do you react to your options being restricted?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg6_b"
                  name="mental_health_history_pg6_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg6.mental_health_history_pg6_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Does part of you not like control and restrictions, but at the
                same time find yourself depending on another at other times?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg6_c"
                  name="mental_health_history_pg6_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg6.mental_health_history_pg6_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever had to selectively report things in order to get
                you needs met?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg6_d"
                  name="mental_health_history_pg6_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg6.mental_health_history_pg6_d
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
              patientNotes={patientMentalHealthHistory_pg6}
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

export default MentalHealthHistoryPg6;
