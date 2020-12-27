import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';
// pdf page 100

function BehaviorObservationsAndTestingConditionsPg3(props) {

  const [patientBehavioralObservationsPg3, setPatientBehavioralObservationsPg3] = useState({
    behavioral_observations_and_testing_conditions_pg3_a: "",
    behavioral_observations_and_testing_conditions_pg3_b: "",
    behavioral_observations_and_testing_conditions_pg3_c: "",
    behavioral_observations_and_testing_conditions_pg3_d: "",
    behavioral_observations_and_testing_conditions_pg3_e: "",
    behavioral_observations_and_testing_conditions_pg3_f: "",
    behavioral_observations_and_testing_conditions_pg3_g: "",
    behavioral_observations_and_testing_conditions_pg3_h: "",
    behavioral_observations_and_testing_conditions_pg3_i: "",
  })

  const next = "/behavioral_observations_and_testing_conditions_pg_4";  

  const handleFieldChange = (e) => {
    setPatientBehavioralObservationsPg3({ ...patientBehavioralObservationsPg3, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Behavioral Observations and Testing Conditions</h2>
        <div className="questionsContainer">
          <div className="interview_div1">

        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2"> reported [her children go] to </div>
          <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id="behavioral_observations_and_testing_conditions_pg3_a"
              name="behavioral_observations_and_testing_conditions_pg3_a"
              onChange={handleFieldChange}
              value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_a}
            />
            for medical care.  
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2">reported [her children go]</div>
          <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id="behavioral_observations_and_testing_conditions_pg3_b"
              name="behavioral_observations_and_testing_conditions_pg3_b"
              onChange={handleFieldChange}
              value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_b}
            />
            for dental care.  
        </div> 

        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2">said</div>
          <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id="behavioral_observations_and_testing_conditions_pg3_c"
              name="behavioral_observations_and_testing_conditions_pg3_c"
              onChange={handleFieldChange}
              value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_c}
            />
            takes [them] to [their] appointments.  
        </div>
        
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <div className="m-2">reported [her child(ren)] wear</div>
        <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="behavioral_observations_and_testing_conditions_pg3_d"
              name="behavioral_observations_and_testing_conditions_pg3_d"
              onChange={handleFieldChange}
              value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_d}
            />  
            size clothes.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <div className="m-2">reported [her child(ren)] favorite color is </div>
        <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="behavioral_observations_and_testing_conditions_pg3_e"
              name="behavioral_observations_and_testing_conditions_pg3_e"
              onChange={handleFieldChange}
              value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_e}
            />  
            .
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="behavioral_observations_and_testing_conditions_pg3_f"
              name="behavioral_observations_and_testing_conditions_pg3_f"
              onChange={handleFieldChange}
              value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_f}
              placeholder="are/are not"
            />  
            old enough to attend school.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label>
        <div className="m-2">reported she attended </div> 
        <TextareaAutosize              
              className="col-1 mr-2 ml-1 mb-2 fieldData"
              type=""
              id="behavioral_observations_and_testing_conditions_pg3_g"
              name="behavioral_observations_and_testing_conditions_pg3_g"
              onChange={handleFieldChange}
              value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_g}
            />  
            teacher conferences this past school year.
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label>
        <div className="questionLabelWidth m-2">reported she attended </div> 
        <TextareaAutosize              
              className="col-1 ml-1 mb-2 mr-2 fieldData"
              type=""
              id="behavioral_observations_and_testing_conditions_pg3_h"
              name="behavioral_observations_and_testing_conditions_pg3_h"
              onChange={handleFieldChange}
              value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_h}
            />  
            <div className="col-5 p-0">extracurricular activites this past school year.</div>
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <TextareaAutosize              
              className="col-3 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="behavioral_observations_and_testing_conditions_pg3_i"
              name="behavioral_observations_and_testing_conditions_pg3_i"
              onChange={handleFieldChange}
              value={patientBehavioralObservationsPg3.behavioral_observations_and_testing_conditions_pg3_i}
              placeholder="knew/did not know"
            />  
            the name(s) of her child's teacher(s).
        </div>
        </div>
        </div>
        <div id="footer">
          <ButtonNavigation next={next}  />
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
  );
}

export default BehaviorObservationsAndTestingConditionsPg3;
