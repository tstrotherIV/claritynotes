import React, {useState} from "react"; 
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';


// pdf page 86

function PartnerRelationshipPg7(props) {

  const [patientPartnerRelationshipPg7, setPatientPartnerRelationshipPg7] = useState({
    partner_relationship_pg7_a: "",
    partner_relationship_pg7_b: "",
    partner_relationship_pg7_c: "",
  })

  const next = "/partner_relationship_pg_8";

  const handleFieldChange = (e) => {
    setPatientPartnerRelationshipPg7({ ...patientPartnerRelationshipPg7, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
        <Heading />
      <div id="content-wrap">
        <h2 className="textWhite text-center mb-4">PARTNER RELATIONSHIP</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Did you feel like you had to walk on eggshells around [NAME]?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg7_a"
            name="partner_relationship_pg7_a"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg7.partner_relationship_pg7_a}
          />
        </div>
        <h4 className="textWhite centerItem">Did [NAME] make jokes to others at your expense?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg7_b"
            name="partner_relationship_pg7_b"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg7.partner_relationship_pg7_b}
          />
        </div>
        <h4 className="textWhite centerItem">Did [NAME] showcase extreme jealously?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="partner_relationship_pg7_c"
            name="partner_relationship_pg7_c"
            onChange={handleFieldChange}
            value={patientPartnerRelationshipPg7.partner_relationship_pg7_c}
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

export default PartnerRelationshipPg7;
