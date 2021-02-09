import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 75

function NeglectAbuseTraumaLossPg5(props) {
  const [item, setItem] = useState("");
  const [
    patientNeglectAbuseTraumaLossPg5,
    setPatientNeglectAbuseTraumaLossPg5,
  ] = useState({
    neglect_abuse_trauma_loss_pg5_a: "",
    neglect_abuse_trauma_loss_pg5_b: "",
    neglect_abuse_trauma_loss_pg5_c: "",
  });

  const next = "/perpetrator_of_neglect_and_abuse_pg_1";
  const back = "/neglect_abuse_trauma_loss_pg_4";

  const handleFieldChange = (e) => {
    setPatientNeglectAbuseTraumaLossPg5({
      ...patientNeglectAbuseTraumaLossPg5,
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
      neglect_abuse_trauma_loss_pg5_a:
        patientNeglectAbuseTraumaLossPg5.neglect_abuse_trauma_loss_pg5_a,
      neglect_abuse_trauma_loss_pg5_b:
        patientNeglectAbuseTraumaLossPg5.neglect_abuse_trauma_loss_pg5_b,
      neglect_abuse_trauma_loss_pg5_c:
        patientNeglectAbuseTraumaLossPg5.neglect_abuse_trauma_loss_pg5_c,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "neglect_abuse_trauma_loss_pg5_a",
        "neglect_abuse_trauma_loss_pg5_b",
        "neglect_abuse_trauma_loss_pg5_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientNeglectAbuseTraumaLossPg5(filtered);
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
              Are there concerns, allegations, or assertions your child(ren)
              have been sexually abused, now or in the past?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="neglect_abuse_trauma_loss_pg5_a"
                  name="neglect_abuse_trauma_loss_pg5_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientNeglectAbuseTraumaLossPg5.neglect_abuse_trauma_loss_pg5_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Are there concerns, allegations, or assertions your child(ren)
                have been physically or emotionally abused, now or in the past?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="neglect_abuse_trauma_loss_pg5_b"
                  name="neglect_abuse_trauma_loss_pg5_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientNeglectAbuseTraumaLossPg5.neglect_abuse_trauma_loss_pg5_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you ever feel afraid for your life?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="neglect_abuse_trauma_loss_pg5_c"
                  name="neglect_abuse_trauma_loss_pg5_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientNeglectAbuseTraumaLossPg5.neglect_abuse_trauma_loss_pg5_c
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
              patientNotes={patientNeglectAbuseTraumaLossPg5}
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

export default NeglectAbuseTraumaLossPg5;
