import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

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

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg13({
      ...patientHistoryOfLegal_pg13,
      [e.target.name]: e.target.value,
    });
  };

  const convertIDfunc = (e) => {
    const fieldID = convertID.convertID(e);
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
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
  }, []);

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
            <div className="m-auto d-flex align-items-center textWhite">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData"
                type="text"
                id="history_of_legal_pg13_a"
                name="history_of_legal_pg13_a"
                onChange={handleFieldChange}
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
                value={patientHistoryOfLegal_pg13.history_of_legal_pg13_b}
              />
            </div>
            <div className="mb-4 d-flex flex-wrap justify-content-center mb-4">
              <div className="textWhite d-flex flex-wrap align-content-end col-2 mb-2">
                [Patient Name, First] said:
              </div>
              <div className="col-4 d-flex flex-wrap align-items-end m-0 p-0">
                <Label className="textWhite interview_title">
                  How many times have you completed or left a substance abuse
                  outpatient, inpatient, or residential program?
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg13_c"
                  name="history_of_legal_pg13_c"
                  onChange={handleFieldChange}
                  value={patientHistoryOfLegal_pg13.history_of_legal_pg13_c}
                />
              </div>
              <div className="col-2 d-flex flex-wrap align-items-end ml-2 justify-content-center align-content-end">
                <Label className="textWhite" for="">
                  Rehabilitation Program Location
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg13_d"
                  name="history_of_legal_pg13_d"
                  onChange={handleFieldChange}
                  value={patientHistoryOfLegal_pg13.history_of_legal_pg13_d}
                />
              </div>
              <div className="col-2 d-flex flex-wrap align-items-end justify-content-center ml-2 p-0 align-content-end">
                <Label className="textWhite" for="">
                  Date of Rehab
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg13_e"
                  name="history_of_legal_pg13_e"
                  onChange={handleFieldChange}
                  value={patientHistoryOfLegal_pg13.history_of_legal_pg13_e}
                />
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientHistoryOfLegal_pg13}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryOfLegalPg13;
