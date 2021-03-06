import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 60

function HistoryOfLegalPg10(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg10, setPatientHistoryOfLegal_pg10] = useState(
    {}
  );

  const next = "/history_of_legal_pg_11";
  const back = "/history_of_legal_pg_9";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg10({
      ...patientHistoryOfLegal_pg10,
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
      history_of_legal_pg10_a:
        patientHistoryOfLegal_pg10.history_of_legal_pg10_a,
      history_of_legal_pg10_b:
        patientHistoryOfLegal_pg10.history_of_legal_pg10_b,
      history_of_legal_pg10_c:
        patientHistoryOfLegal_pg10.history_of_legal_pg10_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientHistoryOfLegal_pg10(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">Substance Abuse</h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">In relation to drug use?</h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg10_a"
                  name="history_of_legal_pg10_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg10.history_of_legal_pg10_a}
                />
              </div>
              <h4 className="textWhite centerItem">
                How many times have you had the experience of hearing from your
                friends that you did something while you were drunk but don’t
                remember doing it?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg10_b"
                  name="history_of_legal_pg10_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg10.history_of_legal_pg10_b}
                />
              </div>
              <h4 className="textWhite centerItem">In relation to drug use?</h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg10_c"
                  name="history_of_legal_pg10_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg10.history_of_legal_pg10_c}
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
              patientNotes={patientHistoryOfLegal_pg10}
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

export default HistoryOfLegalPg10;
