import React, { useState, useEffect } from "react";
import "./housing.scss";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 41

function HousingPg2(props) {
  const [item, setItem] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [patientHousing_pg2, setPatientHousing_pg2] = useState({
    housing_pg2_a: "",
    housing_pg2_b: "",
    housing_pg2_c: "",
  });

  const next = "/housing_pg_3";

  const handleFieldChange = (e) => {
    setPatientHousing_pg2({
      ...patientHousing_pg2,
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
      housing_pg2_a: patientHousing_pg2.housing_pg2_a,
      housing_pg2_b: patientHousing_pg2.housing_pg2_b,
      housing_pg2_c: patientHousing_pg2.housing_pg2_c,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["housing_pg2_a", "housing_pg2_b", "housing_pg2_c"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientHousing_pg2(filtered);
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
          <h2 className="textWhite text-center mb-4">Housing</h2>
          <h4 className="textWhite centerItem">All or part?</h4>
          <div className="questionsContainerWide">
            <div className="interview_div1">
              <div className="interview_line1">
                <Label
                  className="textWhite interview_title text-center"
                  for="hs-all-or-part"
                >
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="housing_pg2_a"
                  name="housing_pg2_a"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientHousing_pg2.housing_pg2_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              How much is your rent or mortgage?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label
                  className="textWhite interview_title text-center"
                  for="hs-housing-cost"
                >
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="housing_pg2_b"
                  name="housing_pg2_b"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientHousing_pg2.housing_pg2_b}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem ">
              Have you ever experienced times without shelter?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label
                  className="textWhite interview_title text-center"
                  for="hs-without-shelter"
                >
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="housing_pg2_c"
                  name="housing_pg2_c"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientHousing_pg2.housing_pg2_c}
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
            patientNotes={patientHousing_pg2}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            notesData={patientNotes}
            handlePatientNotesChange={handlePatientNotesChange}
            createResponse={createResponse}
          />
        </div>
      </div>
    </>
  );
}

export default HousingPg2;
