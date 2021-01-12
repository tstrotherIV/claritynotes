import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

function FamilyPg10(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg10, setPatientFamily_pg10] = useState({
    familiy_pg10_a: "",
    familiy_pg10_b: "",
  });

  const next = "/family_pg_11";

  const handleFieldChange = (e) => {
    setPatientFamily_pg10({
      ...patientFamily_pg10,
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
      family_pg10_a: patientFamily_pg10.family_pg10_a,
      family_pg10_b: patientFamily_pg10.family_pg10_b,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["family_pg10_a", "family_pg10_b"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg10(filtered);
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
          <div className="questionsContainerWide">
            <div className="header">
              <h2 className="textWhite">Family</h2>
            </div>
            <h4 className="textWhite centerItem">
              What is your least favorite childhood memory?
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
                  name="family_pg10_a"
                  onChange={handleFieldChange}
                  value={patientFamily_pg10.family_pg10_a}
                />
              </div>
            </div>
            <div className="interview_div3">
              <h3 className="textWhite">Protective</h3>
              <div className="interview_line3">
                <h4 className="textWhite centerItem containText">
                  Any memories which were negative, which taught them the
                  importance of being protective, cautious, restrained, etc? Did
                  they learn from this negative experience? Does the parent try
                  to prevent things from happening from anything negative?
                </h4>
                <div className="observationsColumn pl-3">
                  <Label className="textWhite " for="">
                    [User Name, First]’s Inference and Observations:
                  </Label>
                  <TextareaAutosize
                    className="fieldData"
                    type="text"
                    id={item}
                    name="family_pg10_b"
                    onChange={handleFieldChange}
                    value={patientFamily_pg10.family_pg10_b}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientFamily_pg10}
          />
          <TermOfParentalRights />
        </div>
      </div>
    </>
  );
}

export default FamilyPg10;
