import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 102

function BehavioralObservationsPg5(props) {

  const next = "/procedures_administered_pg_1";  

    return (
    <div>
      <div id="page-container">
        <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-1">Behavioral Observations and Testing Conditions</h2>
        <div className="questionsContainerWide">
          <p className="textWhite text-center m-0 ">Please note the following behaviors you observed in your session with [Patient Name, First] [Patient Name, Last].</p>
          <div className="row mt-4">


          <div className="d-flex flex-wrap col-6">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
          Happiness
          </Label>
          <div className="text-white col-12">Corners of lips turned up. Slightly raised cheeks. Crows feet at side of eyes.</div>
          </div>


          <div className="d-flex flex-wrap col-6">     
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white  m-0 p-0">
          Contempt
          </Label>
          <div className="text-white col-12 d-flex align-text-top">One side of lips raised. Head slightly back.</div>
          </div>
          </div>


          <div className="row mt-4">
          <div className="d-flex flex-wrap col-6">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white  m-0 p-0">
          Sadness
          </Label>
          <div className="text-white col-12">Corners of lips turned down. Eyebrows slanted out, pulled together and raised in middle of forehead.</div>
          </div>
          <div className="d-flex flex-wrap col-6">     
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
          Disgust
          </Label>
          <div className="text-white col-12">Raised upper lip. Wrinkled nose.</div>
          </div>
          </div>

          <div className="row mt-4">
          <div className="d-flex flex-wrap col-6">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white  m-0 p-0">
          Anger
          </Label>
          <div className="text-white col-12">Lips pressed together. Corners of lips flat or turned down. Eyebrows slanted in, lowered in middle of forehead. Widened eyes (brief stare).</div>
          </div>
          <div className="d-flex flex-wrap col-6">     
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white  m-0 p-0">
          Surprise
          </Label>
          <div className="text-white col-12">Opened mouth. Raised eyebrows. Widened eyes.</div>
          </div>
          
          </div>
          <div className="row mt-4">
          <div className="d-flex flex-wrap col-6">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white  m-0 p-0">
          Fear
          </Label>
          <div className="text-white col-12">Widened mouth, slightly open. Wider eyes with raised eyebrows.</div>
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
