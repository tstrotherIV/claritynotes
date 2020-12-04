import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 102

function BehavioralObservationsPg5(props) {

  const next = "/behavioral_observations_and_testing_conditions_pg_6";  

    return (
    <div>
      <div id="page-container">
        <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-1">Behavioral Observations and Testing Conditions</h2>
        <div className="questionsContainer">
          <p className="textWhite text-center m-0 ">Please note the following behaviors you observed in your session with [Patient Name, First] [Patient Name, Last].</p>
          <div className="row mt-5">


          <div className="d-flex flex-wrap col-6">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white">
          Happiness
          </Label>
          <div className="m-2 text-white col-12">Corners of lips turned up. Slightly raised cheeks. Crows feet at side of eyes.</div>
          </div>


          <div className="d-flex flex-wrap col-6">     
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white">
          Contempt
          </Label>
          <div className="m-2 text-white col-12 d-flex align-text-top">One side of lips raised. Head slightly back.</div>
          </div>
          </div>


          <div className="row mt-5">
          <div className="d-flex flex-wrap col-6">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white">
          Sadness
          </Label>
          <div className="m-2 text-white col-12">Corners of lips turned down. Eyebrows slanted out, pulled together and raised in middle of forehead.</div>
          </div>
          <div className="d-flex flex-wrap col-5">     
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white">
          Disgust
          </Label>
          <div className="m-2 text-white col-12">Raised upper lip. Wrinkled nose.</div>
          </div>
          </div>

          <div className="row mt-5">
          <div className="d-flex flex-wrap col-6">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white">
          Anger
          </Label>
          <div className="m-2 text-white col-12">Lips pressed together. Corners of lips flat or turned down. Eyebrows slanted in, lowered in middle of forehead. Widened eyes (brief stare).</div>
          </div>
          <div className="d-flex flex-wrap col-6">     
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white">
          Surprise
          </Label>
          <div className="m-2 text-white col-12">Opened mouth. Raised eyebrows. Widened eyes.</div>
          </div>
          </div>
          <div className="row mt-5">
          <div className="d-flex flex-wrap col-6">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white">
          Fear
          </Label>
          <div className="m-2 text-white col-12">Widened mouth, slightly open. Wider eyes with raised eyebrows.</div>
          </div>
          
          </div>

        </div> 
        </div>
        <div id="footer">
         <ButtonNavigation next={next}  />
          <TermOfParentalRights />
        </div>
      </div>
    </div>

    );
}

export default BehavioralObservationsPg5;
