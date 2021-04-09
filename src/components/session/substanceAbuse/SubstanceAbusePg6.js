import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 56

function SubstanceAbusePg6(props) {
  const [item, setItem] = useState("");
  const [substanceAbusePg6, setSubstanceAbusePg6] = useState({});

  const next = "/substance_abuse_pg7";
  const back = "/substance_abuse_pg5";

  const handleFieldChange = (e) => {
    setSubstanceAbusePg6({
      ...substanceAbusePg6,
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
      substance_abuse_pg6_a: substanceAbusePg6.substance_abuse_pg6_a,
      substance_abuse_pg6_b: substanceAbusePg6.substance_abuse_pg6_b,
      substance_abuse_pg6_c: substanceAbusePg6.substance_abuse_pg6_c,
      substance_abuse_pg6_d: substanceAbusePg6.substance_abuse_pg6_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setSubstanceAbusePg6(props.patientDetails);
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
            Have you ever tried methamphetamines?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg6_a"
                  name="substance_abuse_pg6_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg6.substance_abuse_pg6_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
            How old were you the first time you tried methamphetamines?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg6_b"
                  name="substance_abuse_pg6_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg6.substance_abuse_pg6_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
            How often did you use methamphetamines?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg6_c"
                  name="substance_abuse_pg6_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg6.substance_abuse_pg6_c}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
            When is the last time you used methamphetamines?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg6_d"
                  name="substance_abuse_pg6_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg6.substance_abuse_pg6_d}
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
              patientNotes={substanceAbusePg6}
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

export default SubstanceAbusePg6;
