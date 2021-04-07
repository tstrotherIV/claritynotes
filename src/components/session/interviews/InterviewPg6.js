import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

import "./interviews.scss";

function InterviewPg6(props) {
  const [item, setItem] = useState("");
  const [patientInterview_pg6, setPatientInterview_pg6] = useState({});

  const next = "/interview_pg_7";
  const back = "/interview_pg_5";

  const handleFieldChange = (e) => {
    setPatientInterview_pg6({
      ...patientInterview_pg6,
      [e.target.name]: e.target.value,
    });
  };

  const captureFieldName = (e) => {
    setItem(e.target.name);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      interview_pg6_a: patientInterview_pg6.interview_pg6_a,
      interview_pg6_b: patientInterview_pg6.interview_pg6_b,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientInterview_pg6(props.patientDetails);
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
            What steps have you taken with DHR already?
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
                name="interview_pg6_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg6.interview_pg6_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            What is your understanding of why you are here today?
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
                name="interview_pg6_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg6.interview_pg6_b}
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
            patientNotes={patientInterview_pg6}
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

export default InterviewPg6;
