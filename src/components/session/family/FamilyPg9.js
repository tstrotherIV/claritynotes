import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

function FamilyPg9(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg9, setPatientFamily_pg9] = useState({
    familiy_pg9_a: "",
    familiy_pg9_b: "",
    familiy_pg9_c: "",
  });

  const next = "/family_pg_10";

  const handleFieldChange = (e) => {
    setPatientFamily_pg9({
      ...patientFamily_pg9,
      [e.target.name]: e.target.value,
    });
  };

  const convertIDfunc = (e) => {
    const fieldID = convertID.convertID(e);
    setItem(fieldID);
    console.log("input clicked");
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      family_pg9_a: patientFamily_pg9.family_pg9_a,
      family_pg9_b: patientFamily_pg9.family_pg9_b,
      family_pg9_c: patientFamily_pg9.family_pg9_c,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["family_pg9_a", "family_pg9_b", "family_pg9_c"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg9(filtered);
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
          <h4 className="textWhite centerItem">
            Tell me more about that. How did it make you feel?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="family_pg9_a"
                onChange={handleFieldChange}
                value={patientFamily_pg9.family_pg9_a}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">
            How do you want the memories of your children to be different?
          </h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="family_pg9_b"
                onChange={handleFieldChange}
                value={patientFamily_pg9.family_pg9_b}
              />
            </div>
          </div>
          <h4 className="textWhite centerItem">How do you do this?</h4>
          <div className="interview_div1">
            <div className="interview_line1">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="family_pg9_c"
                onChange={handleFieldChange}
                value={patientFamily_pg9.family_pg9_c}
              />
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientFamily_pg9}
          />
          <TermOfParentalRights />
        </div>
      </div>
    </>
  );
}

export default FamilyPg9;
