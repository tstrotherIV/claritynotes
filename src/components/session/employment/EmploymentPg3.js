import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 45

function EmploymentPg3(props) {
  const [item, setItem] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [patientEmployment_pg3, setPatientEmployment_pg3] = useState({
    employment_pg3_a: "",
    employment_pg3_b: "",
    employment_pg3_c: "",
  });

  const next = "/education_pg_1";

  const handleFieldChange = (e) => {
    setPatientEmployment_pg3({
      ...patientEmployment_pg3,
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
      employment_pg3_a: patientEmployment_pg3.employment_pg3_a,
      employment_pg3_b: patientEmployment_pg3.employment_pg3_b,
      employment_pg3_c: patientEmployment_pg3.employment_pg3_c,
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
        "employment_pg3_a",
        "employment_pg3_b",
        "employment_pg3_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientEmployment_pg3(filtered);
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
          <h2 className="textWhite text-center mb-4">Employment</h2>
          <div className="questionsContainer">
            <h4 className="textWhite centerItem">
              How much do you receive monthly in food stamps?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4 text">
                <Label className="textWhite interview_title text-center" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg3_a"
                  name="employment_pg3_a"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientEmployment_pg3.employment_pg3_a}
                />
              </div>
              <h4 className="textWhite centerItem text-center">
                Do you receive a pension or disability income?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title text-center" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg3_b"
                  name="employment_pg3_b"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientEmployment_pg3.employment_pg3_b}
                />
              </div>
              <h4 className="textWhite centerItem text-center">
                Have you ever been very vulnerable to a partner who used money
                to control you?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title text-center" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="employment_pg3_c"
                  name="employment_pg3_c"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientEmployment_pg3.employment_pg3_c}
                />
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientEmployment_pg3}
            />
            <TermOfParentalRights
              questionId={item}
              patientId={props.patientId}
              notesData={patientNotes}
              handlePatientNotesChange={handlePatientNotesChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmploymentPg3;
