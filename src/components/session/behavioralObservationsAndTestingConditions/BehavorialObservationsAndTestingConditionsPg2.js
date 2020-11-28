import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
// pdf page 98

function BehavioralObservationsAndTestingConditionsPg2(props) {
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4"> Behavioral Observations and Testing Conditions</h2>
        <div className="questionsContainer text-center textWhite d-flex justify-content-center">
        <div className="m-4 col-10">
        <Label className="">
          (Cognitive Style) Is their attire conforming or non-conforming?
          </Label>
          <Input 
          className=""
          type="text"
          id=""
          ></Input>
          Impoverished, Circumstantial, Distracted, Naive, Flighty, Expansive, Mistrustful, non-conforming, Dogmatic,
           Fatalistic, Diffident, Cynical, Vacillating, Constricted, Scattered
        </div>
        </div>
        <div className="questionsContainer text-center textWhite d-flex justify-content-center">
        <div className="mt-5 mb-4 ml-4 mr-4 col-10">
        <Label className="">
          How? Describe the person!
          </Label>
          <Input 
          className=""
          type="text"
          id=""
          ></Input>
        </div>
        </div>
       
        <div id="footer">
          <div className="buttonSection">
          <div className="idBox textWhite p-3"></div>
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/behavioral_observations_and_testing_conditions_pg_1`);
              }}
            >
              Previous
            </Button>
            <Button color="info" className="button">
              Save
            </Button>
            <Button color="info" className="button">
              Submit
            </Button>
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/behavioral_observations_and_testing_conditions_pg_3`);
              }}
            >
              Next
            </Button>
            <div className="idBox textWhite p-3">
              <div>Existing Patient: [Case #]</div>
              <div>Patient ID: [Patient ID]</div>
            </div>
          </div>
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
  );
}

export default BehavioralObservationsAndTestingConditionsPg2;
