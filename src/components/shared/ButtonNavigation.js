import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import history from "../../helpers/history";
import DataManager from "../../data_module/DataManager";

function ButtonNavigation(props) {
  const [patient, setPatient] = useState("");

  const getData = () => {
    DataManager.getPatient(props.patient).then((patientInfo) => {
      setPatient(patientInfo);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="buttonSection">
      <div className="idBox textWhite d-flex flex-wrap justify-content-center"></div>
      <Button
        color="info"
        className="button"
        onClick={() => {
          history.push(`${props.back}`);
        }}
      >
        Previous
      </Button>
      <Button color="info" className="button">
        Save
      </Button>
      <Button
        color="info"
        className="button"
        onClick={() => {
          props.updatePatient(props.patient, props.patientNotes);
        }}
      >
        Submit
      </Button>
      <Button
        color="info"
        className="button"
        onClick={() => {
          history.push(`${props.next}`);
        }}
      >
        Next
      </Button>
      <div className="idBox textWhite p-3">
        <div>Existing Patient: Case #{patient.patient_case_number}</div>
        <div>Patient ID: {patient.id}</div>
      </div>
    </div>
  );
}

export default ButtonNavigation;
