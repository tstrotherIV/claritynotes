import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 54

function HistoryOfLegalPg4(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg4, setPatientHistoryOfLegal_pg4] = useState({
    history_of_legal_pg4_a: "",
    history_of_legal_pg4_b: "",
    history_of_legal_pg4_c: "",
  });

  const next = "/history_of_legal_pg_5";
  const back = "/history_of_legal_pg_3";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg4({
      ...patientHistoryOfLegal_pg4,
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
      history_of_legal_pg4_a: patientHistoryOfLegal_pg4.history_of_legal_pg4_a,
      history_of_legal_pg4_b: patientHistoryOfLegal_pg4.history_of_legal_pg4_b,
      history_of_legal_pg4_c: patientHistoryOfLegal_pg4.history_of_legal_pg4_c,
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
        "history_of_legal_pg4_a",
        "history_of_legal_pg4_b",
        "history_of_legal_pg4_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientHistoryOfLegal_pg4(filtered);
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
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              What did you and the District Attorney agree upon?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg4_a"
                  name="history_of_legal_pg4_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg4.history_of_legal_pg4_a}
                />
              </div>
              <h4 className="textWhite centerItem">
                How many times have you been on probation?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg4_b"
                  name="history_of_legal_pg4_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg4.history_of_legal_pg4_b}
                />
              </div>
              <h4 className="textWhite centerItem">
                What were the circumstances and charges?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg4_c"
                  name="history_of_legal_pg4_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg4.history_of_legal_pg4_c}
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
              patientNotes={patientHistoryOfLegal_pg4}
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

export default HistoryOfLegalPg4;
