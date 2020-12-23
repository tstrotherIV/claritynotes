import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 51

function HistoryOfLegalPg2(props) {

  const [patientHistoryOfLegal_pg2, setPatientHistoryOfLegal_pg2] = useState({
    history_of_legal_pg2_a: "",
    history_of_legal_pg2_b: "",
    history_of_legal_pg2_c: "",
  })

  const next = "/history_of_legal_pg_3";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg2({ ...patientHistoryOfLegal_pg2, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Legal, Crime, and Conviction</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">What did you and the DA agree upon?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg2_a"
            name="history_of_legal_pg2_a"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg2.history_of_legal_pg2_a}
          />
        </div>
        <h4 className="textWhite centerItem">Did you take this matter to trial?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg2_b"
            name="history_of_legal_pg2_b"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg2.history_of_legal_pg2_b}
          />
        </div>
        <h4 className="textWhite centerItem">How many times have you been falsely accused?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg2_c"
            name="history_of_legal_pg2_c"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg2.history_of_legal_pg2_c}
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

export default HistoryOfLegalPg2;
