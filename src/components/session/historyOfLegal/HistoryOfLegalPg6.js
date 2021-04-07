import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 56

function HistoryOfLegalPg6(props) {
  const [item, setItem] = useState("");
  const [patientHistoryOfLegal_pg6, setPatientHistoryOfLegal_pg6] = useState(
    {}
  );

  const next = "/history_of_legal_pg_7";
  const back = "/history_of_legal_pg_5";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg6({
      ...patientHistoryOfLegal_pg6,
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
      history_of_legal_pg6_a: patientHistoryOfLegal_pg6.history_of_legal_pg6_a,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientHistoryOfLegal_pg6(props.patientDetails);
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
              Have you had any legal involvement related to a substance;
              prescribed or unprescribed, legal or illegal?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="history_of_legal_pg6_a"
                  name="history_of_legal_pg6_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientHistoryOfLegal_pg6.history_of_legal_pg6_a}
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
              patientNotes={patientHistoryOfLegal_pg6}
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

export default HistoryOfLegalPg6;
