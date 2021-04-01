import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 74

function NeglectAbuseTraumaLossPg4(props) {
  const [item, setItem] = useState("");
  const [
    patientNeglectAbuseTraumaLossPg4,
    setPatientNeglectAbuseTraumaLossPg4,
  ] = useState({
    neglect_abuse_trauma_loss_pg4_a: "",
    neglect_abuse_trauma_loss_pg4_b: "",
    neglect_abuse_trauma_loss_pg4_c: "",
  });

  const next = "/neglect_abuse_trauma_loss_pg_5";
  const back = "/neglect_abuse_trauma_loss_pg_3";

  const handleFieldChange = (e) => {
    setPatientNeglectAbuseTraumaLossPg4({
      ...patientNeglectAbuseTraumaLossPg4,
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
      neglect_abuse_trauma_loss_pg4_a:
        patientNeglectAbuseTraumaLossPg4.neglect_abuse_trauma_loss_pg4_a,
      neglect_abuse_trauma_loss_pg4_b:
        patientNeglectAbuseTraumaLossPg4.neglect_abuse_trauma_loss_pg4_b,
      neglect_abuse_trauma_loss_pg4_c:
        patientNeglectAbuseTraumaLossPg4.neglect_abuse_trauma_loss_pg4_c,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "neglect_abuse_trauma_loss_pg4_a",
        "neglect_abuse_trauma_loss_pg4_b",
        "neglect_abuse_trauma_loss_pg4_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientNeglectAbuseTraumaLossPg4(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
         
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">
            NEGLECT <span>&#183;</span> ABUSE <span>&#183;</span> TRAUMA{" "}
            <span>&#183;</span> LOSS
          </h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              Have you ever lost anyone or anything suddenly which created some
              discomfort or ache?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="neglect_abuse_trauma_loss_pg4_a"
                  name="neglect_abuse_trauma_loss_pg4_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientNeglectAbuseTraumaLossPg4.neglect_abuse_trauma_loss_pg4_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                How do your life experiences shape your parenting style?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="neglect_abuse_trauma_loss_pg4_b"
                  name="neglect_abuse_trauma_loss_pg4_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientNeglectAbuseTraumaLossPg4.neglect_abuse_trauma_loss_pg4_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                What is it like for you to sit and thing about these
                experiences?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientName.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="neglect_abuse_trauma_loss_pg4_c"
                  name="neglect_abuse_trauma_loss_pg4_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientNeglectAbuseTraumaLossPg4.neglect_abuse_trauma_loss_pg4_c
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
              patientNotes={patientNeglectAbuseTraumaLossPg4}
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

export default NeglectAbuseTraumaLossPg4;
