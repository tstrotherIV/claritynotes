import React from "react";
import { Button } from "reactstrap";
import history from "../../helpers/history";

function ButtonNavigation(props) {

    
return(
<div className="buttonSection">
          <div className="idBox textWhite d-flex flex-wrap justify-content-center">
          </div>
            <Button
              color="info"
              className="button"
              onClick={history.goBack}
            >
              Previous
            </Button>
            <Button color="info" className="button">
              Save
            </Button>
            <Button color="info" 
            className="button"
            onClick={() => {
              props.updatePatient(props.patient, props.patientFamily_pg1)
              console.log(props.patient)
              console.log(props.patientFamily_pg1)
            }}>
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
              <div>Existing Patient: [Case #]</div>
              <div>Patient ID: [Patient ID]</div>
            </div>
          </div>
);
}

export default ButtonNavigation;