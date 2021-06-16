import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 77

function PerpetratorOfNeglectAndAbusePg2(props) {
  const [item, setItem] = useState("");
  const [
    patientPerpetratorOfNeglectAndAbusePg2,
    setPatientPerpetratorOfNeglectAndAbusePg2,
  ] = useState({
    perpetrator_of_neglect_and_abuse_pg2_a: "",
    perpetrator_of_neglect_and_abuse_pg2_b: "",
    perpetrator_of_neglect_and_abuse_pg2_c: "",
  });

  const next = "/perpetrator_of_neglect_and_abuse_pg_3";
  const back = "/perpetrator_of_neglect_and_abuse_pg_1";

  const handleFieldChange = (e) => {
    setPatientPerpetratorOfNeglectAndAbusePg2({
      ...patientPerpetratorOfNeglectAndAbusePg2,
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
      perpetrator_of_neglect_and_abuse_pg2_a:
        patientPerpetratorOfNeglectAndAbusePg2.perpetrator_of_neglect_and_abuse_pg2_a,
      perpetrator_of_neglect_and_abuse_pg2_b:
        patientPerpetratorOfNeglectAndAbusePg2.perpetrator_of_neglect_and_abuse_pg2_b,
      perpetrator_of_neglect_and_abuse_pg2_c:
        patientPerpetratorOfNeglectAndAbusePg2.perpetrator_of_neglect_and_abuse_pg2_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientPerpetratorOfNeglectAndAbusePg2(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">
            PERPETRATOR OF NEGLECT AND ABUSE
          </h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              Is there any other accusations or other information regarding you
              as a perpetrator of abuse or neglect in your background?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="perpetrator_of_neglect_and_abuse_pg2_a"
                  name="perpetrator_of_neglect_and_abuse_pg2_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPerpetratorOfNeglectAndAbusePg2.perpetrator_of_neglect_and_abuse_pg2_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you or your child(ren) ever been hungry?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="perpetrator_of_neglect_and_abuse_pg2_b"
                  name="perpetrator_of_neglect_and_abuse_pg2_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPerpetratorOfNeglectAndAbusePg2.perpetrator_of_neglect_and_abuse_pg2_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you or your child(ren) ever gone without clothing or
                shelter?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="perpetrator_of_neglect_and_abuse_pg2_c"
                  name="perpetrator_of_neglect_and_abuse_pg2_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPerpetratorOfNeglectAndAbusePg2.perpetrator_of_neglect_and_abuse_pg2_c
                  }
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
              patientNotes={patientPerpetratorOfNeglectAndAbusePg2}
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

export default PerpetratorOfNeglectAndAbusePg2;
