import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

// pdf page 76

function PerpetratorOfNeglectAndAbusePg1(props) {
  const [item, setItem] = useState("");
  const [
    patientPerpetratorOfNeglectAndAbusePg1,
    setPatientPerpetratorOfNeglectAndAbusePg1,
  ] = useState({
    perpetrator_of_neglect_and_abuse_pg1_a: "",
    perpetrator_of_neglect_and_abuse_pg1_b: "",
    perpetrator_of_neglect_and_abuse_pg1_c: "",
  });

  const next = "/perpetrator_of_neglect_and_abuse_pg_2";

  const handleFieldChange = (e) => {
    setPatientPerpetratorOfNeglectAndAbusePg1({
      ...patientPerpetratorOfNeglectAndAbusePg1,
      [e.target.name]: e.target.value,
    });
  };

  const convertIDfunc = (e) => {
    const fieldID = convertID.convertID(e);
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      perpetrator_of_neglect_and_abuse_pg1_a:
        patientPerpetratorOfNeglectAndAbusePg1.perpetrator_of_neglect_and_abuse_pg1_a,
      perpetrator_of_neglect_and_abuse_pg1_b:
        patientPerpetratorOfNeglectAndAbusePg1.perpetrator_of_neglect_and_abuse_pg1_b,
      perpetrator_of_neglect_and_abuse_pg1_c:
        patientPerpetratorOfNeglectAndAbusePg1.perpetrator_of_neglect_and_abuse_pg1_c,
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
        "perpetrator_of_neglect_and_abuse_pg1_a",
        "perpetrator_of_neglect_and_abuse_pg1_b",
        "perpetrator_of_neglect_and_abuse_pg1_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPerpetratorOfNeglectAndAbusePg1(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <Heading />
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">
            PERPETRATOR OF NEGLECT AND ABUSE
          </h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              Have you ever been accused of domestic violence?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="perpetrator_of_neglect_and_abuse_pg1_a"
                  name="perpetrator_of_neglect_and_abuse_pg1_a"
                  onChange={handleFieldChange}
                  value={
                    patientPerpetratorOfNeglectAndAbusePg1.perpetrator_of_neglect_and_abuse_pg1_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Have you ever filed a protection from abuse order?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="perpetrator_of_neglect_and_abuse_pg1_b"
                  name="perpetrator_of_neglect_and_abuse_pg1_b"
                  onChange={handleFieldChange}
                  value={
                    patientPerpetratorOfNeglectAndAbusePg1.perpetrator_of_neglect_and_abuse_pg1_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Has anyone ever filed a protection from abuse order against you?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="perpetrator_of_neglect_and_abuse_pg1_c"
                  name="perpetrator_of_neglect_and_abuse_pg1_c"
                  onChange={handleFieldChange}
                  value={
                    patientPerpetratorOfNeglectAndAbusePg1.perpetrator_of_neglect_and_abuse_pg1_c
                  }
                />
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientPerpetratorOfNeglectAndAbusePg1}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default PerpetratorOfNeglectAndAbusePg1;
