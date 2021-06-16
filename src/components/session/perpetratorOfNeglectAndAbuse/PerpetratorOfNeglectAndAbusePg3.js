import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 78

function PerpetratorOfNeglectAndAbusePg3(props) {
  const [item, setItem] = useState("");
  const [
    patientPerpetratorOfNeglectAndAbusePg3,
    setPatientPerpetratorOfNeglectAndAbusePg3,
  ] = useState({
    perpetrator_of_neglect_and_abuse_pg3_a: "",
    perpetrator_of_neglect_and_abuse_pg3_b: "",
    perpetrator_of_neglect_and_abuse_pg3_c: "",
  });

  const next = "/perpetrator_of_neglect_and_abuse_pg_4";
  const back = "/perpetrator_of_neglect_and_abuse_pg_2";

  const handleFieldChange = (e) => {
    setPatientPerpetratorOfNeglectAndAbusePg3({
      ...patientPerpetratorOfNeglectAndAbusePg3,
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
      perpetrator_of_neglect_and_abuse_pg3_a:
        patientPerpetratorOfNeglectAndAbusePg3.perpetrator_of_neglect_and_abuse_pg3_a,
      perpetrator_of_neglect_and_abuse_pg3_b:
        patientPerpetratorOfNeglectAndAbusePg3.perpetrator_of_neglect_and_abuse_pg3_b,
      perpetrator_of_neglect_and_abuse_pg3_c:
        patientPerpetratorOfNeglectAndAbusePg3.perpetrator_of_neglect_and_abuse_pg3_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientPerpetratorOfNeglectAndAbusePg3(props.patientDetails);
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
              Have you ever left your child(ren) alone in a car or unsupervised
              anywhere?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="perpetrator_of_neglect_and_abuse_pg3_a"
                  name="perpetrator_of_neglect_and_abuse_pg3_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPerpetratorOfNeglectAndAbusePg3.perpetrator_of_neglect_and_abuse_pg3_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you or your child(ren) gone without electricity, water,
                heating, or cooling?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="perpetrator_of_neglect_and_abuse_pg3_b"
                  name="perpetrator_of_neglect_and_abuse_pg3_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPerpetratorOfNeglectAndAbusePg3.perpetrator_of_neglect_and_abuse_pg3_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Has/ve your child(ren) always gotten his/her/their
                immunizations?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="perpetrator_of_neglect_and_abuse_pg3_c"
                  name="perpetrator_of_neglect_and_abuse_pg3_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPerpetratorOfNeglectAndAbusePg3.perpetrator_of_neglect_and_abuse_pg3_c
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
              patientNotes={patientPerpetratorOfNeglectAndAbusePg3}
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

export default PerpetratorOfNeglectAndAbusePg3;
