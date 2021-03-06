import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 64

function HistoryOfLegalPg14(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg14, setPatientHistoryOfLegal_pg14] = useState(
    {}
  );

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

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientHistoryOfLegal_pg14(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">Substance Abuse</h2>
          <div className=" text-center questionsContainer">
            <h4 className="textWhite centerItem">
              What is your self-care routine/plan?
            </h4>
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
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
                {props.patientDetails.patient_first_name} said:
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
                {props.patientDetails.patient_first_name} said:
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
