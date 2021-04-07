import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

import "./interviews.scss";

function InterviewPg7(props) {
  const [item, setItem] = useState("");
  const [patientInterview_pg7, setPatientInterview_pg7] = useState({});

  const next = "/interview_pg_8";
  const back = "/interview_pg_6";

  const handleFieldChange = (e) => {
    setPatientInterview_pg7({
      ...patientInterview_pg7,
      [e.target.name]: e.target.value,
    });
  };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      interview_pg7_a: patientInterview_pg7.interview_pg7_a,
      interview_pg7_b: patientInterview_pg7.interview_pg7_b,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientInterview_pg7(props.patientDetails);
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
          </div>
          <h4 className="textWhite centerItem">
            How do you typically discipline your child when they misbehave?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg7_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg7.interview_pg7_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            How are you a good fit interpersonally (give and take, interactive,
            relationship style)?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg7_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg7.interview_pg7_b}
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
            patientNotes={patientInterview_pg7}
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

export default InterviewPg7;
