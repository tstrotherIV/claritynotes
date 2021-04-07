import React from "react";
import { Button } from "reactstrap";
import history from "../../helpers/history";
import { useAlert } from "react-alert";

function ButtonNavigation(props) {
  const alert = useAlert();

  const updatePatient = () => {
    props.updatePatient(props.patient, props.patientNotes);
    alert.show("Saved");
  };

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
      <Button color="info" className="button" onClick={updatePatient}>
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
        <div>
          Existing Patient: Case #{props.patientNotes?.patient_case_number}
        </div>
        <div>Patient ID: {props.patientNotes?.id}</div>
      </div>
    </div>
  );
}

export default ButtonNavigation;
