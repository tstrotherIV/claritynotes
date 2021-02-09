import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 79

function PerpetratorOfNeglectAndAbusePg4(props) {
  const [item, setItem] = useState("");
  const [
    patientPerpetratorOfNeglectAndAbusePg4,
    setPatientPerpetratorOfNeglectAndAbusePg4,
  ] = useState({
    perpetrator_of_neglect_and_abuse_pg4_a: "",
  });

  const next = "/partner_relationship_pg_1";
  const back = "/perpetrator_of_neglect_and_abuse_pg_3";

  const handleFieldChange = (e) => {
    setPatientPerpetratorOfNeglectAndAbusePg4({
      ...patientPerpetratorOfNeglectAndAbusePg4,
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
      perpetrator_of_neglect_and_abuse_pg4_a:
        patientPerpetratorOfNeglectAndAbusePg4.perpetrator_of_neglect_and_abuse_pg4_a,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["perpetrator_of_neglect_and_abuse_pg4_a"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPerpetratorOfNeglectAndAbusePg4(filtered);
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
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="perpetrator_of_neglect_and_abuse_pg4_a"
                  name="perpetrator_of_neglect_and_abuse_pg4_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPerpetratorOfNeglectAndAbusePg4.perpetrator_of_neglect_and_abuse_pg4_a
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
              patientNotes={patientPerpetratorOfNeglectAndAbusePg4}
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

export default PerpetratorOfNeglectAndAbusePg4;
