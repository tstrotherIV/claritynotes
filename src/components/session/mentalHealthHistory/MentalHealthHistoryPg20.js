import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg20(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg20,
    setPatientMentalHealthHistory_pg20,
  ] = useState({});

  const next = "/mental_health_history_pg_21";
  const back = "/mental_health_history_pg_19";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg20({
      ...patientMentalHealthHistory_pg20,
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
      mental_health_history_pg20_a:
        patientMentalHealthHistory_pg20.mental_health_history_pg20_a,
      mental_health_history_pg20_b:
        patientMentalHealthHistory_pg20.mental_health_history_pg20_b,
      mental_health_history_pg20_c:
        patientMentalHealthHistory_pg20.mental_health_history_pg20_c,
      mental_health_history_pg20_d:
        patientMentalHealthHistory_pg20.mental_health_history_pg20_d,
      mental_health_history_pg20_e:
        patientMentalHealthHistory_pg20.mental_health_history_pg20_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg20(props.patientDetails);
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
                Are you a “big concept” or “attention to detail” person?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg20_a"
                  name="mental_health_history_pg20_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg20.mental_health_history_pg20_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Does your lack of detail lead you to self-defeating behaviors?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg20_b"
                  name="mental_health_history_pg20_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg20.mental_health_history_pg20_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you dislike being controlled or limited?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg20_c"
                  name="mental_health_history_pg20_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg20.mental_health_history_pg20_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Are you talkative with others?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg20_d"
                  name="mental_health_history_pg20_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg20.mental_health_history_pg20_d
                  }
                />
              </div>
              <h4 className="textWhite centerItem">Do you have big dreams?</h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg20_e"
                  name="mental_health_history_pg20_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg20.mental_health_history_pg20_e
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
              patientNotes={patientMentalHealthHistory_pg20}
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

export default MentalHealthHistoryPg20;
