import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 57

function HistoryOfLegalPg7(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg7, setPatientHistoryOfLegal_pg7] = useState(
    {}
  );

  const next = "/history_of_legal_pg_8";
  const back = "/history_of_legal_pg_6";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg7({
      ...patientHistoryOfLegal_pg7,
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
      history_of_legal_pg7_a: patientHistoryOfLegal_pg7.history_of_legal_pg7_a,
      history_of_legal_pg7_b: patientHistoryOfLegal_pg7.history_of_legal_pg7_b,
      history_of_legal_pg7_c: patientHistoryOfLegal_pg7.history_of_legal_pg7_c,
      history_of_legal_pg7_d: patientHistoryOfLegal_pg7.history_of_legal_pg7_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientHistoryOfLegal_pg7(props.patientDetails);
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
            <h4 className="mt-2 textWhite centerItem">
              What age did you start drinking alcholol?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg7_a"
                  name="history_of_legal_pg7_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg7.history_of_legal_pg7_a}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              How many drinks did you have per week?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg7_b"
                  name="history_of_legal_pg7_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg7.history_of_legal_pg7_b}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              Did you drink Liquore, Beer, or Wine?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg7_c"
                  name="history_of_legal_pg7_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg7.history_of_legal_pg7_c}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              How many times have you had the experience of planning to have
              just one or two drinks and then found that, once you got started,
              you ended up drinking more than planned?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg7_d"
                  name="history_of_legal_pg7_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg7.history_of_legal_pg7_d}
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
              patientNotes={patientHistoryOfLegal_pg7}
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

export default HistoryOfLegalPg7;
