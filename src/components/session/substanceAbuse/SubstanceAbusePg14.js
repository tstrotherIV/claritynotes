import React, { useState, useEffect } from "react";
import { Input, Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 56

function SubstanceAbusePg14(props) {
  const [item, setItem] = useState("");
  const [substanceAbusePg14, setSubstanceAbusePg14] = useState({});

  const next = "/substance_abuse_pg15";
  const back = "/substance_abuse_pg13";

  const handleFieldChange = (e) => {
    setSubstanceAbusePg14({
      ...substanceAbusePg14,
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
      substance_abuse_pg14_a: substanceAbusePg14.substance_abuse_pg14_a,
      substance_abuse_pg14_b: substanceAbusePg14.substance_abuse_pg14_b,
      substance_abuse_pg14_c: substanceAbusePg14.substance_abuse_pg14_c,
      substance_abuse_pg14_d: substanceAbusePg14.substance_abuse_pg14_d,
      substance_abuse_pg14_e: substanceAbusePg14.substance_abuse_pg14_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setSubstanceAbusePg14(props.patientDetails);
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
              How many times have you had the experience of planning to get
              high, just a little, and then, once you got started, you ended up
              using more than planned?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg14_a"
                  name="substance_abuse_pg14_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg14.substance_abuse_pg14_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How many times have things gotten a little out of control, more
              than to your liking?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg14_b"
                  name="substance_abuse_pg14_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg14.substance_abuse_pg14_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How many times have you ever had to use more alcohol to get the
              same buzz? What about drugs?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg14_c"
                  name="substance_abuse_pg14_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg14.substance_abuse_pg14_c}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How many times have you completed or left a substance abuse
              outpatient, inpatient, or residential program?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title">
                  {props.patientDetails.patient_first_name} reported he
                  completed a substance abuse rehabilitation program at
                </Label>
                <TextareaAutosize
                  className="fieldData m-auto"
                  type="text"
                  id="substance_abuse_pg14_d"
                  name="substance_abuse_pg14_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg14.substance_abuse_pg14_d}
                />
                <Label className="textWhite interview_title">in (date):</Label>
                <Input
                  className="fieldData m-auto"
                  type="date"
                  id="substance_abuse_pg14_e"
                  name="substance_abuse_pg14_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg14.substance_abuse_pg14_e}
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
              patientNotes={substanceAbusePg14}
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

export default SubstanceAbusePg14;
