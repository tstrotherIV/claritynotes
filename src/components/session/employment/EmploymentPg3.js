import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";
// pdf page 45

function EmploymentPg3(props) {
  const [item, setItem] = useState("");
  const [patientEmployment_pg3, setPatientEmployment_pg3] = useState({
    employment_pg3_a: "",
    employment_pg3_b: "",
    employment_pg3_c: "",
  });

  const next = "/education_pg_1";

  const handleFieldChange = (e) => {
    setPatientEmployment_pg3({
      ...patientEmployment_pg3,
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
      employment_pg3_a: patientEmployment_pg3.employment_pg3_a,
      employment_pg3_b: patientEmployment_pg3.employment_pg3_b,
      employment_pg3_c: patientEmployment_pg3.employment_pg3_c,
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
        "employment_pg3_a",
        "employment_pg3_b",
        "employment_pg3_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientEmployment_pg3(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <h2 className="textWhite text-center mb-4">Employment</h2>
          <div className="questionsContainer">
            <h4 className="textWhite centerItem">
              How much do you receive monthly in food stamps?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4 text">
                <Label className="textWhite interview_title text-center" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg3_a"
                  name="employment_pg3_a"
                  onChange={handleFieldChange}
                  value={patientEmployment_pg3.employment_pg3_a}
                />
              </div>
              <h4 className="textWhite centerItem text-center">
                Do you receive a pension or disability income?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title text-center" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg3_b"
                  name="employment_pg3_b"
                  onChange={handleFieldChange}
                  value={patientEmployment_pg3.employment_pg3_b}
                />
              </div>
              <h4 className="textWhite centerItem text-center">
                Have you ever been very vulnerable to a partner who used money
                to control you?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title text-center" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg3_c"
                  name="employment_pg3_c"
                  onChange={handleFieldChange}
                  value={patientEmployment_pg3.employment_pg3_c}
                />
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientEmployment_pg3}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmploymentPg3;
