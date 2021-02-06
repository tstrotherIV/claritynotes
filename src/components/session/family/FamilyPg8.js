import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg8(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg8, setPatientFamily_pg8] = useState({
    familiy_pg8_a: "",
    familiy_pg8_b: "",
    familiy_pg8_c: "",
    familiy_pg8_d: "",
  });

  const next = "/family_pg_9";
  const back = "/family_pg_7";

  const handleFieldChange = (e) => {
    setPatientFamily_pg8({
      ...patientFamily_pg8,
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
      family_pg8_a: patientFamily_pg8.family_pg8_a,
      family_pg8_b: patientFamily_pg8.family_pg8_b,
      family_pg8_c: patientFamily_pg8.family_pg8_c,
      family_pg8_d: patientFamily_pg8.family_pg8_d,
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
        "family_pg8_a",
        "family_pg8_b",
        "family_pg8_c",
        "family_pg8_d",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg8(filtered);
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
            <h4 className="textWhite centerItem">
              What is your favorite childhood memory?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id={item}
                  name="family_pg8_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg8.family_pg8_a}
                />
              </div>
            </div>
            <div className="interview_div3">
              <h3 className="textWhite">Impulse Control</h3>
              <div className="interview_line3">
                <h5 className="textWhite centerItem containText">
                  Does the parent have any positive memories to reflect upon,
                  empathic experience, loving memories, which may help them to
                  be patient loving and kind?
                </h5>
                <div className="observationsColumn pl-3">
                  <Label className="textWhite" for="">
                    [User Name, First]’s Inference and Observations:
                  </Label>
                  <TextareaAutosize
                    type="text"
                    className="fieldData"
                    id={item}
                    name="family_pg8_b"
                    onChange={handleFieldChange}
                    onClick={captureFieldName}
                    value={patientFamily_pg8.family_pg8_b}
                  />
                </div>
              </div>
            </div>
            <div className="interview_div3">
              <h3 className="textWhite">Responsiveness</h3>
              <div className="interview_line3">
                <h5 className="textWhite centerItem containText">
                  Does the parent have any loving and warm memories which they
                  can reference to guide sensitivity to be responsive to the
                  needs of their children?
                </h5>
                <div className="observationsColumn pl-3">
                  <Label className="textWhite" for="">
                    [User Name, First]’s Inference and Observations:
                  </Label>
                  <TextareaAutosize
                    type="text"
                    className="fieldData"
                    id={item}
                    name="family_pg8_c"
                    onChange={handleFieldChange}
                    onClick={captureFieldName}
                    value={patientFamily_pg8.family_pg8_c}
                  />
                </div>
              </div>
            </div>
            <div className="interview_div3">
              <h3 className="textWhite">Communication</h3>
              <div className="interview_line3">
                <h5 className="textWhite centerItem containText">
                  Does the parent have warm and nurturing memories which may
                  guide healthy ways to communicate in an effective manner?
                </h5>
                <div className="observationsColumn pl-3">
                  <Label className="textWhite" for="">
                    [User Name, First]’s Inference and Observations:
                  </Label>
                  <TextareaAutosize
                    type="text"
                    className="fieldData"
                    id={item}
                    name="family_pg8_d"
                    onChange={handleFieldChange}
                    onClick={captureFieldName}
                    value={patientFamily_pg8.family_pg8_d}
                  />
                </div>
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
            patientNotes={patientFamily_pg8}
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

export default FamilyPg8;
