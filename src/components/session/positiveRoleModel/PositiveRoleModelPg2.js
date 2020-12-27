import React, {useState} from "react";
import { Label, Input } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 94

function PositiveRoleModelPg2(props) {
  
  const [patientPositiveRoleModelPg2, setPatientPositiveRoleModelPg2] = useState({
    positive_role_model_pg2_a: "",
    positive_role_model_pg2_b: "",
    positive_role_model_pg2_c: "",
    positive_role_model_pg2_d: "",
    positive_role_model_pg2_e: "",
    positive_role_model_pg2_f: "",
    positive_role_model_pg2_g: false,
    
  })

  const next = "/parent_knowledge_pg_1";

  const handleFieldChange = (e) => {
    setPatientPositiveRoleModelPg2({ ...patientPositiveRoleModelPg2, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">POSITIVE ROLE MODEL</h2>
        <div className="questionsContainer">
          <div className="interview_div1"> 
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
            id="positive_role_model_pg2_a"
            name="positive_role_model_pg2_a"
            onChange={handleFieldChange}
            value={patientPositiveRoleModelPg2.positive_role_model_pg2_a}
          />
          </div>
          <div className="col-3 d-flex flex-wrap align-items-end ml-2 justify-content-center align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="positive_role_model_pg2_b"
            name="positive_role_model_pg2_b"
            onChange={handleFieldChange}
            value={patientPositiveRoleModelPg2.positive_role_model_pg2_b}
            />
        </div>
        <div className="col-3 d-flex flex-wrap align-items-end justify-content-center ml-2 p-0 align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="positive_role_model_pg2_c"
            name="positive_role_model_pg2_c"
            onChange={handleFieldChange}
            value={patientPositiveRoleModelPg2.positive_role_model_pg2_c}
            />
          </div>
        </div>
        <div className="mb-4 d-flex flex-wrap justify-content-center mt-4">
        <h5 className="textWhite centerItem text-center offset-2">Give three examples of how you have followed through on promises to yourself and others?</h5>
          <div className="textWhite d-flex flex-wrap align-content-end col-2 mb-2">
            [Patient Name, First] said:
          </div>
          <div className="col-3 d-flex flex-wrap align-items-end m-0 p-0">
          <Label className="textWhite">
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="positive_role_model_pg2_d"
            name="positive_role_model_pg2_d"
            onChange={handleFieldChange}
            value={patientPositiveRoleModelPg2.positive_role_model_pg2_d}
          />
          </div>
          <div className="col-3 d-flex flex-wrap align-items-end ml-2 justify-content-center align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="positive_role_model_pg2_e"
            name="positive_role_model_pg2_e"
            onChange={handleFieldChange}
            value={patientPositiveRoleModelPg2.positive_role_model_pg2_e}
            />
        </div>
        <div className="col-3 d-flex flex-wrap align-items-end justify-content-center ml-2 p-0 align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="positive_role_model_pg2_f"
            name="positive_role_model_pg2_f"
            onChange={handleFieldChange}
            value={patientPositiveRoleModelPg2.positive_role_model_pg2_f}
            />
          </div>
        </div>
      </div>
      <div className="siblingsFields">
      <div className="m-1">
      <h5 className="textWhite text-center">If they are unable to give THREE examples, add:</h5>
            <Input type="checkbox" 
            name="positive_role_model_pg2_g" 
            id="positive_role_model_pg2_g"
            checked={patientPositiveRoleModelPg2.positive_role_model_pg2_g}
            onChange={(e)=> {setPatientPositiveRoleModelPg2(e.target.checked)}} />

            <Label className="textWhite text-center" for="firstName">
            [Patient Name, First] appears to be lacking knowledge and examples which illustrates probable deficits in this area. 
            [Patient Name, First] will need this area to be further developed in therapy. She/he needs her/his goals and values developed in order to guide 
            their own behavior as well as that of their children.
            </Label>
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

export default PositiveRoleModelPg2;
