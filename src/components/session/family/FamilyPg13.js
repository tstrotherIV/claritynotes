import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg13(props) {
  const [item, setItem] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [patientFamily_pg13, setPatientFamily_pg13] = useState({
    familiy_pg13_a: "",
    familiy_pg13_b: "",
    familiy_pg13_c: "",
  });

  const next = "/family_pg_14";

  const handleFieldChange = (e) => {
    setPatientFamily_pg13({
      ...patientFamily_pg13,
      [e.target.name]: e.target.value,
    });
  };

  const handlePatientNotesChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    const editedNote = {
      id: patientNotes.id,
      [name]: value,
    };

    DataManager.update("patientNotes", editedNote);

    setPatientNotes({ ...patientNotes, [name]: value });
  };

  const createResponse = (e) => {
    const fieldID = e.target.name;
    DataManager.getQuestionPatientNotes(props.patientId, fieldID).then(
      (patientNotesResponses) => {
        if (patientNotesResponses[0] === undefined) {
          const newNote = {
            patientId: props.patientId,
            questionId: fieldID,
            t1a: "",
            t2a: false,
            t2b: false,
            t2c: false,
            t2d: false,
            t2e: false,
            t2f: false,
            t2g: false,
            t2h: false,
            t2i: false,
            t2j: false,
            t2k: false,
            t2l: false,
            t2m: false,
            t2n: false,
            t2o: false,
            t3a: false,
            t3b: false,
            t3c: false,
            t3d: false,
            t3e: false,
            t3f: false,
            t3g: false,
            t4a: false,
            t4b: false,
            t4c: false,
            t4d: false,
            t4e: false,
            t4f: false,
            t4g: false,
            t4h: false,
            t4i: false,
          };
          DataManager.post("patientNotes", newNote).then((data) => {
            setPatientNotes(data);
            setItem(fieldID);
          });
        } else {
          setPatientNotes(patientNotesResponses[0]);
          setItem(fieldID);
        }
      }
    );
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      family_pg13_a: patientFamily_pg13.family_pg13_a,
      family_pg13_b: patientFamily_pg13.family_pg13_b,
      family_pg13_c: patientFamily_pg13.family_pg13_c,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["family_pg13_a", "family_pg13_b", "family_pg13_c"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg13(filtered);
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
              How did they shape your view of the world?
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
                  name="family_pg13_a"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientFamily_pg13.family_pg13_a}
                />
              </div>
            </div>
            <h5 className="textWhite centerItem mt-4">
              Was there ever anyone that was more important to you than your
              biological family?
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
                  name="family_pg13_b"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientFamily_pg13.family_pg13_b}
                />
              </div>
            </div>
            <h5 className="textWhite centerItem mt-4">If so, who and why?</h5>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg13_c"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientFamily_pg13.family_pg13_c}
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
            patientNotes={patientFamily_pg13}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            notesData={patientNotes}
            handlePatientNotesChange={handlePatientNotesChange}
          />
        </div>
      </div>
    </>
  );
}

export default FamilyPg13;
