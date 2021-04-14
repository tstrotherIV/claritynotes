import React, { useState, useEffect } from "react";
import EmptyFooterSpace from "../../shared/EmptyFooterSpace";
import "./referral.scss";
import { Input, Button } from "reactstrap";
import ButtonNavigation from "../../shared/ButtonNavigation";
import DataManager from "../../../data_module/DataManager";
import { AgeFromDateString } from "age-calculator";
import TextareaAutosize from "react-textarea-autosize";

function PsychologicalEvaluationReferral(props) {
  const [patient, setPatient] = useState("");
  const [lastItem, setLastItem] = useState([]);
  const [startItem, setStartItem] = useState([]);
  const [paragraphEnableEdit, setParagraphEnableEdit] = useState(false);
  const [paragraph, setParagraph] = useState("");
  const [modifiedParagraph, setModifiedParagraph] = useState("");

  const next = "/psychological_evaluation_additional_data";
  const back = "/psychological_evaluation_consent";

  let ageFromString = new AgeFromDateString(patient.patient_Date_of_Birth).age;

  const patientProNoun = () => {
    switch (patient.patient_gender) {
      case "Male":
        return "his";
      case "Female":
        return "her";
      default:
        return "they";
    }
  };

  const handleCheckBoxChange = (e) => {
    const target = e.target;
    const value = target.checked;
    const name = target.name;
    getParagraph();
    setParagraphEnableEdit(true);
  };

  const DefaultParagraph = () => {
    return (
      <div className="centerText" id="referral_paragraph">
        {String(props.patientDetails.patient_first_name)}{" "}
        {String(props.patientDetails.patient_last_name)} is a{" "}
        {String(ageFromString)} year old{" "}
        {String(props.patientDetails.patient_married)}{" "}
        {String(props.patientDetails.patient_gender)} who was referred by the
        [Referral] for a psychological evaluation to determine{" "}
        {String(patientProNoun())} current cognitive, emotional, behavioral, and
        psychological status and make recommendations as to{" "}
        {String(patientProNoun())} ability to protect, provide for, and care for{" "}
        {String(patientProNoun())} children{" "}
        {String(
          startItem.map((child) => {
            let childAge = new AgeFromDateString(child.dob).age;
            return ` ${child.first_name} (${childAge}), `;
          })
        )}{" "}
        and{" "}
        {String(
          lastItem.map((child) => {
            let childAge = new AgeFromDateString(child.dob).age;
            return ` ${child.first_name} (${childAge}) `;
          })
        )}
        and maintain their placement in {String(patientProNoun())} home.
      </div>
    );
  };

  const getParagraph = () => {
    const need = document.getElementById("referral_paragraph").innerHTML;
    setParagraph(String(need));
  };

  const getData = () => {
    const check_for_patient = sessionStorage.getItem("patient_id");

    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      setPatient(patientInfo);
      if (patientInfo.referral_paragraph_updated) {
        setParagraph(patientInfo?.referral_paragraph_updated);
      }
    });
  };

  const getChildren = () => {
    DataManager.getChildren(props.patientId).then((children) => {
      setStartItem(children.slice(0, -1));
      setLastItem(children.slice(-1));
    });
  };

  const updateParagraph = (e) => {
    const target = e.target;
    const value = target.value;
    setParagraph(value);
  };

  const saveParagraph = () => {
    DataManager.update("patients", {
      referral_paragraph_updated: paragraph,
    }).then(() => {
      props.getData();
      setParagraphEnableEdit(false);
    });
  };

  const updatePatient = () => {
    const editedPatient = {
      referral_paragraph_modified:
        modifiedParagraph.referral_paragraph_modified,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  useEffect(() => {
    getData();
    getChildren();
  }, [props]);

  return (
    <div>
      <div>
        <div className="fullpage">
          <div>
            <div className="centerContent">
              <div className="d-flex justify-content-center mt-5">
                <h1 className="text-white">Psychological Evaluation</h1>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <h2 className="text-white">Reason for Referral</h2>
              </div>

              <div className="d-flex justify-content-center mt-5 text-white">
                {!paragraphEnableEdit ? (
                  <>
                    <div className="m-4">
                      <Input
                        type="checkbox"
                        id="referral_paragraph_enable"
                        name="referral_paragraph_enable"
                        onChange={handleCheckBoxChange}
                      />
                    </div>
                    {patient.referral_paragraph_updated ? (
                      <div id="referral_paragraph">
                        {patient.referral_paragraph_updated}
                      </div>
                    ) : (
                      <DefaultParagraph />
                    )}
                  </>
                ) : (
                  <>
                    <TextareaAutosize
                      className="interview_fieldData"
                      type="text"
                      name="referral_paragraph_modified"
                      id="referral_paragraph_modified"
                      value={paragraph}
                      onChange={updateParagraph}
                    />
                    <Button className="text-white" onClick={saveParagraph}>
                      Save Changes
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <ButtonNavigation
          next={next}
          back={back}
          patient={props.patientId}
          updatePatient={updatePatient}
        />
        <EmptyFooterSpace />
      </div>
    </div>
  );
}

export default PsychologicalEvaluationReferral;
