import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 93

function PositiveRoleModelPg1(props) {

  const [patientPositiveRoleModelPg1, setPatientPositiveRoleModelPg1] = useState({
    positive_role_model_pg1_a: "",
    positive_role_model_pg1_b: "",
    positive_role_model_pg1_c: "",
    positive_role_model_pg1_d: "",
    positive_role_model_pg1_e: "",
    positive_role_model_pg1_f: "",
    positive_role_model_pg1_g: "",
    positive_role_model_pg1_h: "",
    positive_role_model_pg1_i: "",
  })

  const next = "/positive_role_model_pg_2";

  const handleFieldChange = (e) => {
    setPatientPositiveRoleModelPg1({ ...patientPositiveRoleModelPg1, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">POSITIVE ROLE MODEL</h2>
        <div className="questionsContainer">
          <div className="interview_div1">

        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2">he/she</div>
          <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id="positive_role_model_pg1_a"
              name="positive_role_model_pg1_a"
              onChange={handleFieldChange}
              value={patientPositiveRoleModelPg1.positive_role_model_pg1_a}
              placeholder="does/does not"
            />
            smokes cigarettes.  
        </div>
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2">he/she</div>
          <TextareaAutosize              
              className="col-2 mr-2 mb-2 fieldData"
              type="text"
              id="positive_role_model_pg1_b"
              name="positive_role_model_pg1_b"
              onChange={handleFieldChange}
              value={patientPositiveRoleModelPg1.positive_role_model_pg1_b}
              placeholder="does/does not"
            />
            drinks alcohol and  
            <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type="text"
              id="positive_role_model_pg1_c"
              name="positive_role_model_pg1_c"
              onChange={handleFieldChange}
              value={patientPositiveRoleModelPg1.positive_role_model_pg1_c}
              placeholder="confirms/denies"
            />  
            abuse.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="positive_role_model_pg1_d"
              name="positive_role_model_pg1_d"
              onChange={handleFieldChange}
              value={patientPositiveRoleModelPg1.positive_role_model_pg1_d}
              placeholder="confirms/denies"
            />  
            CURRENTLY using substances.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="positive_role_model_pg1_e"
              name="positive_role_model_pg1_e"
              onChange={handleFieldChange}
              value={patientPositiveRoleModelPg1.positive_role_model_pg1_e}
              placeholder="confirms/denies"
            />  
            displaying profanity or prejudice.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <TextareaAutosize              
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="positive_role_model_pg1_f"
              name="positive_role_model_pg1_f"
              onChange={handleFieldChange}
              value={patientPositiveRoleModelPg1.positive_role_model_pg1_f}
              placeholder="confirms/denies"
            />  
            bullying others.
        </div> 
        <div className="m-auto d-flex align-items-center textWhite">
        <Label className="textWhite col-3 text-right" for="">
            [Patient Name, First]
        </Label> 
        <TextareaAutosize               
              className="col-2 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="positive_role_model_pg1_g"
              name="positive_role_model_pg1_g"
              onChange={handleFieldChange}
              value={patientPositiveRoleModelPg1.positive_role_model_pg1_g}
              placeholder="confirms/denies"
            />  
            exhibiting any implusivity or violence.
        </div>
        <div className="mb-4 d-flex flex-wrap justify-content-center mt-4">
        <h5 className="textWhite centerItem text-center offset-2">Give three examples of how you are a positive role model to others?</h5>
          <div className="textWhite d-flex flex-wrap align-content-end col-2 mb-2">
            [Patient Name, First] said:
          </div>
          <div className="col-3 d-flex flex-wrap align-items-end m-0 p-0">
          <Label className="textWhite">
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="positive_role_model_pg1_h"
            name="positive_role_model_pg1_h"
            onChange={handleFieldChange}
            value={patientPositiveRoleModelPg1.positive_role_model_pg1_h}
          />
          </div>
          <div className="col-3 d-flex flex-wrap align-items-end ml-2 justify-content-center align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="positive_role_model_pg1_i"
            name="positive_role_model_pg1_i"
            onChange={handleFieldChange}
            value={patientPositiveRoleModelPg1.positive_role_model_pg1_i}
            />
        </div>
        <div className="col-3 d-flex flex-wrap align-items-end justify-content-center ml-2 p-0 align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="positive_role_model_pg1_j"
            name="positive_role_model_pg1_j"
            onChange={handleFieldChange}
            value={patientPositiveRoleModelPg1.positive_role_model_pg1_j}
            />
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
    </>
  );
}

export default PositiveRoleModelPg1;
