import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 83

function PartnerRelationshipPg4(props) {

  const [patientPartnerRelationshipPg4, setPatientPartnerRelationshipPg4] = useState({
    partner_relationship_pg4_a: "",
    partner_relationship_pg4_b: "",
    partner_relationship_pg4_c: "",
  })

  const next = "/partner_relationship_pg_5";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg4({ ...patientPartnerRelationshipPg4, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">What first attracted you to [NAME]?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg4_a"
            name="partner_relationship_pg4_a"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg4.partner_relationship_pg4_a}
          />
        </div>
        <h4 className="textWhite centerItem">What do you continue to enjoy about [NAME]?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg4_b"
            name="partner_relationship_pg4_b"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg4.partner_relationship_pg4_b}
          />
        </div>
        <h4 className="textWhite centerItem">What are/were some of [NAME]'s qualities that you dislike or find annoying?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg4_c"
            name="partner_relationship_pg4_c"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg4.partner_relationship_pg4_c}
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

export default PartnerRelationshipPg4;
