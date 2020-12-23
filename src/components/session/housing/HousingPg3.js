import React, {useState} from "react";
import "./housing.scss";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 42

function HousingPg3(props) {

  const [patientHousing_pg3, setPatientHousing_pg3] = useState({
    housing_pg3_a: "",
    housing_pg3_b: "",
    housing_pg3_c: "",
    housing_pg3_d: "",
    housing_pg3_e: "",
  })

  const next = "/employment_pg_1"

  const handleFieldChange = (e) => {
    setPatientHousing_pg3({ ...patientHousing_pg3, [e.target.name]: e.target.value});
  }

  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
      <Heading />
      <h2 className="textWhite text-center mb-4">Housing</h2>
      <div className="questionsContainer">
      <h4 className="textWhite centerItem">Have you ever spent the night in a car or had to stay with another person?</h4>
        <div className="interview_div1">
          <div className="interview_line1">
            <Label className="textWhite interview_title" for="">
              [Patient Name, First] said:
            </Label>
            <TextareaAutosize              
              className="interview_fieldData"
              type="text"
              id="housing_pg3_a"
              name="housing_pg3_a"
              onChange={handleFieldChange}
              value={patientHousing_pg3.housing_pg3_a}
            />
        </div>
      </div>
      <h4 className="textWhite centerItem">Is your residence an apartment, house, or trailer?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="hs-housing-cost">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            id="housing_pg3_b"
            name="housing_pg3_b"
            onChange={handleFieldChange}
            value={patientHousing_pg3.housing_pg3_b}
          />
        </div>
      </div>
      <div>

      </div>
      <div className="row  m-auto text-center">
        <div className="col-3"></div>
        <div className="col-3">
      <Label className="textWhite" for="">
            Number of Bedrooms?
          </Label>
          <TextareaAutosize            
            className="col-6 m-auto fieldData"
            type="text"
            id="housing_pg3_c"
            name="housing_pg3_c"
            onChange={handleFieldChange}
            value={patientHousing_pg3.housing_pg3_c}
          />
      </div>
      <div className="col-3">
      <Label className="textWhite" for="">
            Number of Baths?
          </Label>
          <TextareaAutosize            
            className="col-6 m-auto fieldData"
            type="text"
            id="housing_pg3_d"
            name="housing_pg3_d"
            onChange={handleFieldChange}
            value={patientHousing_pg3.housing_pg3_d}
          />
      </div>
      <div className="col-3">
      <Label className="textWhite" for="">
            How old is it?
          </Label>
          <TextareaAutosize            
          className="col-6 m-auto fieldData"
            type="text"
            id="housing_pg3_e"
            name="housing_pg3_e"
            onChange={handleFieldChange}
            value={patientHousing_pg3.housing_pg3_e}
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

export default HousingPg3;
