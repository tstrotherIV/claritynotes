import React from "react";
import { Button, Label, Input } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
// pdf page 98

function BehavioralObservationsPg1(props) {
    return (
    <div>
      <div id="page-container">
        <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-1">Behavioral Observations and Testing Conditions</h2>
        <div className="questionsContainer">
          <p className="textWhite text-center m-0 ">DO THIS IN MOMENT-NOT AFTER THE FACT</p>
          <div className="row mt-3">
          <div className="d-flex flex-wrap col-6 justify-content-center">
          <Label className="text-white text-center">
          How did they express emotions?
          </Label>
          <Input 
          className=""
          type="text"
          id=""
          ></Input>
          </div>
          <div className="d-flex flex-wrap col-6 justify-content-center">     
          <Label className="text-white text-center">
          What was the person's conduct in the office?
          </Label>
          <Input 
          className=""
          type="text"
          id=""
          ></Input>
          </div>
          </div>
          <div className="row mt-5">
          <div className="d-flex flex-wrap col-6 justify-content-center">
          <Label className="text-white text-center mt-2 mb-2">
          What was the person's conduct in the office?
          Withdrawn, Hoodie Shirt, Clingy, Needy, Aggressive, Frightening
          </Label>
          <Input 
          className=""
          type="text"
          id=""
          ></Input>
          </div>
          <div className="d-flex flex-wrap col-6 justify-content-center align-items-end">     
          <Label className="textWhite d-flex text-center align-items-end m-0 p-0">
          Are they able to focus?
          </Label>
          <Input 
          className="m-0 p-0"
          type="text"
          id=""
          placeholder=""
          ></Input>
          </div>
          </div>

          <div className="row mt-5">
          <div className="d-flex flex-wrap col-6 justify-content-center">
          <Label className="text-white text-center mt-2 mb-2">
         Able to synthesize information presented?
          </Label>
          <Input 
          className=""
          type="text"
          id=""
          ></Input>
          </div>
          <div className="d-flex flex-wrap col-6 justify-content-center align-items-end">     
          <Label className="textWhite d-flex text-center align-items-end m-0 p-0">
          How do they observe the office and people around them?
          </Label>
          <Input 
          className="m-0 p-0"
          type="text"
          id=""
          placeholder=""
          ></Input>
          </div>
          </div>

        </div> 
        </div>
        <div id="footer">
          <div className="buttonSection">
          <div className="idBox textWhite p-3"></div>
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/material_resources_pg_1`);
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
                props.history.push(`/behavioral_observations_and_testing_conditions_pg_2`);
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

    );
}

export default BehavioralObservationsPg1;
