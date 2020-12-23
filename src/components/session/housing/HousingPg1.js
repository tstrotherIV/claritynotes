import React, {useState} from "react";
import "./housing.scss";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

  // pdf page 40

function HousingPg1(props) {

  const [patientHousing_pg1, setPatientHousing_pg1] = useState({
    housing_pg1_a: "",
    housing_pg1_b: "",
    housing_pg1_c: "",
  })

  const next = "/housing_pg_2";

  const handleFieldChange = (e) => {
    setPatientHousing_pg1({ ...patientHousing_pg1, [e.target.name]: e.target.value});
  }

  return (
    <>
      <div id="page-container">
      <div id="content-wrap">
    <Heading />
    <h2 className="textWhite text-center mb-4">Housing</h2>
    <div className="questionsContainer">
      <h4 className="textWhite centerItem">Do you live alone?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-live-alone">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
          className="fieldData"
            type="text"
            id="housing_pg1_a"
            name="housing_pg1_a"
            onChange={handleFieldChange}
            value={patientHousing_pg1.housing_pg1_a}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem">Who do you live with?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-live-with">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="housing_pg1_b"
            name="housing_pg1_b"
            onChange={handleFieldChange}
            value={patientHousing_pg1.housing_pg1_b}
          />
        </div>
      </div>
      <h4 className="textWhite centerItem ">Who pays your rent or mortgage?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title text-center" for="hs-who-pays">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="fieldData"
            type="text"
            id="housing_pg1_c"
            name="housing_pg1_c"
            onChange={handleFieldChange}
            value={patientHousing_pg1.housing_pg1_c}
          />
        </div>
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

export default HousingPg1;
