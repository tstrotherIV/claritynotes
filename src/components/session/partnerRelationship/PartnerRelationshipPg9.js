import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 88

function PartnerRelationshipPg9(props) {
  const [item, setItem] = useState("");
  const [
    patientPartnerRelationshipPg9,
    setPatientPartnerRelationshipPg9,
  ] = useState({
    partner_relationship_pg9_a: "",
    partner_relationship_pg9_b: "",
    partner_relationship_pg9_c: "",
  });

  const next = "/partner_relationship_pg_10";
  const back = "/partner_relationship_pg_8";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg9({
      ...patientPartnerRelationshipPg9,
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
      partner_relationship_pg9_a:
        patientPartnerRelationshipPg9.partner_relationship_pg9_a,
      partner_relationship_pg9_b:
        patientPartnerRelationshipPg9.partner_relationship_pg9_b,
      partner_relationship_pg9_c:
        patientPartnerRelationshipPg9.partner_relationship_pg9_c,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = [
        "partner_relationship_pg9_a",
        "partner_relationship_pg9_b",
        "partner_relationship_pg9_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPartnerRelationshipPg9(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
         
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              Did [NAME] humiliate you in public, tell others personal
              information about you?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg9_a"
                  name="partner_relationship_pg9_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg9.partner_relationship_pg9_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Did [NAME] coerce unwanted sexual activity?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg9_b"
                  name="partner_relationship_pg9_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg9.partner_relationship_pg9_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Did [NAME] disparage your career, accomplishments, or make you
                quit your job to stay home?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg9_c"
                  name="partner_relationship_pg9_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg9.partner_relationship_pg9_c
                  }
                />
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientPartnerRelationshipPg9}
            />
            <TermOfParentalRights
              questionId={item}
              patientId={props.patientId}
              item={item}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerRelationshipPg9;
