import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg15(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg15,
    setPatientMentalHealthHistory_pg15,
  ] = useState({});

  const next = "/mental_health_history_pg_16";
  const back = "/mental_health_history_pg_14";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg15({
      ...patientMentalHealthHistory_pg15,
      [e.target.name]: value,
    });
  };

  const captureFieldName = (e) => {
    const fieldID = e.target.name;
    setItem(fieldID);
  };

  //CRUD Function Start

  const updatePatient = () => {
    const editedPatient = {
      mental_health_history_pg15_a:
        patientMentalHealthHistory_pg15.mental_health_history_pg15_a,
      mental_health_history_pg15_b:
        patientMentalHealthHistory_pg15.mental_health_history_pg15_b,
      mental_health_history_pg15_c:
        patientMentalHealthHistory_pg15.mental_health_history_pg15_c,
      mental_health_history_pg15_d:
        patientMentalHealthHistory_pg15.mental_health_history_pg15_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg15(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <h2 className="textWhite text-center mb-4">Mental Health History</h2>
          <div className="questionsContainer text-center">
            <div className="interview_div1">
              <h4 className="textWhite centerItem">
                Do you have any piercings other than your ears, at present or in
                the past?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg15_a"
                  name="mental_health_history_pg15_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg15.mental_health_history_pg15_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                What about anhedonia (hard to take pleasure in life)?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg15_b"
                  name="mental_health_history_pg15_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg15.mental_health_history_pg15_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                When things are quiet what do you find you think about the most?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg15_c"
                  name="mental_health_history_pg15_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg15.mental_health_history_pg15_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Has anyone you shared your thoughts with told you that your
                thoughts are a little different?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg15_d"
                  name="mental_health_history_pg15_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg15.mental_health_history_pg15_d
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
              patientNotes={patientMentalHealthHistory_pg15}
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

export default MentalHealthHistoryPg15;
