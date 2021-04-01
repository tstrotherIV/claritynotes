import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

import "./interviews.scss";

function Interview_Pg2(props) {
  const [item, setItem] = useState("");
  const [patientInterview_pg2, setPatientInterview_pg2] = useState({});

  const next = "/interview_pg_3";
  const back = "/interview_pg_1";

  const handleFieldChange = (e) => {
    setPatientInterview_pg2({
      ...patientInterview_pg2,
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
      interview_pg2_a: patientInterview_pg2.interview_pg2_a,
      interview_pg2_b: patientInterview_pg2.interview_pg2_b,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = async () => {
    const check_for_patient = await sessionStorage.getItem("patient_id");
    const patientInfo = await DataManager.getPatient(check_for_patient);

    let { interview_pg2_a, interview_pg2_b } = patientInfo;
    setPatientInterview_pg2({
      interview_pg2_a,
      interview_pg2_b,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <div className="header">
            <h2 className="textWhite">Interviews</h2>
          </div>
          <h4 className="textWhite centerItem">What has DHR alleged?</h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg2_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg2.interview_pg2_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            What has been misconstrued by DHR?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg2_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg2.interview_pg2_b}
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
            patientNotes={patientInterview_pg2}
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

export default Interview_Pg2;
