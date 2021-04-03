import React, { useState, useEffect } from "react";
import "./sessionHome.scss";
import { Button } from "reactstrap";
import DataManager from "../../../data_module/DataManager";

function SessionStep1(props) {
  const [patient, setPatient] = useState({});

  const getData = async () => {
    const check_for_patient = sessionStorage.getItem("patient_id");
    const patientInfo = await DataManager.getPatient(check_for_patient);
    setPatient(patientInfo);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div className="wrapContent mt-5">
        <div className="textWhite m-2 p-2">
          {props.patientDetails.patient_first_name}{" "}
          {props.patientDetails.patient_last_name}
        </div>
        <div className="textWhite m-2 p-2">
          DOB: {props.patientDetails.patient_Date_of_Birth}
        </div>
        <div className="textWhite m-2 p-2">Patient ID: {props.patientDetails.id}</div>
        <div className="textWhite m-2 p-2">Existing Patient: [Case #]</div>
      </div>
      <div className="shHeader">
        <h1 className="textWhite">
          What would you like to do for {props.patientDetails.patient_first_name}{" "}
          {props.patientDetails.patient_last_name}?
        </h1>
      </div>
      <h4 className="flexCenter textWhite">Please select an option</h4>
      <div className="container">
        <div className="row text-center justify-content-center m-5">
          <Button
            className="col-md button2"
            color="light"
            onClick={() => {
              props.history.push(`/psychological_evaluation`);
            }}
          >
            Interview
          </Button>
          <Button
            className="col-md button2"
            color="light"
            // onClick={() => {
            //   props.history.push(`/tourViewer/${props.tour.id}`);
            // }}
          >
            Conclusion Report
          </Button>
          <Button
            className="col-md button2"
            color="light"
            // onClick={() => {
            //   props.history.push(`/tourViewer/${props.tour.id}`);
            // }}
          >
            Treatment Plan
          </Button>
        </div>
      </div>
    </>
  );
}

export default SessionStep1;
