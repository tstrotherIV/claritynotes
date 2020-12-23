import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 56

function HistoryOfLegalPg6(props) {

  const [patientHistoryOfLegal_pg6, setPatientHistoryOfLegal_pg6] = useState({
    history_of_legal_pg6_a: "",
  })
  
  const next = "/history_of_legal_pg_7";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg6({ ...patientHistoryOfLegal_pg6, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Legal, Crime, and Conviction</h2>
        <div className="questionsContainer text-center">
          <h4 className="textWhite centerItem">Have you had any legal involvement related to a substance; prescribed or unprescribed, legal or illegal?</h4>
          <div className="interview_div1">
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize                
                className="fieldData"
                type="text"
                id="history_of_legal_pg6_a"
                name="history_of_legal_pg6_a"
                onChange={handleFieldChange}
                value={patientHistoryOfLegal_pg6.history_of_legal_pg6_a}
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

export default HistoryOfLegalPg6;
