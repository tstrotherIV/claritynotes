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
  const [patientChildren, setPatientChildren] = useState([]);
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
    setParagraphEnableEdit({ ...paragraphEnableEdit, [name]: value });
  };

  const DefaultParagraph = () => {
    return (
      <div className="centerText" id="referral_paragraph">
        {String(patient.patient_first_name)} {String(patient.patient_last_name)}{" "}
        is a {String(ageFromString)} year old {String(patient.patient_married)}{" "}
        {String(patient.patient_gender)} who was referred by the [Referral] for
        a psychological evaluation to determine {String(patientProNoun())}{" "}
        current cognitive, emotional, behavioral, and psychological status and
        make recommendations as to {String(patientProNoun())} ability to
        protect, provide for, and care for {String(patientProNoun())} children{" "}
        {String(
          startItem.map((child) => {
            let childAge = new AgeFromDateString(child.child_dob).age;
            return ` ${child.child_first_name} (${childAge}), `;
          })
        )}{" "}
        and{" "}
        {String(
          lastItem.map((child) => {
            let childAge = new AgeFromDateString(child.child_dob).age;
            return ` ${child.child_first_name} (${childAge}) `;
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
    DataManager.getPatient(props.patientId).then((patientInfo) => {
      setPatient(patientInfo);
    });
  };

  const getChildren = () => {
    DataManager.getChildren(props.patientId).then((children) => {
      setPatientChildren(children);
      setStartItem(children.slice(0, -1));
      setLastItem(children.slice(-1));
    });
  };

  const handleChange = (e) => {
    const editedParagraph = {
      ...paragraph,
      [e.target.name]: e.target.value,
    }
    DataManager.update("patientNotes", editedParagraph);
  }

  const updatePatient = () => {
    const editedPatient = {
      id: props.patientId,
      referral_paragraph_modified:
        modifiedParagraph.referral_paragraph_modified,
    };

    DataManager.update("patients", editedPatient).then(() => {});
  };

  useEffect(() => {
    getData();
    getChildren();
  }, []);

  return (
    <div id="page-container">
      <div id="content-wrap" className="whiteBGD reportMinHeight">
        <div className="fullpage">
          <div className="whiteBGD">
            <div className="centerContent">
              <div className="d-flex justify-content-center mt-5">
                <h1>Psychological Evaluation</h1>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <h2>Reason for Referral</h2>
              </div>

              <div className="d-flex justify-content-center mt-5">
                {!paragraphEnableEdit ? (
                  <>
                    {/* <div className="m-4">
                      <Input
                        type="checkbox"
                        id="referral_paragraph_enable"
                        name="referral_paragraph_enable"
                        onChange={handleCheckBoxChange}
                      />
                    </div> */}
                    {patient.referral_paragraph_modified ? (
                      <div>{patient.referral_paragraph_modified}</div>
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
                      // onChange={handleChange}
                    />
                    <Button>Save Changes</Button>
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
