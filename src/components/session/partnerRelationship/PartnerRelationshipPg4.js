import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 83

function PartnerRelationshipPg4(props) {
  const [item, setItem] = useState("");
  const [
    patientPartnerRelationshipPg4,
    setPatientPartnerRelationshipPg4,
  ] = useState({
    partner_relationship_pg4_a: "",
    partner_relationship_pg4_b: "",
    partner_relationship_pg4_c: "",
  });

  const next = "/partner_relationship_pg_5";
  const back = "/partner_relationship_pg_3";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg4({
      ...patientPartnerRelationshipPg4,
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
      id: props.patientId,
      partner_relationship_pg4_a:
        patientPartnerRelationshipPg4.partner_relationship_pg4_a,
      partner_relationship_pg4_b:
        patientPartnerRelationshipPg4.partner_relationship_pg4_b,
      partner_relationship_pg4_c:
        patientPartnerRelationshipPg4.partner_relationship_pg4_c,
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
        "partner_relationship_pg4_a",
        "partner_relationship_pg4_b",
        "partner_relationship_pg4_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPartnerRelationshipPg4(filtered);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="page-container">
        <Heading />
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
          <div className="questionsContainer text-center">
            <h4 className="textWhite centerItem">
              What first attracted you to [NAME]?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg4_a"
                  name="partner_relationship_pg4_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg4.partner_relationship_pg4_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                What do you continue to enjoy about [NAME]?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg4_b"
                  name="partner_relationship_pg4_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg4.partner_relationship_pg4_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                What are/were some of [NAME]'s qualities that you dislike or
                find annoying?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg4_c"
                  name="partner_relationship_pg4_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg4.partner_relationship_pg4_c
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
              patientNotes={patientPartnerRelationshipPg4}
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

export default PartnerRelationshipPg4;
