import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 55

function HistoryOfLegalPg5(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg5, setPatientHistoryOfLegal_pg5] = useState(
    {}
  );

  const next = "/substance_abuse_pg1";
  const back = "/history_of_legal_pg_4";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg5({
      ...patientHistoryOfLegal_pg5,
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
      history_of_legal_pg5_a: patientHistoryOfLegal_pg5.history_of_legal_pg5_a,
      history_of_legal_pg5_b: patientHistoryOfLegal_pg5.history_of_legal_pg5_b,
      history_of_legal_pg5_c: patientHistoryOfLegal_pg5.history_of_legal_pg5_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientHistoryOfLegal_pg5(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">
            History of Legal, Crime, and Conviction
          </h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              What were the initial charges?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg5_a"
                  name="history_of_legal_pg5_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg5.history_of_legal_pg5_a}
                />
              </div>
              <h4 className="textWhite centerItem">
                What was the final agreed upon charge?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg5_b"
                  name="history_of_legal_pg5_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg5.history_of_legal_pg5_b}
                />
              </div>
              <h4 className="textWhite centerItem">
                Has your probation ever been revoked?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg5_c"
                  name="history_of_legal_pg5_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg5.history_of_legal_pg5_c}
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
              patientNotes={patientHistoryOfLegal_pg5}
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

export default HistoryOfLegalPg5;
