import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

//pdf page 38

function FamilyPg15(props) {
  const [item, setItem] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [patientFamily_pg15, setPatientFamily_pg15] = useState({
    familiy_pg15_a: "",
    familiy_pg15_b: "",
  });

  const next = "/psychological_evaluation_report_summary";

  const handleFieldChange = (e) => {
    setPatientFamily_pg15({
      ...patientFamily_pg15,
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
      family_pg15_a: patientFamily_pg15.family_pg15_a,
      family_pg15_b: patientFamily_pg15.family_pg15_b,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["family_pg15_a", "family_pg15_b"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg15(filtered);
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
          <h5 className="textWhite centerItem mt-4">
            What are your values and goals?
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
                name="family_pg15_a"
                onChange={handleFieldChange}
                onClick={createResponse}
                value={patientFamily_pg15.family_pg15_a}
              />
            </div>
          </div>
          <h5 className="textWhite centerItem mt-4">
            How did your leaving home occur? How old were you? Was it on
            positive terms?
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
                name="family_pg15_b"
                onChange={handleFieldChange}
                onClick={createResponse}
                value={patientFamily_pg15.family_pg15_b}
              />
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientFamily_pg15}
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

export default FamilyPg15;
