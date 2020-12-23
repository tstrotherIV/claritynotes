import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 62

function HistoryOfLegalPg12(props) {

  const [patientHistoryOfLegal_pg12, setPatientHistoryOfLegal_pg12] = useState({
    history_of_legal_pg12_a: "",
    history_of_legal_pg12_b: "",
    history_of_legal_pg12_c: "",
    history_of_legal_pg12_d: "",
    history_of_legal_pg12_e: "",
    history_of_legal_pg12_f: "",
    history_of_legal_pg12_g: "",
  })

  const next = "/history_of_legal_pg_13";

  const handleFieldChange = (e) => {
    setPatientHistoryOfLegal_pg12({ ...patientHistoryOfLegal_pg12, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">History of Legal, Crime, and Conviction</h2>
        <div className="questionsContainerWide text-center">
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            reported she started using methamphetamines at age 
            <TextareaAutosize              
              className="col-4 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="history_of_legal_pg12_a"
              name="history_of_legal_pg12_a"
              onChange={handleFieldChange}
              value={patientHistoryOfLegal_pg12.history_of_legal_pg12_a}
            />  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            noted the last time she used methamphetamines was 
            <TextareaAutosize              
              className="col-4 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="history_of_legal_pg12_b"
              name="history_of_legal_pg12_b"
              onChange={handleFieldChange}
              value={patientHistoryOfLegal_pg12.history_of_legal_pg12_b}
            />  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            reported she started abusing opiates at age 
            <TextareaAutosize              
              className="col-4 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="history_of_legal_pg12_c"
              name="history_of_legal_pg12_c"
              onChange={handleFieldChange}
              value={patientHistoryOfLegal_pg12.history_of_legal_pg12_c}
            />  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            noted the last time she ever used opiates was 
            <TextareaAutosize              
              className="col-4 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="history_of_legal_pg12_d"
              name="history_of_legal_pg12_d"
              onChange={handleFieldChange}
              value={patientHistoryOfLegal_pg12.history_of_legal_pg12_d}
            />  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            reported she started using heroin at age 
            <TextareaAutosize              
              className="col-4 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="history_of_legal_pg12_e"
              name="history_of_legal_pg12_e"
              onChange={handleFieldChange}
              value={patientHistoryOfLegal_pg12.history_of_legal_pg12_e}
            />  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            She reported the last time she used heroin was
            <TextareaAutosize              
              className="col-4 mr-2 ml-2 mb-2 fieldData"
              type=""
              id="history_of_legal_pg12_f"
              name="history_of_legal_pg12_f"
              onChange={handleFieldChange}
              value={patientHistoryOfLegal_pg12.history_of_legal_pg12_f}
            />  
          </div>
          <h4 className="mt-2 textWhite centerItem">How many times have you been hungover/had a headache or shakes from drinking too much alcohol?</h4>
          <div className="interview_div1">
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <TextareaAutosize                
                className="fieldData"
                type="text"
                id="history_of_legal_pg12_g"
                name="history_of_legal_pg12_g"
                onChange={handleFieldChange}
                value={patientHistoryOfLegal_pg12.history_of_legal_pg12_g}
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

export default HistoryOfLegalPg12;
