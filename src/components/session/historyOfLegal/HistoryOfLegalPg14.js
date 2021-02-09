import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 64

function HistoryOfLegalPg14(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg14, setPatientHistoryOfLegal_pg14] = useState({
    history_of_legal_pg14_a: "",
    history_of_legal_pg14_b: "",
    history_of_legal_pg14_c: "",
  });

  const next = "/history_of_legal_pg_15";
  const back = "/history_of_legal_pg_13";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg14({
      ...patientHistoryOfLegal_pg14,
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
      history_of_legal_pg14_a:
        patientHistoryOfLegal_pg14.history_of_legal_pg14_a,
      history_of_legal_pg14_b:
        patientHistoryOfLegal_pg14.history_of_legal_pg14_b,
      history_of_legal_pg14_c:
        patientHistoryOfLegal_pg14.history_of_legal_pg14_c,
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
        "history_of_legal_pg14_a",
        "history_of_legal_pg14_b",
        "history_of_legal_pg14_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientHistoryOfLegal_pg14(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
           
          <h2 className="textWhite text-center mb-4">
            History of Legal, Crime, and Conviction
          </h2>
          <div className=" text-center questionsContainer">
            <h4 className="textWhite centerItem">
              What is your self-care routine/plan?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData mb-2"
                type="text"
                id="history_of_legal_pg14_a"
                name="history_of_legal_pg14_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientHistoryOfLegal_pg14.history_of_legal_pg14_a}
              />
            </div>
            <h4 className="textWhite centerItem mt-2">
              Who do you call when you have a craving?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData"
                type="text"
                id="history_of_legal_pg14_b"
                name="history_of_legal_pg14_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientHistoryOfLegal_pg14.history_of_legal_pg14_b}
              />
            </div>
            <h4 className="textWhite centerItem">
              What do you make of the fact that DHR has concern about your use
              and you have had problems with employment and housing?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="fieldData"
                type="text"
                id="history_of_legal_pg14_c"
                name="history_of_legal_pg14_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientHistoryOfLegal_pg14.history_of_legal_pg14_c}
              />
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientHistoryOfLegal_pg14}
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

export default HistoryOfLegalPg14;
