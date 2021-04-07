import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from "react-textarea-autosize";
import DataManager from "../../../data_module/DataManager";

function FamilyPg10(props) {
  const [item, setItem] = useState("");
  const [patientFamily_pg10, setPatientFamily_pg10] = useState({});

  const next = "/family_pg_11";
  const back = "/family_pg_9";

  const handleFieldChange = (e) => {
    setPatientFamily_pg10({
      ...patientFamily_pg10,
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
      family_pg10_a: patientFamily_pg10.family_pg10_a,
      family_pg10_b: patientFamily_pg10.family_pg10_b,
    };

    DataManager.update("patients", editedPatient).then(() => {
      props.getData();
    });
  };

  //CRUD Function END

  const getData = () => {
    setPatientFamily_pg10(props.patientDetails);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <div className="questionsContainerWide">
            <div className="header">
              <h2 className="textWhite">Family</h2>
            </div>
            <h4 className="textWhite centerItem">
              What is your least favorite childhood memory?
            </h4>
            <div className="interview_div1">
              <div className="interview_line1">
                <Label className="textWhite interview_title" for="">
                  {props.patientDetails.patient_first_name} said:
                </Label>
                <TextareaAutosize
                  className="interview_fieldData"
                  type="text"
                  id={item}
                  name="family_pg10_a"
                  onChange={handleFieldChange}
                  onClick={captureFieldName}
                  value={patientFamily_pg10.family_pg10_a}
                />
              </div>
            </div>
            <div className="interview_div3">
              <h3 className="textWhite">Protective</h3>
              <div className="interview_line3">
                <h4 className="textWhite centerItem containText">
                  Any memories which were negative, which taught them the
                  importance of being protective, cautious, restrained, etc? Did
                  they learn from this negative experience? Does the parent try
                  to prevent things from happening from anything negative?
                </h4>
                <div className="observationsColumn pl-3">
                  <Label className="textWhite " for="">
                    [User Name, First]’s Inference and Observations:
                  </Label>
                  <TextareaAutosize
                    className="fieldData"
                    type="text"
                    id={item}
                    name="family_pg10_b"
                    onChange={handleFieldChange}
                    onClick={captureFieldName}
                    value={patientFamily_pg10.family_pg10_b}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            back={back}
            updatePatient={updatePatient}
            patient={props.patientId}
            patientNotes={patientFamily_pg10}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            item={item}
          />
        </div>
      </div>
    </>
  );
}

export default FamilyPg10;
