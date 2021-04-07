import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 45

function EmploymentPg3(props) {
  const [item, setItem] = useState("");
  const [patientEmployment_pg3, setPatientEmployment_pg3] = useState({});

  const next = "/education_pg_1";
  const back = "/employment_pg_2";

  const handleFieldChange = (e) => {
    setPatientEmployment_pg3({
      ...patientEmployment_pg3,
      [e.target.name]: e.target.value,
    });
  };

  const convertIDfunc = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      employment_pg3_a: patientEmployment_pg3.employment_pg3_a,
      employment_pg3_b: patientEmployment_pg3.employment_pg3_b,
      employment_pg3_c: patientEmployment_pg3.employment_pg3_c,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientEmployment_pg3(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">Employment</h2>
          <div className="questionsContainer">
            <h4 className="textWhite centerItem">
              How much do you receive monthly in food stamps?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4 text">
                <Label className="textWhite interview_title text-center" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg3_a"
                  name="employment_pg3_a"
                  onChange={handleFieldChange}
                  onClick={convertIDfunc}
                  value={patientEmployment_pg3.employment_pg3_a}
                />
              </div>
              <h4 className="textWhite centerItem text-center">
                Do you receive a pension or disability income?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title text-center" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg3_b"
                  name="employment_pg3_b"
                  onChange={handleFieldChange}
                  onClick={convertIDfunc}
                  value={patientEmployment_pg3.employment_pg3_b}
                />
              </div>
              <h4 className="textWhite centerItem text-center">
                Have you ever been very vulnerable to a partner who used money
                to control you?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title text-center" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg3_c"
                  name="employment_pg3_c"
                  onChange={handleFieldChange}
                  onClick={convertIDfunc}
                  value={patientEmployment_pg3.employment_pg3_c}
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
              patientNotes={patientEmployment_pg3}
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

export default EmploymentPg3;
