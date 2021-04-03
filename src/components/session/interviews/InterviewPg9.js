import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

import "./interviews.scss";

function Interview_Pg9(props) {
  const [item, setItem] = useState("");
  const [patientInterview_pg9, setPatientInterview_pg9] = useState({
    interview_pg9_a: "",
    interview_pg9_b: "",
    interview_pg9_c: "",
  });

  const next = "/family_pg_1";
  const back = "/interview_pg_8";

  const handleFieldChange = (e) => {
    setPatientInterview_pg9({
      ...patientInterview_pg9,
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
      interview_pg9_a: patientInterview_pg9.interview_pg9_a,
      interview_pg9_b: patientInterview_pg9.interview_pg9_b,
      interview_pg9_c: patientInterview_pg9.interview_pg9_c,
    };

    DataManager.update("patients", editedPatient).then(() => {props.getData()});
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["interview_pg9_a", "interview_pg9_b", "interview_pg9_c"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientInterview_pg9(props.patientDetails);
    });
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
           
          <div className="header questionsContainerWide">
            <h2 className="textWhite">Interviews</h2>
          </div>
          <h4 className="textWhite centerItem">
            What do you think you need to work on?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                {props.patientDetails.patient_first_name} said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg9_a"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg9.interview_pg9_a}
              />
            </div>
          </div>
          <div>
            <div className="div1Fields">
              <div className="in2">
                <Label className="textWhite title" for="caseNumber">
                  {props.patientDetails.patient_first_name} was dressed in
                </Label>
                <TextareaAutosize
                  className="fieldData2"
                  type="text"
                  id={item}
                  name="interview_pg9_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientInterview_pg9.interview_pg9_b}
                />
              </div>
            </div>
          </div>
          <div className="textWhite centerItem">
            and she appropriately groomed. (Write details! Was she malodourous,
            had greasy/unbrushed hair, unbathed, etc.? Notate the appearance and
            add to behavioral observations.)
          </div>
          <div className="interview_div1">
            <div className="interview_line1">
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg9_c"
                onChange={handleFieldChange}
                onClick={captureFieldName}
                value={patientInterview_pg9.interview_pg9_c}
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
            patientNotes={patientInterview_pg9}
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

export default Interview_Pg9;
