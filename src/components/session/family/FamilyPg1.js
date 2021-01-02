import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

function FamilyPg1(props) {
  let patientId = 30;

  const [item, setItem] = useState("");
  const [patientFamily_pg1, setPatientFamily_pg1] = useState({
    family_pg1_a: "",
    family_pg1_b: "",
    family_pg1_c: "",
    family_pg1_d: "",
    family_pg1_e: "",
  });

  const next = "/family_pg_2";

  const handleFieldChange = (e) => {
    setPatientFamily_pg1({
      ...patientFamily_pg1,
      [e.target.name]: e.target.value,
    });
  };

  const convertIDfunc = (e) => {
    const fieldID = convertID.convertID(e)
    setItem(fieldID)
  };

  //CRUD Function Start

  const updatePatient = () => {

  const editedPatient = {
    id: patientId,
    family_pg1_a: patientFamily_pg1.family_pg1_a,
    family_pg1_b: patientFamily_pg1.family_pg1_b,
    family_pg1_c: patientFamily_pg1.family_pg1_c,
    family_pg1_d: patientFamily_pg1.family_pg1_d,
    family_pg1_e: patientFamily_pg1.family_pg1_e,
    };

  DataManager.update("patients", editedPatient).then(() => {
    console.log(editedPatient)
  })
  }

  //CRUD Function END

  useEffect(() => {
    DataManager.getPatient(patientId).then((patientInfo) => {
      setPatientFamily_pg1(patientInfo);
    });
  }, []);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <div className="header">
            <h2 className="textWhite">Family</h2>
          </div>
          <div className="d-flex flex-wrap justify-content-center align-items-baseline m-2">
            <Label className="textWhite m-4" for="">
              [Patient Name, First] his/her
            </Label>
            <TextareaAutosize
              className="fieldData col-2"
              type="text"
              id={item}
              name="family_pg1_a"
              onChange={handleFieldChange}
              value={patientFamily_pg1.family_pg1_a}
              onClick={convertIDfunc}
              placeholder={patientFamily_pg1.family_pg1_a}
            />
            <Label className="textWhite m-4" for="">
              raised him/her in
            </Label>
            <TextareaAutosize
              className="fieldData col-2"
              type="text"
              id="family_pg1_b"
              name="family_pg1_b"
              onChange={handleFieldChange}
              value={patientFamily_pg1.family_pg1_b}
              onClick={convertIDfunc}
            />
            <div className="textWhite ml-2">.</div>
          </div>
          <div className="d-flex flex-wrap justify-content-center align-items-baseline m-2">
            <Label className="textWhite ml-1 mr-1 mt-0 mb-0" for="">
              [Patient Name, First] had
            </Label>
            <TextareaAutosize
              className="fieldData col-2"
              type="text"
              id="family_pg1_c"
              name="family_pg1_c"
              onChange={handleFieldChange}
              value={patientFamily_pg1.family_pg1_c}
            />
            <div className="textWhite ml-1 mr-1">brothers and sisters.</div>
          </div>
          <h4 className="textWhite centerItem">
            Who raised you from birth until you moved out of the home?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                name=""
                id="family_pg1_d"
                name="family_pg1_d"
                onChange={handleFieldChange}
                value={patientFamily_pg1.family_pg1_d}
              />
            </div>
            <h4 className="textWhite centerItem">What are their names?</h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  name=""
                  id="family_pg1_e"
                  name="family_pg1_e"
                  onChange={handleFieldChange}
                  value={patientFamily_pg1.family_pg1_e}
                />
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation next={next} updatePatient={updatePatient} patient={patientId} patientFamily_pg1={patientFamily_pg1}/>
            <TermOfParentalRights questionId={item} patientId={patientId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FamilyPg1;
