import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 61

function HistoryOfLegalPg11(props) {

  const [patientHistoryOfLegal_pg11, setPatientHistoryOfLegal_pg11] = useState({
    history_of_legal_pg11_a: "",
    history_of_legal_pg11_b: "",
    history_of_legal_pg11_c: "",
    history_of_legal_pg11_d: "",
    history_of_legal_pg11_e: "",
    history_of_legal_pg11_f: "",
  })

  const next = "/history_of_legal_pg_12";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg11({ ...patientHistoryOfLegal_pg11, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Legal, Crime, and Conviction</h2>
        <div className="questionsContainer text-center">
        <h4 className="mt-2 textWhite centerItem">How many times have you been hungover/had a headache or shakes from drinking too much alcohol?</h4>
          <div className="interview_div1">
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize                
                className="fieldData"
                type="text"
                id="history_of_legal_pg11_a"
                name="history_of_legal_pg11_a"
                onChange={handleFieldChange}
                value={patientHistoryOfLegal_pg11.history_of_legal_pg11_a}
              />
            </div>
          </div>
          <h4 className="mt-2 textWhite centerItem">In relation to drug use?</h4>
          <div className="interview_div1">
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize                
                className="fieldData"
                type="text"
                id="history_of_legal_pg11_b"
                name="history_of_legal_pg11_b"
                onChange={handleFieldChange}
                value={patientHistoryOfLegal_pg11.history_of_legal_pg11_b}
              />
            </div>
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            reported she started smoking marijuana at age 
          <TextareaAutosize                
            className="col-4 mr-2 ml-2 mb-2 fieldData"
                type=""
                id="history_of_legal_pg11_c"
                name="history_of_legal_pg11_c"
                onChange={handleFieldChange}
                value={patientHistoryOfLegal_pg11.history_of_legal_pg11_c}
              />  
          </div> 
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            noted smoking 
            <TextareaAutosize                
                className="col-2 mr-2 ml-2 mb-2 fieldData"
                type="text"
                id="history_of_legal_pg11_d"
                name="history_of_legal_pg11_d"
                onChange={handleFieldChange}
                value={patientHistoryOfLegal_pg11.history_of_legal_pg11_d}
              />
              times per week.  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            reported she started using cocaine at age
            <TextareaAutosize                 
                  className="col-4 mr-2 ml-2 mb-2 fieldData"
                  type=""
                  id="history_of_legal_pg11_e"
                  name="history_of_legal_pg11_e"
                  onChange={handleFieldChange}
                  value={patientHistoryOfLegal_pg11.history_of_legal_pg11_e}
                />  
              
          </div> 
          <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            noted the last time she used cocaine was
            <TextareaAutosize                  
                  className="col-4 mr-2 ml-2 mb-2 fieldData"
                  type=""
                  id="history_of_legal_pg11_f"
                  name="history_of_legal_pg11_f"
                  onChange={handleFieldChange}
                  value={patientHistoryOfLegal_pg11.history_of_legal_pg11_f}
                />  
              
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

export default HistoryOfLegalPg11;
