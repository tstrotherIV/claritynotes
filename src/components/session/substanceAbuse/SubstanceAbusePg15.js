import React, { useState, useEffect } from "react";
import { Input, Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 56

function SubstanceAbusePg15(props) {
  const [item, setItem] = useState("");
  const [substanceAbusePg15, setSubstanceAbusePg15] = useState({});

  const next = "/mental_health_history_pg_1";
  const back = "/substance_abuse_pg14";

  const handleFieldChange = (e) => {
    setSubstanceAbusePg15({
      ...substanceAbusePg15,
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
      substance_abuse_pg15_a: substanceAbusePg15.substance_abuse_pg15_a,
      substance_abuse_pg15_b: substanceAbusePg15.substance_abuse_pg15_b,
      substance_abuse_pg15_c: substanceAbusePg15.substance_abuse_pg15_c,
      substance_abuse_pg15_d: substanceAbusePg15.substance_abuse_pg15_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setSubstanceAbusePg15(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4 pt-4">
            EXCESSIVE USE OF A CONTROLLED SUBSTANCE
          </h2>
          <p className="textWhite text-center mb-4">
            HISTORY OF DRUG USE & ADDICTIVE BEHAVIORS
          </p>
          <p className="textWhite text-center mb-4">
            (ALWAYS ask every question, even if they deny use!! Do not just
            delete the questions; ask them and type their exact responses.)
          </p>

          {/* Question Section */}
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              What is your self-care routine/plan?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg15_a"
                  name="substance_abuse_pg15_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg15.substance_abuse_pg15_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              Who do you call when you have a craving?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg15_b"
                  name="substance_abuse_pg15_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg15.substance_abuse_pg15_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              What do you make of the fact that DHR has concern about your use
              and you have had problems with employment and housing?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg15_c"
                  name="substance_abuse_pg15_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg15.substance_abuse_pg15_c}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              Do you see a connection between any of these things?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg15_d"
                  name="substance_abuse_pg15_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg15.substance_abuse_pg15_d}
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
              patientNotes={substanceAbusePg15}
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

export default SubstanceAbusePg15;
