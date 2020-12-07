import React from "react";
import { Label, Input } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from 'react-textarea-autosize';

//pdf page 119

function SubstanceAbuseSubtleScreeningInventory4(props) {
    const next = "/iowa_gambling_task"

    return(
<>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className=" mb-1 col-2">Test Results</h3>
                <h4>Substance Abuse Subtle Screening Inventory-4</h4>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
            <div className="col-2"></div>
            <div className="col-10 text-white">
            <Input
                className=""
                    type="checkbox"
                    id=""
                    />
                <Label>[Patient Name, First] completed the Substance Abuse Subtle Screening Inventory-4 (SASSI-4)</Label>
                <p>The results indicated the Low/High Probability of [Patient Name, First] having a Substance Dependence disorder.</p>
                
                <Label className="mt-3 textTeal col-7" for=""> Past all results with a bold heading from the third page and formate liek the following example
                    (make sure to replace "the client" with their name!):</Label>
                <div>
                <TextareaAutosize
                className="m-2 col-6 fieldData"
                type="text"
                id=""
                />
                </div>
                <div className="mt-2">
                <Input
                className=""
                    type="checkbox"
                    id=""
                    />
                <Label className="col-10" for="">[Patient Name, First] invalidated this instrument. [She] gave answers to questions which are not probable. [She] appeared to make a significant 
                effort to appear perfect and without flaws. Deliberate non-compliance and passive-aggressive behaviors appear likely.</Label>
                </div>
                <div className="mt-4">
                <Input
                className=""
                    type="checkbox"
                    id=""
                    />
                <Label className="col-10" for="">[Patient Name, First] showed a significant level of defensiveness related to substance (alcohol or drug) misuse. [Patient Name, First] acknowledged alcohol and drug use, the motivation and consequences of usage, and loss of control.</Label>
                 </div>
                 <p className="ml-1 mt-4 col-10">[Patient Name, First] acknowledged a pattern of current or past problematic usage, and the subtle scale scores are somewhat elevated, suggesting the possibility of a mild substance use disorder. Consideration
                 should be given to providing substance use education, values clarification, and ongoing assessment.</p>
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

export default SubstanceAbuseSubtleScreeningInventory4;