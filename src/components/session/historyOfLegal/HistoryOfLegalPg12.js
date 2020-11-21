import React from "react";
import { Label, Input, Button } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/termOfParentalRights';
// pdf page 62

function HistoryOfLegalPg12(props) {
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
            noted the last time she used methamphetamines was 
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
            reported she started abusing opiates at age 
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
            noted the last time she ever used opiates was 
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
            reported she started using heroin at age 
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
            She reported the last time she used heroin was
            <Input
              className="col-4 mr-2 ml-2 mb-2"
              type=""
              id=""
              placeholder=""
            />  
          </div>
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
        </div>
        <div id="footer">
          <div className="buttonSection">
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/history_of_legal_pg_11`);
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
                props.history.push(`/history_of_legal_pg_13`);
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

export default HistoryOfLegalPg12;
