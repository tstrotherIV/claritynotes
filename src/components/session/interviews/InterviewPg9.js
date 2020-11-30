import React from "react";
import { Label, Input } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import "./interviews.scss";

function Interview_Pg9(props) {

  const next = "/family_pg_1";

  return (
    <>
      <div id="page-container">
      <div id="content-wrap">
    <Heading /> 
      <div className="header questionsContainerWide">
        <h1 className="textWhite">Interviews</h1>
      </div>
      <h4 className="textWhite centerItem">
        What do you think you need to work on?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <Input
            className="interview_fieldData"
            type="text"
            id=""
          />
        </div>
      </div>
      <div>
        <div className="div1Fields">
          <div className="in2">
            <Label className="textWhite title" for="caseNumber">
            [Patient Name, First] was dressed in
            </Label>
            <Input
              className="fieldData2"
              type="text"
              id="caseNumber"
            />
          </div>
        </div>
      </div>
      <div className="textWhite centerItem">
      and she appropriately groomed. (Write details! Was she malodourous, had greasy/unbrushed hair, unbathed, etc.? Notate the appearance and add to behavioral observations.)
      </div>
      <div className="interview_div1">
        <div className="interview_line1">
          <Input
            className="interview_fieldData"
            type="text"
            id=""
          />
        </div>
      </div>
      </div>
      <div id="footer">
      <ButtonNavigation next={next} />
      <TermOfParentalRights />
      </div>
    </div>
    </>
  );
}

export default Interview_Pg9;
