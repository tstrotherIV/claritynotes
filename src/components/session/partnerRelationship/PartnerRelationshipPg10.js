import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 89

function PartnerRelationshipPg10(props) {

  const [patientPartnerRelationshipPg10, setPatientPartnerRelationshipPg10] = useState({
    partner_relationship_pg10_a: "",
    partner_relationship_pg10_b: "",
  })

  const next = "/parenting_pg_1";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg10({ ...patientPartnerRelationshipPg10, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Do you find yourself feeling more depressed or anxious than before this relationship?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg10_a"
            name="partner_relationship_pg10_a"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg10.partner_relationship_pg10_a}
          />
        </div>
        <h4 className="textWhite centerItem">Do you find yourself isolated from friends and family now?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg10_b"
            name="partner_relationship_pg10_b"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg10.partner_relationship_pg10_b}
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

export default PartnerRelationshipPg10;
