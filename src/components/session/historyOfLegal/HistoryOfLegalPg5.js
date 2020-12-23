import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 55

function HistoryOfLegalPg5(props) {

  const [patientHistoryOfLegal_pg5, setPatientHistoryOfLegal_pg5] = useState({
    history_of_legal_pg5_a: "",
    history_of_legal_pg5_b: "",
    history_of_legal_pg5_c: "",
  })

  const next = "/history_of_legal_pg_6";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg5({ ...patientHistoryOfLegal_pg5, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Legal, Crime, and Conviction</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">What were the initial charges?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg5_a"
            name="history_of_legal_pg5_a"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg5.history_of_legal_pg5_a}
          />
        </div>
        <h4 className="textWhite centerItem">What was the final agreed upon charge?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg5_b"
            name="history_of_legal_pg5_b"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg5.history_of_legal_pg5_b}
          />
        </div>
        <h4 className="textWhite centerItem">Has your probation ever been revoked?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg5_c"
            name="history_of_legal_pg5_c"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg5.history_of_legal_pg5_c}
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

export default HistoryOfLegalPg5;
