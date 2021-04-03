import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import "./interviews.scss";
import DataManager from "../../../data_module/DataManager";

function InterviewPg4(props) {
  const [item, setItem] = useState("");
  const [patientInterview_pg4, setPatientInterview_pg4] = useState({
    interview_pg4_a: "",
    interview_pg4_b: "",
  });

  const next = "/interview_pg_5";
  const back = "/interview_pg_3";

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle3 = () => setModal(!modal);

  const handleFieldChange = (e) => {
    setPatientInterview_pg4({
      ...patientInterview_pg4,
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
      interview_pg4_a: patientInterview_pg4.interview_pg4_a,
      interview_pg4_b: patientInterview_pg4.interview_pg4_b,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientInterview_pg4(props.patientDetails);
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
                id="interview_pg4_a"
                name="interview_pg4_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg4.interview_pg4_a}
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
                id="interview_pg4_b"
                name="interview_pg4_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg4.interview_pg4_b}
              />
            </div>
          </div>
          <div>
            <div id="footer">
              <ButtonNavigation
                next={next}
                back={back}
                updatePatient={updatePatient}
                patient={props.patientId}
                patientNotes={patientInterview_pg4}
              />
              <TermOfParentalRights
                questionId={item}
                patientId={props.patientId}
                item={item}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InterviewPg4;
