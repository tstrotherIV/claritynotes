import React, { useState, useEffect } from "react";
import { Col, Container, Label, Input, Row } from "reactstrap";
import ButtonNavigation from "../../shared/ButtonNavigation";
import EmptyFooterSpace from "../../shared/EmptyFooterSpace";
import "./consent.scss";
import DataManager from "../../../data_module/DataManager";
import ReferralComp from "../referral/referral";

function PsychologicalEvaluationConsent(props) {
  const [patientConsent, setPatientConsent] = useState({
    patient_consent: false,
    id: "",
  });

  const next = "/psychological_evaluation_additional_data";
  const back = "/psychological_evaluation_spouse";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setPatientConsent({ ...patientConsent, [name]: value });
  };

  const updatePatient = () => {
    const editedPatient = {
      patient_consent: patientConsent.patient_consent,
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

      const allowed = ["patient_consent", "patient_gender"];
      const filtered = Object.keys(raw)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});

      setPatientConsent(filtered);
    });
  };

  const patientProNoun = () => {
    switch (patientConsent.patient_gender) {
      case "Male":
        return "his";
      case "Female":
        return "her";
      default:
        return "they";
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col xs="6">
            <div className="">
              <div className="centerContent">
                <div className="d-flex justify-content-center mt-5">
                  <h2 className="text-white">Psychological Evaluation</h2>
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <h2 className="text-white">Consent</h2>
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <div className="centerText text-white">
                    Prior to initiating the evaluation, its nature, purpose, the
                    risks and benefits were explained to{" "}
                    {props.patientDetails.patient_first_name}{" "}
                    {props.patientDetails.patient_last_name}. Questions were sought
                    and answered. {props.patientDetails.patient_first_name}{" "}
                    demonstrated a basic understanding by restating the
                    information in {patientProNoun()} own words.
                    {props.patientDetails.patient_first_name} indicated willingness
                    to participate in the evaluation and complied with requests.
                  </div>
                </div>
              </div>

              <div className="siblingsFields">
                <div className="m-4">
                  <Input
                    type="checkbox"
                    id="patient_only_child"
                    name="patient_consent"
                    checked={patientConsent.patient_consent}
                    onChange={handleFieldChange}
                  />
                  <Label className="title text-white">
                    Check Here to Confirm
                  </Label>
                </div>
              </div>
            </div>
          </Col>
          <Col xs="6">
            {/* Client wanted to combine the Rerral page, so it is imported here */}
            <ReferralComp {...props}/>
          </Col>
        </Row>
      </Container>
      <div id="footer">
        <ButtonNavigation
          next={next}
          back={back}
          updatePatient={updatePatient}
          patient={props.patientId}
          patientNotes={patientConsent}
        />
        <EmptyFooterSpace />
      </div>
    </>
  );
}

export default PsychologicalEvaluationConsent;
