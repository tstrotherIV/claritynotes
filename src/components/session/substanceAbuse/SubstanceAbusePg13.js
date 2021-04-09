import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 56

function SubstanceAbusePg13(props) {
  const [item, setItem] = useState("");
  const [substanceAbusePg13, setSubstanceAbusePg13] = useState({});

  const next = "/substance_abuse_pg14";
  const back = "/substance_abuse_pg12";

  const handleFieldChange = (e) => {
    setSubstanceAbusePg13({
      ...substanceAbusePg13,
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
      substance_abuse_pg13_a: substanceAbusePg13.substance_abuse_pg13_a,
      substance_abuse_pg13_b: substanceAbusePg13.substance_abuse_pg13_b,
      substance_abuse_pg13_c: substanceAbusePg13.substance_abuse_pg13_c,
      substance_abuse_pg13_d: substanceAbusePg13.substance_abuse_pg13_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setSubstanceAbusePg13(props.patientDetails);
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
              How many times have you had the experience of hearing from your
              friends that you did something while you were drunk but don’t
              remember doing it?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg13_a"
                  name="substance_abuse_pg13_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg13.substance_abuse_pg13_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">In relation to drug use?</h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg13_b"
                  name="substance_abuse_pg13_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg13.substance_abuse_pg13_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
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
                  id="substance_abuse_pg13_c"
                  name="substance_abuse_pg13_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg13.substance_abuse_pg13_c}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">In relation to drug use?</h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg13_d"
                  name="substance_abuse_pg13_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg13.substance_abuse_pg13_d}
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
              patientNotes={substanceAbusePg13}
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

export default SubstanceAbusePg13;
