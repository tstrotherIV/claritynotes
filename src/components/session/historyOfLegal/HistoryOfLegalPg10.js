import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 60

function HistoryOfLegalPg10(props) {

  const [patientHistoryOfLegal_pg10, setPatientHistoryOfLegal_pg10] = useState({
    history_of_legal_pg10_a: "",
    history_of_legal_pg10_b: "",
    history_of_legal_pg10_c: "",
  })

  const next = "/history_of_legal_pg_11";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg10({ ...patientHistoryOfLegal_pg10, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Legal, Crime, and Conviction</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">In relation to drug use?</h4>
          <div className="interview_div1">
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg10_a"
            name="history_of_legal_pg10_a"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg10.history_of_legal_pg10_a}
          />
        </div>
        <h4 className="textWhite centerItem">How many times have you had the experience of hearing from your friends that you did something while you were drunk but don’t remember doing it?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg10_b"
            name="history_of_legal_pg10_b"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg10.history_of_legal_pg10_b}
          />
        </div>
        <h4 className="textWhite centerItem">In relation to drug use?</h4>
        <div className="interview_line1 mb-4">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="history_of_legal_pg10_c"
            name="history_of_legal_pg10_c"
            onChange={handleFieldChange}
            value={patientHistoryOfLegal_pg10.history_of_legal_pg10_c}
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

export default HistoryOfLegalPg10;
