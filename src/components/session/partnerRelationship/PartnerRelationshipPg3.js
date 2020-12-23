import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 82

function PartnerRelationshipPg3(props) {

  const [patientPartnerRelationshipPg3, setPatientPartnerRelationshipPg3] = useState({
    partner_relationship_pg3_a: "",
    partner_relationship_pg3_b: "",
    partner_relationship_pg3_c: "",
  })

  const next = "/partner_relationship_pg_4";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg3({ ...patientPartnerRelationshipPg3, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Do you and [NAME] fight or argue?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg3_a"
            name="partner_relationship_pg3_a"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg3.partner_relationship_pg3_a}
          />
        </div>
        <h4 className="textWhite centerItem">When you and [NAME] get into an argument or disagreement, how do you resolve it?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg3_b"
            name="partner_relationship_pg3_b"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg3.partner_relationship_pg3_b}
          />
        </div>
        <h4 className="textWhite centerItem">Does [NAME] drink frequently or use drugs?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg3_c"
            name="partner_relationship_pg3_c"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg3.partner_relationship_pg3_c}
          />
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

export default PartnerRelationshipPg3;
