import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

//pdf page 38

function FamilyPg15(props) {

  const [patientFamily_pg15, setPatientFamily_pg15] = useState({
    familiy_pg15_a: "",
    familiy_pg15_b: "",
  })

  const next = "/psychological_evaluation_report_summary";

  const handleFieldChange = (e) => {
    setPatientFamily_pg15({ ...patientFamily_pg15, [e.target.name]: e.target.value});
  }

  return (
    <>
      <div id="page-container">
      <div id="content-wrap">
    <Heading /> 
      <div className="header">
        <h2 className="textWhite">Family</h2>
      </div>
      <h5 className="textWhite centerItem mt-4">
      What are your values and goals?
      </h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg15_a"
            name="family_pg15_a"
            onChange={handleFieldChange}
            value={patientFamily_pg15.family_pg15_a}
          />
        </div>
      </div>     
      <h5 className="textWhite centerItem mt-4">
      How did your leaving home occur? How old were you? Was it on positive terms?
      </h5>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="family_pg15_b"
            name="family_pg15_b"
            onChange={handleFieldChange}
            value={patientFamily_pg15.family_pg15_b}
          />
        </div>
      </div>
      </div>
      <div id="footer">
      <ButtonNavigation next={next} />
      <TermOfParentalRights />
      </div>
    </div>
    </>
  );
}

export default FamilyPg15;
