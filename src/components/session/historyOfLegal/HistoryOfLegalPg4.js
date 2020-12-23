import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 54

function HistoryOfLegalPg4(props) {

  const [patientHistoryOfLegal_pg4, setPatientHistoryOfLegal_pg4] = useState({
    history_of_legal_pg4_a: "",
    history_of_legal_pg4_b: "",
    history_of_legal_pg4_c: "",
  })

  const next = "/history_of_legal_pg_5";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg4({ ...patientHistoryOfLegal_pg4, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Legal, Crime, and Conviction</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">What did you and the District Attorney agree upon?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg4_a"
            name="history_of_legal_pg4_a"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg4.history_of_legal_pg4_a}
          />
        </div>
        <h4 className="textWhite centerItem">How many times have you been on probation?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg4_b"
            name="history_of_legal_pg4_b"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg4.history_of_legal_pg4_b}
          />
        </div>
        <h4 className="textWhite centerItem">What were the circumstances and charges?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg4_c"
            name="history_of_legal_pg4_c"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg4.history_of_legal_pg4_c}
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

export default HistoryOfLegalPg4;
