import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 57

function HistoryOfLegalPg7(props) {

  const [patientHistoryOfLegal_pg7, setPatientHistoryOfLegal_pg7] = useState({
    history_of_legal_pg7_a: "",
    history_of_legal_pg7_b: "",
    history_of_legal_pg7_c: "",
    history_of_legal_pg7_d: "",
  })

  const next = "/history_of_legal_pg_8";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg7({ ...patientHistoryOfLegal_pg7, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Drug Use and Addictive Behaviors</h2>
        <div className="questionsContainer text-center">
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            reported she started drinking alcohol at age 
          <TextareaAutosize                
                className="col-4 mr-2 ml-2 mb-2 fieldData"
                type=""
                id="history_of_legal_pg7_a"
                name="history_of_legal_pg7_a"
                onChange={handleFieldChange}
                value={patientHistoryOfLegal_pg7.history_of_legal_pg7_a}
              />  
          </div> 
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            noted having 
            <TextareaAutosize                
                className="col-2 mr-2 ml-2 mb-2 fieldData"
                type="text"
                id="history_of_legal_pg7_b"
                name="history_of_legal_pg7_b"
                onChange={handleFieldChange}
                value={patientHistoryOfLegal_pg7.history_of_legal_pg7_b}
              />
              drinks per week.  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
            Liquor, beer, or wine?
            </Label>
            <TextareaAutosize                  
                  className="col-4 mr-2 ml-2 mb-2 fieldData"
                  type=""
                  id="history_of_legal_pg7_c"
                  name="history_of_legal_pg7_c"
                  onChange={handleFieldChange}
                  value={patientHistoryOfLegal_pg7.history_of_legal_pg7_c}
                />  
              
          </div> 
          <h4 className="mt-2 textWhite centerItem">How many times have you had the experience of planning to have just one or two drinks and then found that, once you got started, you ended up drinking more than planned?</h4>
          <div className="interview_div1">
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize                
                className="fieldData"
                type="text"
                id="history_of_legal_pg7_d"
                name="history_of_legal_pg7_d"
                onChange={handleFieldChange}
                value={patientHistoryOfLegal_pg7.history_of_legal_pg7_d}
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

export default HistoryOfLegalPg7;
