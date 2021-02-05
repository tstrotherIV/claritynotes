import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 63

function HistoryOfLegalPg13(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg13, setPatientHistoryOfLegal_pg13] = useState({
    history_of_legal_pg13_a: "",
    history_of_legal_pg13_b: "",
    history_of_legal_pg13_c: "",
    history_of_legal_pg13_d: "",
    history_of_legal_pg13_e: "",
  });

  const next = "/history_of_legal_pg_14";
  const back = "/history_of_legal_pg_12";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg13({
      ...patientHistoryOfLegal_pg13,
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
      history_of_legal_pg13_a:
        patientHistoryOfLegal_pg13.history_of_legal_pg13_a,
      history_of_legal_pg13_b:
        patientHistoryOfLegal_pg13.history_of_legal_pg13_b,
      history_of_legal_pg13_c:
        patientHistoryOfLegal_pg13.history_of_legal_pg13_c,
      history_of_legal_pg13_d:
        patientHistoryOfLegal_pg13.history_of_legal_pg13_d,
      history_of_legal_pg13_e:
        patientHistoryOfLegal_pg13.history_of_legal_pg13_e,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "history_of_legal_pg13_a",
        "history_of_legal_pg13_b",
        "history_of_legal_pg13_c",
        "history_of_legal_pg13_d",
        "history_of_legal_pg13_e",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientHistoryOfLegal_pg13(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, );

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <h2 className="textWhite text-center mb-4">
            History of Legal, Crime, and Conviction
          </h2>
          <div className="text-center questionsContainer">
            <h4 className="textWhite centerItem">
              How many times have things gotten a little out of control, more
              than to your liking?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData"
                type="text"
                id="history_of_legal_pg13_a"
                name="history_of_legal_pg13_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientHistoryOfLegal_pg13.history_of_legal_pg13_a}
              />
            </div>
            <h4 className="textWhite centerItem mt-4">
              How many times have you ever had to use more than alcohol to get
              the same buzz? What about drugs?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title ">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData"
                type="text"
                id="history_of_legal_pg13_b"
                name="history_of_legal_pg13_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientHistoryOfLegal_pg13.history_of_legal_pg13_b}
              />
            </div>
            <h4 className="textWhite centerItem mt-4">
              How many times have you completed or left a substance abuse
              outpatient, inpatient, or residential program?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title ">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData"
                type="text"
                id="history_of_legal_pg13_c"
                name="history_of_legal_pg13_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientHistoryOfLegal_pg13.history_of_legal_pg13_c}
              />
            </div>
            <h4 className="textWhite centerItem mt-4">
              Where was the Rehabilitation Program location?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title ">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData"
                type="text"
                id="history_of_legal_pg13_d"
                name="history_of_legal_pg13_d"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientHistoryOfLegal_pg13.history_of_legal_pg13_d}
              />
            </div>
            <h4 className="textWhite centerItem mt-4">
              What was the date of your rehab?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title ">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData"
                type="text"
                id="history_of_legal_pg13_e"
                name="history_of_legal_pg13_e"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientHistoryOfLegal_pg13.history_of_legal_pg13_e}
              />
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientHistoryOfLegal_pg13}
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

export default HistoryOfLegalPg13;
