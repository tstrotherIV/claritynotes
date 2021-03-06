import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Heading from "../../shared/PsychologicalHeading";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";
// pdf page 80

function PartnerRelationshipPg1(props) {
  const [item, setItem] = useState("");
  const [patientPartnerRelationshipPg1, setPatientPartnerRelationshipPg1] =
    useState({
      partner_relationship_pg1_a: "",
      partner_relationship_pg1_b: "",
      partner_relationship_pg1_c: "",
      partner_relationship_pg1_d: "",
      partner_relationship_pg1_e: "",
    });

  const next = "/partner_relationship_pg_2";
  const back = "/perpetrator_of_neglect_and_abuse_pg_4";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg1({
      ...patientPartnerRelationshipPg1,
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
      partner_relationship_pg1_a:
        patientPartnerRelationshipPg1.partner_relationship_pg1_a,
      partner_relationship_pg1_b:
        patientPartnerRelationshipPg1.partner_relationship_pg1_b,
      partner_relationship_pg1_c:
        patientPartnerRelationshipPg1.partner_relationship_pg1_c,
      partner_relationship_pg1_d:
        patientPartnerRelationshipPg1.partner_relationship_pg1_d,
      partner_relationship_pg1_e:
        patientPartnerRelationshipPg1.partner_relationship_pg1_e,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientPartnerRelationshipPg1(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
          <div className="text-center questionsContainerWide row d-flex flex-wrap justify-content-center">
            <h4 className="textWhite centerItem offset-2">
              What are the names of your past three relationships?
            </h4>
            <div className="mb-4 d-flex flex-wrap justify-content-center">
              <div className="textWhite d-flex flex-wrap align-content-end col-2 mb-2">
                {props.patientDetails.patient_first_name} said:
              </div>
              <div className="col-3 d-flex flex-wrap align-items-end m-0 p-0">
                <Label className="textWhite"></Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg1_a"
                  name="partner_relationship_pg1_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
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
                  onClick={captureFieldName}
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
                  onClick={captureFieldName}
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
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg1_d"
                  name="partner_relationship_pg1_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
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
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="partner_relationship_pg1_e"
                  name="partner_relationship_pg1_e"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
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
              back={back}
              updatePatient={updatePatient}
              patient={props.patientId}
              patientNotes={patientPartnerRelationshipPg1}
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

export default PartnerRelationshipPg1;
