import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 59

function HistoryOfLegalPg9(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg9, setPatientHistoryOfLegal_pg9] = useState(
    {}
  );

  const next = "/history_of_legal_pg_10";
  const back = "/history_of_legal_pg_8";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg9({
      ...patientHistoryOfLegal_pg9,
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
      history_of_legal_pg9_a: patientHistoryOfLegal_pg9.history_of_legal_pg9_a,
      history_of_legal_pg9_b: patientHistoryOfLegal_pg9.history_of_legal_pg9_b,
      history_of_legal_pg9_c: patientHistoryOfLegal_pg9.history_of_legal_pg9_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientHistoryOfLegal_pg9(props.patientDetails);
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
            <h4 className="textWhite centerItem">
              Have you ever had increased tolerance to alcohol?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg9_a"
                  name="history_of_legal_pg9_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg9.history_of_legal_pg9_a}
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
                  id="history_of_legal_pg9_b"
                  name="history_of_legal_pg9_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg9.history_of_legal_pg9_b}
                />
              </div>
              <h4 className="textWhite centerItem">
                Has your use ever limited your ability to drive?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg9_c"
                  name="history_of_legal_pg9_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg9.history_of_legal_pg9_c}
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
              patientNotes={patientHistoryOfLegal_pg9}
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

export default HistoryOfLegalPg9;
