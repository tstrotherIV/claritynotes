import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

import "./interviews.scss";

function Interview_Pg9(props) {
  const [item, setItem] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [patientInterview_pg9, setPatientInterview_pg9] = useState({
    interview_pg9_a: "",
    interview_pg9_b: "",
    interview_pg9_c: "",
  });

  const next = "/family_pg_1";

  const handleFieldChange = (e) => {
    setPatientInterview_pg9({
      ...patientInterview_pg9,
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
      interview_pg9_a: patientInterview_pg9.interview_pg9_a,
      interview_pg9_b: patientInterview_pg9.interview_pg9_b,
      interview_pg9_c: patientInterview_pg9.interview_pg9_c,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["interview_pg9_a", "interview_pg9_b", "interview_pg9_c"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientInterview_pg9(filtered);
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
          <div className="header questionsContainerWide">
            <h2 className="textWhite">Interviews</h2>
          </div>
          <h4 className="textWhite centerItem">
            What do you think you need to work on?
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
                name="interview_pg9_a"
                onChange={handleFieldChange}
                onClick={createResponse}
                value={patientInterview_pg9.interview_pg9_a}
              />
            </div>
          </div>
          <div>
            <div className="div1Fields">
              <div className="in2">
                <Label className="textWhite title" for="caseNumber">
                  [Patient Name, First] was dressed in
                </Label>
                <TextareaAutosize
                  className="fieldData2"
                  type="text"
                  id={item}
                  name="interview_pg9_b"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientInterview_pg9.interview_pg9_b}
                />
              </div>
            </div>
          </div>
          <div className="textWhite centerItem">
            and she appropriately groomed. (Write details! Was she malodourous,
            had greasy/unbrushed hair, unbathed, etc.? Notate the appearance and
            add to behavioral observations.)
          </div>
          <div className="interview_div1">
            <div className="interview_line1">
              <TextareaAutosize
                className="interview_fieldData"
                type="text"
                id={item}
                name="interview_pg9_c"
                onChange={handleFieldChange}
                onClick={createResponse}
                value={patientInterview_pg9.interview_pg9_c}
              />
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientInterview_pg9}
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

export default Interview_Pg9;
