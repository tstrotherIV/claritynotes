import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

// pdf page 82

function PartnerRelationshipPg3(props) {
  const [item, setItem] = useState("");
  const [
    patientPartnerRelationshipPg3,
    setPatientPartnerRelationshipPg3,
  ] = useState({
    partner_relationship_pg3_a: "",
    partner_relationship_pg3_b: "",
    partner_relationship_pg3_c: "",
  });

  const next = "/partner_relationship_pg_4";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg3({
      ...patientPartnerRelationshipPg3,
      [e.target.name]: e.target.value,
    });
  };

  const convertIDfunc = (e) => {
    const fieldID = convertID.convertID(e);
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      partner_relationship_pg3_a:
        patientPartnerRelationshipPg3.partner_relationship_pg3_a,
      partner_relationship_pg3_b:
        patientPartnerRelationshipPg3.partner_relationship_pg3_b,
      partner_relationship_pg3_c:
        patientPartnerRelationshipPg3.partner_relationship_pg3_c
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
        "partner_relationship_pg3_a",
        "partner_relationship_pg3_b",
        "partner_relationship_pg3_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPartnerRelationshipPg3(filtered);
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
              Do you and [NAME] fight or argue?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg3_a"
                  name="partner_relationship_pg3_a"
                  onChange={handleFieldChange}
                  value={
                    patientPartnerRelationshipPg3.partner_relationship_pg3_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                When you and [NAME] get into an argument or disagreement, how do
                you resolve it?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg3_b"
                  name="partner_relationship_pg3_b"
                  onChange={handleFieldChange}
                  value={
                    patientPartnerRelationshipPg3.partner_relationship_pg3_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Does [NAME] drink frequently or use drugs?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg3_c"
                  name="partner_relationship_pg3_c"
                  onChange={handleFieldChange}
                  value={
                    patientPartnerRelationshipPg3.partner_relationship_pg3_c
                  }
                />
              </div>
            </div>
          </div>
          <div id="footer">
            <ButtonNavigation
              next={next}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientPartnerRelationshipPg3}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerRelationshipPg3;
