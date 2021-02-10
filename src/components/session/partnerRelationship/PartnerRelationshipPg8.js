import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 87

function PartnerRelationshipPg8(props) {
  const [item, setItem] = useState("");
  const [
    patientPartnerRelationshipPg8,
    setPatientPartnerRelationshipPg8,
  ] = useState({
    partner_relationship_pg8_a: "",
    partner_relationship_pg8_b: "",
    partner_relationship_pg8_c: "",
  });

  const next = "/partner_relationship_pg_9";
  const back = "/partner_relationship_pg_7";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg8({
      ...patientPartnerRelationshipPg8,
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
      partner_relationship_pg8_a:
        patientPartnerRelationshipPg8.partner_relationship_pg8_a,
      partner_relationship_pg8_b:
        patientPartnerRelationshipPg8.partner_relationship_pg8_b,
      partner_relationship_pg8_c:
        patientPartnerRelationshipPg8.partner_relationship_pg8_c,
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
        "partner_relationship_pg8_a",
        "partner_relationship_pg8_b",
        "partner_relationship_pg8_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPartnerRelationshipPg8(filtered);
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
              Did [NAME] check or control your cell phone, emails, or text
              messages?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg8_a"
                  name="partner_relationship_pg8_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg8.partner_relationship_pg8_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Did [NAME] exhibit demeaning name calling or comments towards
                you?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg8_b"
                  name="partner_relationship_pg8_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg8.partner_relationship_pg8_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Did [NAME] blame you for all conflicts?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg8_c"
                  name="partner_relationship_pg8_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg8.partner_relationship_pg8_c
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
              patientNotes={patientPartnerRelationshipPg8}
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

export default PartnerRelationshipPg8;
