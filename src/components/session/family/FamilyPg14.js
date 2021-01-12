import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

function FamilyPg14(props) {
  const [item, setItem] = useState("")
  const [patientFamily_pg14, setPatientFamily_pg14] = useState({
    familiy_pg14_a: "",
    familiy_pg14_b: "",
    familiy_pg14_c: "",
  });

  const next = "/family_pg_15";

  const handleFieldChange = (e) => {
    setPatientFamily_pg14({
      ...patientFamily_pg14,
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
      family_pg14_a: patientFamily_pg14.family_pg14_a,
      family_pg14_b: patientFamily_pg14.family_pg14_b,
      family_pg14_c: patientFamily_pg14.family_pg14_c,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["family_pg14_a", "family_pg14_b", "family_pg14_c"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg14(filtered);
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
          <div className="header">
            <h2 className="textWhite">Family</h2>
          </div>
          <div className="questionsContainerWide">
            <h5 className="textWhite centerItem mt-4">
              What do you enjoy doing in your free time?
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
                  name="family_pg14_a"
                  onChange={handleFieldChange}
                  value={patientFamily_pg14.family_pg14_a}
                />
              </div>
            </div>
            <h5 className="textWhite text-center mt-4">
              What do you want people to say about you someday? How do you want
              to be remembered?
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
                  name="family_pg14_b"
                  onChange={handleFieldChange}
                  value={patientFamily_pg14.family_pg14_b}
                />
              </div>
            </div>
            <h5 className="textWhite centerItem mt-4">
              How do you reach toward your potential each day?
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
                  name="family_pg14_c"
                  onChange={handleFieldChange}
                  value={patientFamily_pg14.family_pg14_c}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientFamily_pg14}
          />
          <TermOfParentalRights />
        </div>
      </div>
    </>
  );
}

export default FamilyPg14;
