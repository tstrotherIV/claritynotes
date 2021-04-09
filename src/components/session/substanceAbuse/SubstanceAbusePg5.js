import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 56

function SubstanceAbusePg5(props) {
  const [item, setItem] = useState("");
  const [substanceAbusePg5, setSubstanceAbusePg5] = useState({});

  const next = "/substance_abuse_pg6";
  const back = "/substance_abuse_pg4";

  const handleFieldChange = (e) => {
    setSubstanceAbusePg5({
      ...substanceAbusePg5,
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
      substance_abuse_pg5_a: substanceAbusePg5.substance_abuse_pg5_a,
      substance_abuse_pg5_b: substanceAbusePg5.substance_abuse_pg5_b,
      substance_abuse_pg5_c: substanceAbusePg5.substance_abuse_pg5_c,
      substance_abuse_pg5_d: substanceAbusePg5.substance_abuse_pg5_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setSubstanceAbusePg5(props.patientDetails);
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
              Have you ever tried cocaine?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg5_a"
                  name="substance_abuse_pg5_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg5.substance_abuse_pg5_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How old were you the first time you tried cocaine?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg5_b"
                  name="substance_abuse_pg5_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg5.substance_abuse_pg5_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How often did you use cocaine?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg5_c"
                  name="substance_abuse_pg5_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg5.substance_abuse_pg5_c}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              When is the last time you used cocaine?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="substance_abuse_pg5_d"
                  name="substance_abuse_pg5_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={substanceAbusePg5.substance_abuse_pg5_d}
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
              patientNotes={substanceAbusePg5}
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

export default SubstanceAbusePg5;
