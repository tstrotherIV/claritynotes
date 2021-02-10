import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 85

function PartnerRelationshipPg6(props) {
  const [item, setItem] = useState("");
  const [
    patientPartnerRelationshipPg6,
    setPatientPartnerRelationshipPg6,
  ] = useState({
    partner_relationship_pg6_a: "",
    partner_relationship_pg6_b: "",
    partner_relationship_pg6_c: "",
  });

  const next = "/partner_relationship_pg_7";
  const back = "/partner_relationship_pg_5";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg6({
      ...patientPartnerRelationshipPg6,
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
      partner_relationship_pg6_a:
        patientPartnerRelationshipPg6.partner_relationship_pg6_a,
      partner_relationship_pg6_b:
        patientPartnerRelationshipPg6.partner_relationship_pg6_b,
      partner_relationship_pg6_c:
        patientPartnerRelationshipPg6.partner_relationship_pg6_c,
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
        "partner_relationship_pg6_a",
        "partner_relationship_pg6_b",
        "partner_relationship_pg6_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPartnerRelationshipPg6(filtered);
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
              Did [NAME] control all your finances, give you an allowance?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg6_a"
                  name="partner_relationship_pg6_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg6.partner_relationship_pg6_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Did [NAME] belittle you in public or in private?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg6_b"
                  name="partner_relationship_pg6_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg6.partner_relationship_pg6_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Did [NAME] have intense outbursts of rage "out of the blue"?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg6_c"
                  name="partner_relationship_pg6_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg6.partner_relationship_pg6_c
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
              patientNotes={patientPartnerRelationshipPg6}
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

export default PartnerRelationshipPg6;
