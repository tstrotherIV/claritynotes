import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 50

function HistoryOfLegalPg1(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg1, setPatientHistoryOfLegal_pg1] = useState(
    {}
  );

  const next = "/history_of_legal_pg_2";
  const back = "/education_pg_4";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg1({
      ...patientHistoryOfLegal_pg1,
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
      history_of_legal_pg1_a: patientHistoryOfLegal_pg1.history_of_legal_pg1_a,
      history_of_legal_pg1_b: patientHistoryOfLegal_pg1.history_of_legal_pg1_b,
      history_of_legal_pg1_c: patientHistoryOfLegal_pg1.history_of_legal_pg1_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientHistoryOfLegal_pg1(props.patientDetails);
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
              How many times have you been arrested?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg1_a"
                  name="history_of_legal_pg1_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg1.history_of_legal_pg1_a}
                />
              </div>
              <h4 className="textWhite centerItem">
                Were you ever found guilty of anything?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg1_b"
                  name="history_of_legal_pg1_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg1.history_of_legal_pg1_b}
                />
              </div>
              <h4 className="textWhite centerItem">
                What were the circumstances and charges?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg1_c"
                  name="history_of_legal_pg1_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg1.history_of_legal_pg1_c}
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
              patientNotes={patientHistoryOfLegal_pg1}
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

export default HistoryOfLegalPg1;
