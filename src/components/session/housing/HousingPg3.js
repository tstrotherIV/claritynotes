import React, { useState, useEffect } from "react";
import "./housing.scss";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 42

function HousingPg3(props) {
  const [item, setItem] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [patientHousing_pg3, setPatientHousing_pg3] = useState({
    housing_pg3_a: "",
    housing_pg3_b: "",
    housing_pg3_c: 0,
    housing_pg3_d: 0,
    housing_pg3_e: 0,
  });

  const next = "/employment_pg_1";

  const handleFieldChange = (e) => {
    setPatientHousing_pg3({
      ...patientHousing_pg3,
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
            t1a: "Add Notes Here",
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
      housing_pg3_a: patientHousing_pg3.housing_pg3_a,
      housing_pg3_b: patientHousing_pg3.housing_pg3_b,
      housing_pg3_c: patientHousing_pg3.housing_pg3_c,
      housing_pg3_d: patientHousing_pg3.housing_pg3_d,
      housing_pg3_e: patientHousing_pg3.housing_pg3_e,
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
        "housing_pg3_a",
        "housing_pg3_b",
        "housing_pg3_c",
        "housing_pg3_d",
        "housing_pg3_e",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientHousing_pg3(filtered);
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
          <div className="questionsContainer">
            <h4 className="textWhite centerItem">
              Have you ever spent the night in a car or had to stay with another
              person?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id="housing_pg3_a"
                  name="housing_pg3_a"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientHousing_pg3.housing_pg3_a}
                />
              </div>
            </div>
            <h4 className="textWhite centerItem">
              Is your residence an apartment, house, or trailer?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label
                  className="textWhite interview_title"
                  for="hs-housing-cost"
                >
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id="housing_pg3_b"
                  name="housing_pg3_b"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientHousing_pg3.housing_pg3_b}
                />
              </div>
            </div>
            <div></div>
            <div className="row  m-auto text-center">
              <div className="col-3"></div>
              <div className="col-3">
                <Label className="textWhite" for="">
                  Number of Bedrooms?
                </Label>
                <input
                  className="col-6 m-auto fieldData"
                  type="number"
                  id="housing_pg3_c"
                  name="housing_pg3_c"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientHousing_pg3.housing_pg3_c}
                />
              </div>
              <div className="col-3">
                <Label className="textWhite" for="">
                  Number of Baths?
                </Label>
                <input
                  className="col-6 m-auto fieldData"
                  type="number"
                  id="housing_pg3_d"
                  name="housing_pg3_d"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientHousing_pg3.housing_pg3_d}
                />
              </div>
              <div className="col-3">
                <Label className="textWhite" for="">
                  How old is it?
                </Label>
                <input
                  className="col-6 m-auto fieldData"
                  type="number"
                  id="housing_pg3_e"
                  name="housing_pg3_e"
                  onChange={handleFieldChange}
                  onClick={createResponse}
                  value={patientHousing_pg3.housing_pg3_e}
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
            patientNotes={patientHousing_pg3}
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

export default HousingPg3;
