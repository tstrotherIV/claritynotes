import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg12(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg12, setPatientFamily_pg12] = useState({
    familiy_pg12_a: "",
    familiy_pg12_b: "",
    familiy_pg12_c: "",
  });

  const next = "/family_pg_13";
  const back = "/family_pg_11";

  const handleFieldChange = (e) => {
    setPatientFamily_pg12({
      ...patientFamily_pg12,
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
      family_pg12_a: patientFamily_pg12.family_pg12_a,
      family_pg12_b: patientFamily_pg12.family_pg12_b,
      family_pg12_c: patientFamily_pg12.family_pg12_c,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["family_pg12_a", "family_pg12_b", "family_pg12_c"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg12(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, );

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Heading />
          <div className="header">
            <h2 className="textWhite">Family</h2>
          </div>
          <div className="questionsContainerWide">
            <h5 className="textWhite centerItem mt-4">
              How do these memories impact your parenting?
            </h5>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg12_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg12.family_pg12_a}
                />
              </div>
            </div>
            <h5 className="textWhite text-center mt-4">
              Tell me about your most serious relationship that did not result
              in cohabitation; which can include non-sexual friendships with the
              same or opposite sex.
            </h5>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg12_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg12.family_pg12_b}
                />
              </div>
            </div>
            <h5 className="textWhite centerItem text-center mt-4">
              Tell me more about relationships with children, teachers,
              supervisors, schoolmates, bosses, or workmates of any importance.
            </h5>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg12_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg12.family_pg12_c}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            back={back}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientFamily_pg12}
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

export default FamilyPg12;
