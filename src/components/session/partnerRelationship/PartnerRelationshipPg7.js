import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";

// pdf page 86

function PartnerRelationshipPg7(props) {
  const [item, setItem] = useState("");
  const [
    patientPartnerRelationshipPg7,
    setPatientPartnerRelationshipPg7,
  ] = useState({
    partner_relationship_pg7_a: "",
    partner_relationship_pg7_b: "",
    partner_relationship_pg7_c: "",
  });

  const next = "/partner_relationship_pg_8";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg7({
      ...patientPartnerRelationshipPg7,
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
      partner_relationship_pg7_a:
        patientPartnerRelationshipPg7.partner_relationship_pg7_a,
      partner_relationship_pg7_b:
        patientPartnerRelationshipPg7.partner_relationship_pg7_b,
      partner_relationship_pg7_c:
        patientPartnerRelationshipPg7.partner_relationship_pg7_c,
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
        "partner_relationship_pg7_a",
        "partner_relationship_pg7_b",
        "partner_relationship_pg7_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPartnerRelationshipPg7(filtered);
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
              Did you feel like you had to walk on eggshells around [NAME]?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg7_a"
                  name="partner_relationship_pg7_a"
                  onChange={handleFieldChange}
                  value={
                    patientPartnerRelationshipPg7.partner_relationship_pg7_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Did [NAME] make jokes to others at your expense?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg7_b"
                  name="partner_relationship_pg7_b"
                  onChange={handleFieldChange}
                  value={
                    patientPartnerRelationshipPg7.partner_relationship_pg7_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Did [NAME] showcase extreme jealously?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg7_c"
                  name="partner_relationship_pg7_c"
                  onChange={handleFieldChange}
                  value={
                    patientPartnerRelationshipPg7.partner_relationship_pg7_c
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
              patientNotes={patientPartnerRelationshipPg7}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerRelationshipPg7;
