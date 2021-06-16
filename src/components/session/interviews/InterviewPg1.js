import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

import "./interviews.scss";

function InterviewPg1(props) {
  const [item, setItem] = useState("");
  const [patientInterview_pg1, setPatientInterview_pg1] = useState({});

  const next = "/interview_pg_2";
  const back = "/psychological_evaluation_additional_data";

  const handleFieldChange = (e) => {
    setPatientInterview_pg1({
      ...patientInterview_pg1,
      [e.target.name]: e.target.value,
    });
  };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  const updatePatient = () => {
    const editedPatient = {
      interview_pg1_a: patientInterview_pg1.interview_pg1_a,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  const getData = async () => {
    setPatientInterview_pg1(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <div className="header">
            <h2 className="textWhite">Interviews</h2>
            <h5 className="textWhite">
              Perspective from {props.patientDetails.patient_first_name}{" "}
              {props.patientDetails.patient_last_name}:
            </h5>
            <h4 className="textWhite">
              The following is from {props.patientDetails.patient_first_name}’s
              perspective unless otherwise noted.
            </h4>
            <h4 className="textWhite">
              {props.patientDetails.patient_first_name}, how many times has DHR
              directly or indirectly interacted with you?
            </h4>
          </div>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
               {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg1_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg1.interview_pg1_a}
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
            patientNotes={patientInterview_pg1}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            item={item}
          />
        </div>
      </div>
    </>
  );
}

export default InterviewPg1;
