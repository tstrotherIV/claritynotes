import React, { useState } from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

import "./interviews.scss";

function Interview_Pg9(props) {

  const [patientInterview_pg9, setPatientInterview_pg9] = useState({
    interview_pg9_a: "",
    interview_pg9_b: "",
    interview_pg9_c: "",
  })

  const next = "/family_pg_1";

  const handleFieldChange = (e) => {
    setPatientInterview_pg9({ ...patientInterview_pg9, [e.target.name]: e.target.value});
  }

  return (
    <>
      <div id="page-container">
      <div id="content-wrap">
    <Heading /> 
      <div className="header questionsContainerWide">
        <h2 className="textWhite">Interviews</h2>
      </div>
      <h4 className="textWhite centerItem">
        What do you think you need to work on?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="interview_pg9_a"
            name="interview_pg9_a"
            onChange={handleFieldChange}
            value={patientInterview_pg9.interview_pg9_a}
          />
        </div>
      </div>
      <div>
        <div className="div1Fields">
          <div className="in2">
            <Label className="textWhite title" for="caseNumber">
            [Patient Name, First] was dressed in
            </Label>
            <TextareaAutosize              
              className="fieldData2"
              type="text"
              id="interview_pg9_b"
              name="interview_pg9_b"
              onChange={handleFieldChange}
              value={patientInterview_pg9.interview_pg9_b}
            />
          </div>
        </div>
      </div>
      <div className="textWhite centerItem">
      and she appropriately groomed. (Write details! Was she malodourous, had greasy/unbrushed hair, unbathed, etc.? Notate the appearance and add to behavioral observations.)
      </div>
      <div className="interview_div1">
        <div className="interview_line1">
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="interview_pg9_c"
            name="interview_pg9_c"
            onChange={handleFieldChange}
            value={patientInterview_pg9.interview_pg9_c}
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
