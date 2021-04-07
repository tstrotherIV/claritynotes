import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 61

function HistoryOfLegalPg11(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg11, setPatientHistoryOfLegal_pg11] = useState(
    {}
  );

  const next = "/history_of_legal_pg_12";
  const back = "/history_of_legal_pg_10";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg11({
      ...patientHistoryOfLegal_pg11,
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
      history_of_legal_pg11_a:
        patientHistoryOfLegal_pg11.history_of_legal_pg11_a,
      history_of_legal_pg11_b:
        patientHistoryOfLegal_pg11.history_of_legal_pg11_b,
      history_of_legal_pg11_c:
        patientHistoryOfLegal_pg11.history_of_legal_pg11_c,
      history_of_legal_pg11_d:
        patientHistoryOfLegal_pg11.history_of_legal_pg11_d,
      history_of_legal_pg11_e:
        patientHistoryOfLegal_pg11.history_of_legal_pg11_e,
      history_of_legal_pg11_f:
        patientHistoryOfLegal_pg11.history_of_legal_pg11_f,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientHistoryOfLegal_pg11(props.patientDetails);
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
              How many times have you been hungover/had a headache or shakes
              from drinking too much alcohol?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg11_a"
                  name="history_of_legal_pg11_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg11.history_of_legal_pg11_a}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              In relation to drug use?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg11_b"
                  name="history_of_legal_pg11_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg11.history_of_legal_pg11_b}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              What age did you start smoking marijuana?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg11_c"
                  name="history_of_legal_pg11_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg11.history_of_legal_pg11_c}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              How many times per week do you smoke marijuana?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg11_d"
                  name="history_of_legal_pg11_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg11.history_of_legal_pg11_d}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              What age did you start using cocaine?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg11_e"
                  name="history_of_legal_pg11_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg11.history_of_legal_pg11_e}
                />
              </div>
            </div>
            <h4 className="mt-2 textWhite centerItem">
              How many times per week do you use cocaine?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg11_f"
                  name="history_of_legal_pg11_f"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg11.history_of_legal_pg11_f}
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
              patientNotes={patientHistoryOfLegal_pg11}
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

export default HistoryOfLegalPg11;
