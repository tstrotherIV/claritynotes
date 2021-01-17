import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg7(props) {
  const [item, setItem] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [patientFamily_pg7, setPatientFamily_pg7] = useState({
    familiy_pg7_a: "",
    familiy_pg7_b: "",
  });

  const next = "/family_pg_8";

  const handleFieldChange = (e) => {
    setPatientFamily_pg7({
      ...patientFamily_pg7,
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

    DataManager.update("patientNotes", editedNote).then((data) => {
      setPatientNotes(data);
    });
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
      family_pg7_a: patientFamily_pg7.family_pg7_a,
      family_pg7_b: patientFamily_pg7.family_pg7_b,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["family_pg7_a", "family_pg7_b"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientFamily_pg7(filtered);
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
          <div className="questionsContainer">
            <p className="textWhite centerItem">
              How was disapproval of your actions displayed by your parents/how
              were you punished when you acted out?s
            </p>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg7_a"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientFamily_pg7.family_pg7_a}
                />
              </div>
            </div>
            <div className="interview_div3">
              <div className="interview_line3 row d-flex flex-wrap justify-content-center">
                <div className="col-5 text-center">
                  <h2 className="textWhite">Discipline</h2>
                  <p className="textWhite">
                    Put information about harsh discipline into the discipline
                    conclusion. How did their punishment shape how they punish?
                    Does this appear genuine or are they saying more than what
                    sounds good.
                  </p>
                </div>
                <div className="col-6 d-flex flex-wrap align-content-center">
                  <Label className="textWhite" for="">
                    [Patient Name, First]'s Inference and Observations:
                  </Label>
                  <TextareaAutosize
                    className="fieldData"
                    type="text"
                    id={item}
                    name="family_pg7_b"
                    onChange={handleFieldChange}
                    onClick={createResponse}
                    value={patientFamily_pg7.family_pg7_b}
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
            patientNotes={patientFamily_pg7}
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

export default FamilyPg7;
