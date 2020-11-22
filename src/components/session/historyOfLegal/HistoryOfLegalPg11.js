import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
// pdf page 61

function HistoryOfLegalPg11(props) {
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
              <Input
                className=""
                type="text"
                id=""
              />
            </div>
          </div>
          <h4 className="mt-2 textWhite centerItem">In relation to drug use?</h4>
          <div className="interview_div1">
            <div className="interview_line1 mb-4">
              <Label className="textWhite interview_title" for="">
                [Patient Name, First] said:
              </Label>
              <Input
                className=""
                type="text"
                id=""
              />
            </div>
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            reported she started smoking marijuana at age 
          <Input
                className="col-4 mr-2 ml-2 mb-2"
                type=""
                id=""
                placeholder=""
              />  
          </div> 
          <div className="m-auto d-flex align-items-center textWhite">
            <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            noted smoking 
            <Input
                className="col-2 mr-2 ml-2 mb-2"
                type="text"
                id=""
                placeholder=""
              />
              times per week.  
          </div>
          <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            reported she started using cocaine at age
            <Input
                  className="col-4 mr-2 ml-2 mb-2"
                  type=""
                  id=""
                  placeholder=""
                />  
              
          </div> 
          <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
                [Patient Name, First]
            </Label>
            noted the last time she used cocaine was
            <Input
                  className="col-4 mr-2 ml-2 mb-2"
                  type=""
                  id=""
                  placeholder=""
                />  
              
          </div> 
          
        </div>
        <div id="footer">
          <div className="buttonSection">
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/history_of_legal_pg_10`);
              }}
            >
              Previous
            </Button>
            <Button color="info" className="button">
              Save
            </Button>
            <Button color="info" className="button">
              Submit
            </Button>
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/history_of_legal_pg_12`);
              }}
            >
              Next
            </Button>
            <div className="idBox textWhite p-3">
              <div>Existing Patient: [Case #]</div>
              <div>Patient ID: [Patient ID]</div>
            </div>
          </div>
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
  );
}

export default HistoryOfLegalPg11;
