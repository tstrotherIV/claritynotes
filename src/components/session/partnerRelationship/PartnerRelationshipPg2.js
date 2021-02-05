import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 81

function PartnerRelationshipPg2(props) {
  const [item, setItem] = useState("");
  const [
    patientPartnerRelationshipPg2,
    setPatientPartnerRelationshipPg2,
  ] = useState({
    partner_relationship_pg2_a: "",
    partner_relationship_pg2_b: "",
    partner_relationship_pg2_c: "",
  });

  const next = "/partner_relationship_pg_3";
  const back = "/partner_relationship_pg_1";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg2({
      ...patientPartnerRelationshipPg2,
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
      partner_relationship_pg2_a:
        patientPartnerRelationshipPg2.partner_relationship_pg2_a,
      partner_relationship_pg2_b:
        patientPartnerRelationshipPg2.partner_relationship_pg2_b,
      partner_relationship_pg2_c:
        patientPartnerRelationshipPg2.partner_relationship_pg2_c,
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
        "partner_relationship_pg2_a",
        "partner_relationship_pg2_b",
        "partner_relationship_pg2_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPartnerRelationshipPg2(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, );

  return (
    <>
      <div id="page-container">
        <Heading />
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              How long have you been together?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg2_a"
                  name="partner_relationship_pg2_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg2.partner_relationship_pg2_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">How did you meet?</h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg2_b"
                  name="partner_relationship_pg2_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg2.partner_relationship_pg2_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you feel loved and accepted by [NAME PARTNER]?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg2_c"
                  name="partner_relationship_pg2_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg2.partner_relationship_pg2_c
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
              patientNotes={patientPartnerRelationshipPg2}
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

export default PartnerRelationshipPg2;
