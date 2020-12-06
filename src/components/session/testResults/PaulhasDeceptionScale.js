import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from 'react-textarea-autosize';

//pdf page 116

function PaulasDeceptionScale(props) {
    const next = "/computerized_performance_neurocognitive_assessment"

    return(
<>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className=" mb-1 col-2">Test Results</h3>
                <h4>Paulas Deception Scale</h4>
            </div>
            <div className="m-5 text-white">
                <input
                className=""
                    type="checkbox"
                    id=""
                    />
                    <Label for="" className="m-3">[Patient Name, First] completed a Paulus Deception Scales (PDS)</Label> 
                <p className="text-white"> The Continuous Performance Test 3rd Edition (CPT 3) is a task-oriented computerized assessment of attention-related problems in individuals aged eight years and older. 
                By indexing the respondent's performance in areas of inattentiveness, implusivity, sustained attention, and vigilance the CPT 3 can be useful to the process of diagnosing Attention-Deficit/Hyperactive 
                Disorder (ADHD) and other neurological conditions related to attention. The CPT 3 provides objective information about an individual's performance in attention tasks, complementing information obtained from behavior rating scales.</p>
                <div className="m-4 text-center">Paste in paragraph that says "IM___, SDE___" and type the actual score after IM and SDE.</div>
           <div className="d-flex flex-wrap"> 
                <div className="col-2 text-white"></div>
                    <div className="text-white text-right col-2">
                    <div className="">  
                        <Label>IM Score:</Label> 
                        <input 
                        className="m-3 col-4 inputHeight"
                        type="text"
                        id=""
                        />
                    </div>
                <div className="text-white">  
                    <Label>SDE Score:</Label> 
                    <input 
                    className="m-3 col-4 inputHeight"
                    type="text"
                    id=""
                    />
                </div>
                </div>
                <div className="col-1 d-flex flex-wrap text-center align-content-center">
                    <div className="text-white">
                        <Label for=""> IM and SDE Paragraph:</Label>
                    </div>
                    </div>
                        < TextareaAutosize 
                            className="col-4 pauhasInput"
                            type="text"
                            id=""
                            />

                
           
            <div className="col-3 text-white"></div>
            

            </div>
    
        </div>
        </div>
        <div id="footer">
         <ButtonNavigation next={next}  />
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
    );

}

export default PaulasDeceptionScale;