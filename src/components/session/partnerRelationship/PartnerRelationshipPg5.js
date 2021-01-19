import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 84

function PartnerRelationshipPg5(props) {
  const [item, setItem] = useState("");
  const [
    patientPartnerRelationshipPg5,
    setPatientPartnerRelationshipPg5,
  ] = useState({
    partner_relationship_pg5_a: "",
    partner_relationship_pg5_b: "",
    partner_relationship_pg5_c: "",
  });

  const next = "/partner_relationship_pg_6";
  const back = "/partner_relationship_pg_4";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg5({
      ...patientPartnerRelationshipPg5,
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
      partner_relationship_pg5_a:
        patientPartnerRelationshipPg5.partner_relationship_pg5_a,
      partner_relationship_pg5_b:
        patientPartnerRelationshipPg5.partner_relationship_pg5_b,
      partner_relationship_pg5_c:
        patientPartnerRelationshipPg5.partner_relationship_pg5_c,
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
        "partner_relationship_pg5_a",
        "partner_relationship_pg5_b",
        "partner_relationship_pg5_c",
      ];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientPartnerRelationshipPg5(filtered);
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
              What does [NAME] dislike about you?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg5_a"
                  name="partner_relationship_pg5_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg5.partner_relationship_pg5_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">(IF DOMESTIC VIOLENCE)</h4>
              <h4 className="textWhite centerItem">
                Did [NAME] critize your family or friends; separate you from
                family and friends
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg5_b"
                  name="partner_relationship_pg5_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg5.partner_relationship_pg5_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Did [NAME] tell you how you should dress?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg5_c"
                  name="partner_relationship_pg5_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientPartnerRelationshipPg5.partner_relationship_pg5_c
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
              patientNotes={patientPartnerRelationshipPg5}
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

export default PartnerRelationshipPg5;
