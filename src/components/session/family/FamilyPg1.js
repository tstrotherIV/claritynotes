import React, {useState} from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
import ButtonNavigation from '../../shared/ButtonNavigation';
import TextareaAutosize from 'react-textarea-autosize';
import lton from 'letter-to-number'


function FamilyPg1(props) {
  const [item, setItem] = useState("")
  const [patientFamily_pg1, setPatientFamily_pg1] = useState({
    familiy_pg1_a: "",
    familiy_pg1_b: "",
    familiy_pg1_c: "",
    familiy_pg1_d: "",
    familiy_pg1_e: "",
  })

  const next = "/family_pg_2";

  const handleFieldChange = (e) => {
    setPatientFamily_pg1({ ...patientFamily_pg1, [e.target.name]: e.target.value});
  }

  const convertID = (e) => {
    const questionId = e.target.name.split('').map(y => {
      if (y % 1 === 0) {
        return String.fromCharCode(y + 10) 
      }
      return y
    }).filter(x => {
      return x != "_"
      }
    )
    const convertedQuestionID = lton(questionId.join('').toUpperCase())
    setItem(convertedQuestionID)
  }

  return (
    <>
    <div id="page-container">
    <div id="content-wrap">
      <Heading />    
      <div className="header">
        <h2 className="textWhite">Family</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-baseline m-2">
              <Label className="textWhite m-4" for="">
              [Patient Name, First] his/her
              </Label>
              <TextareaAutosize                
                className="fieldData col-2"
                type="text"
                id={item}
                name="family_pg1_a"
                onChange={handleFieldChange}
                value={patientFamily_pg1.family_pg1_a}
                onClick={convertID}
                placeholder={item}
              />
          <Label className="textWhite m-4" for="">
          raised him/her in 
              </Label>
              <TextareaAutosize                     
                    className="fieldData col-2"
                    type="text"
                    id="family_pg1_b"
                    name="family_pg1_b"
                    onChange={handleFieldChange}
                    value={patientFamily_pg1.family_pg1_b}
                    onClick={convertID}
                  /> 
              <div className="textWhite ml-2">.</div>
           
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-baseline m-2">      
              <Label className="textWhite ml-1 mr-1 mt-0 mb-0" for="">
              [Patient Name, First] had
              </Label>
              <TextareaAutosize                
                className="fieldData col-2"
                type="text"
                id="family_pg1_c"
                name="family_pg1_c"
                onChange={handleFieldChange}
                value={patientFamily_pg1.family_pg1_c}
                onClick={convertID}
              />
          <div className="textWhite ml-1 mr-1">
          brothers and sisters.</div>
</div>
     <h4 className="textWhite centerItem">
        Who raised you from birth until you moved out of the home?
      </h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            name=""
            id="family_pg1_d"
            name="family_pg1_d"
            onChange={handleFieldChange}
            value={patientFamily_pg1.family_pg1_d}
          />
        </div>
      <h4 className="textWhite centerItem">What are their names?</h4>
      <div className="interview_div1">
        <div className="interview_line1">
          <Label className="textWhite interview_title" for="">
            [Patient Name, First] said:
          </Label>
          <TextareaAutosize            
            className="interview_fieldData"
            type="text"
            name=""
            id="family_pg1_e"
            name="family_pg1_e"
            onChange={handleFieldChange}
            value={patientFamily_pg1.family_pg1_e}
          />
        </div>
      </div>
      </div>
      <div id="footer">
      <ButtonNavigation next={next} />
      <TermOfParentalRights item={item}/>
      </div>
    </div>
    </div>
    </>
  );
}

export default FamilyPg1;
