import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
import convertID from "../../../helpers/formFieldIdConverter";


// pdf page 80

function PartnerRelationshipPg1(props) {
  const [item, setItem] = useState("");
  const [
    patientPartnerRelationshipPg1,
    setPatientPartnerRelationshipPg1,
  ] = useState({
    partner_relationship_pg1_a: "",
    partner_relationship_pg1_b: "",
    partner_relationship_pg1_c: "",
    partner_relationship_pg1_d: "",
    partner_relationship_pg1_e: "",
  });

  const next = "/partner_relationship_pg_2";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg1({
      ...patientPartnerRelationshipPg1,
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
      partner_relationship_pg1_a: patientPartnerRelationshipPg1.partner_relationship_pg1_a,
      partner_relationship_pg1_b: patientPartnerRelationshipPg1.partner_relationship_pg1_b,
      partner_relationship_pg1_c: patientPartnerRelationshipPg1.partner_relationship_pg1_c,
      partner_relationship_pg1_d: patientPartnerRelationshipPg1.partner_relationship_pg1_d,
      partner_relationship_pg1_e: patientPartnerRelationshipPg1.partner_relationship_pg1_e,
      
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  //CRUD Function END

  const getData = () => {
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      const raw = {
        ...patientInfo,
      };

      const allowed = ["partner_relationship_pg1_a", "partner_relationship_pg1_b", "partner_relationship_pg1_c","partner_relationship_pg1_d","partner_relationship_pg1_e"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

        setPatientPartnerRelationshipPg1(filtered);
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
          <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
          <div className="text-center questionsContainerWide row d-flex flex-wrap justify-content-center">
            <h4 className="textWhite centerItem offset-2">
              What are the names of your past three relationships?
            </h4>
            <div className="mb-4 d-flex flex-wrap justify-content-center">
              <div className="textWhite d-flex flex-wrap align-content-end col-2 mb-2">
                [Patient Name, First] said:
              </div>
              <div className="col-3 d-flex flex-wrap align-items-end m-0 p-0">
                <Label className="textWhite"></Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg1_a"
                  name="partner_relationship_pg1_a"
                  onChange={handleFieldChange}
                  value={
                    patientPartnerRelationshipPg1.partner_relationship_pg1_a
                  }
                />
              </div>
              <div className="col-3 d-flex flex-wrap align-items-end ml-2 justify-content-center align-content-end">
                <Label className="textWhite" for=""></Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg1_b"
                  name="partner_relationship_pg1_b"
                  onChange={handleFieldChange}
                  value={
                    patientPartnerRelationshipPg1.partner_relationship_pg1_b
                  }
                />
              </div>
              <div className="col-3 d-flex flex-wrap align-items-end justify-content-center ml-2 p-0 align-content-end">
                <Label className="textWhite" for=""></Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg1_c"
                  name="partner_relationship_pg1_c"
                  onChange={handleFieldChange}
                  value={
                    patientPartnerRelationshipPg1.partner_relationship_pg1_c
                  }
                />
              </div>
            </div>
          </div>

          <div className="text-center questionsContainerWide">
            <h4 className="textWhite centerItem">Which partner was abusive?</h4>
            <div className="interview_div1">
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg1_d"
                  name="partner_relationship_pg1_d"
                  onChange={handleFieldChange}
                  value={
                    patientPartnerRelationshipPg1.partner_relationship_pg1_d
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Are you currently married/in a relationship?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title">
                  [Patient Name, First] said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg1_e"
                  name="partner_relationship_pg1_e"
                  onChange={handleFieldChange}
                  value={
                    patientPartnerRelationshipPg1.partner_relationship_pg1_e
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
              patientNotes={patientPartnerRelationshipPg1}
            />
            <TermOfParentalRights />
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerRelationshipPg1;
