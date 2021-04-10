import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

// pdf page 69

function MentalHealthHistoryPg11(props) {
  const [item, setItem] = useState("");
  const [
    patientMentalHealthHistory_pg11,
    setPatientMentalHealthHistory_pg11,
  ] = useState({});

  const next = "/mental_health_history_pg_12";
  const back = "/mental_health_history_pg_10";

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setPatientMentalHealthHistory_pg11({
      ...patientMentalHealthHistory_pg11,
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
      mental_health_history_pg11_a:
        patientMentalHealthHistory_pg11.mental_health_history_pg11_a,
      mental_health_history_pg11_b:
        patientMentalHealthHistory_pg11.mental_health_history_pg11_b,
      mental_health_history_pg11_c:
        patientMentalHealthHistory_pg11.mental_health_history_pg11_c,
      mental_health_history_pg11_d:
        patientMentalHealthHistory_pg11.mental_health_history_pg11_d,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientMentalHealthHistory_pg11(props.patientDetails);
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
                When around new people, do you find that you are self-conscious
                and compare yourself critically?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg11_a"
                  name="mental_health_history_pg11_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg11.mental_health_history_pg11_a
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                When things are quiet and you are by yourself, do you find that
                you start thinking about things and realize that you are
                insecure and feel inadequate?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg11_b"
                  name="mental_health_history_pg11_b"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg11.mental_health_history_pg11_b
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you ever feel inferior?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg11_c"
                  name="mental_health_history_pg11_c"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg11.mental_health_history_pg11_c
                  }
                />
              </div>
              <h4 className="textWhite centerItem">
                Do you ever feel like a fraud?
              </h4>
              <div className="interview_line1 mb-4">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="fieldData"
                  type="text"
                  id="mental_health_history_pg11_d"
                  name="mental_health_history_pg11_d"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={
                    patientMentalHealthHistory_pg11.mental_health_history_pg11_d
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
              patientNotes={patientMentalHealthHistory_pg11}
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

export default MentalHealthHistoryPg11;
