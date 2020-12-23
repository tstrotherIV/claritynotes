import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 65

function HistoryOfLegalPg15(props) {

  const [patientHistoryOfLegal_pg15, setPatientHistoryOfLegal_pg15] = useState({
    history_of_legal_pg15_a: "",
  })

  const next = "/mental_health_history_pg_1";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg15({ ...patientHistoryOfLegal_pg15, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Legal, Crime, and Conviction</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Do you see a connection between any of these things?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg15_a"
            name="history_of_legal_pg15_a"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg15.history_of_legal_pg15_a}
          />
        </div> 
      </div>
        </div>
        <div id="footer">
          <ButtonNavigation next={next} />
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
  );
}

export default HistoryOfLegalPg15;
