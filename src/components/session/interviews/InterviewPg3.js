import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import "./interviews.scss";
import DataManager from "../../../data_module/DataManager";

function Interview_Pg3(props) {
  const [item, setItem] = useState("");
  const [patientInterview_pg3, setPatientInterview_pg3] = useState({
    interview_pg3_a: "",
    interview_pg3_b: "",
  });

  const next = "/interview_pg_4";
  const back = "/interview_pg_2";

  const handleFieldChange = (e) => {
    setPatientInterview_pg3({
      ...patientInterview_pg3,
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
      interview_pg3_a: patientInterview_pg3.interview_pg3_a,
      interview_pg3_b: patientInterview_pg3.interview_pg3_b,
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

      const allowed = ["interview_pg3_a", "interview_pg3_b"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientInterview_pg3(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <div className="header">
            <h2 className="textWhite">Interviews</h2>
          </div>
          <h4 className="textWhite centerItem">
            What grains of truth are there in DHR allegations?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg3_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg3.interview_pg3_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">What steps did DHR take?</h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientName.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg3_b"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg3.interview_pg3_b}
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
            patientNotes={patientInterview_pg3}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            item={item}
          />
        </div>
      </div>
    </>
  );
}

export default Interview_Pg3;
