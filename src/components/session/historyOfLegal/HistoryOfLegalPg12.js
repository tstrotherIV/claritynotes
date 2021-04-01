import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 62

function HistoryOfLegalPg12(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg12, setPatientHistoryOfLegal_pg12] = useState({
    history_of_legal_pg12_a: "",
    history_of_legal_pg12_b: "",
    history_of_legal_pg12_c: "",
    history_of_legal_pg12_d: "",
    history_of_legal_pg12_e: "",
    history_of_legal_pg12_f: "",
    history_of_legal_pg12_g: "",
  });

  const next = "/history_of_legal_pg_13";
  const back = "/history_of_legal_pg_11";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg12({
      ...patientHistoryOfLegal_pg12,
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
      history_of_legal_pg12_a:
        patientHistoryOfLegal_pg12.history_of_legal_pg12_a,
      history_of_legal_pg12_b:
        patientHistoryOfLegal_pg12.history_of_legal_pg12_b,
      history_of_legal_pg12_c:
        patientHistoryOfLegal_pg12.history_of_legal_pg12_c,
      history_of_legal_pg12_d:
        patientHistoryOfLegal_pg12.history_of_legal_pg12_d,
      history_of_legal_pg12_e:
        patientHistoryOfLegal_pg12.history_of_legal_pg12_e,
      history_of_legal_pg12_f:
        patientHistoryOfLegal_pg12.history_of_legal_pg12_f,
      history_of_legal_pg12_g:
        patientHistoryOfLegal_pg12.history_of_legal_pg12_g,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "history_of_legal_pg12_a",
        "history_of_legal_pg12_b",
        "history_of_legal_pg12_c",
        "history_of_legal_pg12_d",
        "history_of_legal_pg12_e",
        "history_of_legal_pg12_f",
        "history_of_legal_pg12_g",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientHistoryOfLegal_pg12(filtered);
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
          <div className="questionsContainerWide text-center">
            <h4 className="mt-2 textWhite centerItem">
              At what age did you start using methamphetamines?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg12_a"
                  name="history_of_legal_pg12_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg12.history_of_legal_pg12_a}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              When was the last time you used methamphetamines?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg12_b"
                  name="history_of_legal_pg12_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg12.history_of_legal_pg12_b}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              At what age did you start abusing opiates?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg12_c"
                  name="history_of_legal_pg12_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg12.history_of_legal_pg12_c}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              When was the last time you used opiates?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg12_d"
                  name="history_of_legal_pg12_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg12.history_of_legal_pg12_d}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              At what age did you start using heroin?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg12_e"
                  name="history_of_legal_pg12_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg12.history_of_legal_pg12_e}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              When was the last time you used heroin?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg12_f"
                  name="history_of_legal_pg12_f"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg12.history_of_legal_pg12_f}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              How many times have you been hungover/had a headache or shakes
              from drinking too much alcohol?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg12_g"
                  name="history_of_legal_pg12_g"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg12.history_of_legal_pg12_g}
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
              patientNotes={patientHistoryOfLegal_pg12}
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

export default HistoryOfLegalPg12;
