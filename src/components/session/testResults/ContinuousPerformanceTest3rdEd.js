import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
//pdf page 116

function ContinuousPerformanceTest3rdEd(props) {
    const next = "/computerized_performance_neurocognitive_assessment"

    return(
<>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className=" mb-1 col-2">Test Results</h3>
                <h4>Continuous Performance Test 3rd Edition</h4>
            </div>
            <div className="m-5">
                <p className="text-white"> The Continuous Performance Test 3rd Edition (CPT 3) is a task-oriented computerized assessment of attention-related problems in individuals aged eight years and older. 
                By indexing the respondent's performance in areas of inattentiveness, implusivity, sustained attention, and vigilance the CPT 3 can be useful to the process of diagnosing Attention-Deficit/Hyperactive 
                Disorder (ADHD) and other neurological conditions related to attention. The CPT 3 provides objective information about an individual's performance in attention tasks, complementing information obtained from behavior rating scales.</p>
           {/* Left section */}
           <div className="d-flex flex-wrap"> 
           <div className="col-3 text-white"></div>
           <div className="col-6 text-white">  
                <Label><h4>Enter CPT 3 Score:</h4></Label> 
                <input 
                className="fieldData m-3"
                type="text"
                id=""
                />
                <h4>Results:</h4>
                [XXXX]

            <div className="col-3 text-white"></div>
            </div>
            <div className="mt-5 text-white">                 
            <p>[Patient Name, First] has a total of [X] atypical T-scores, which falls is associated with a (very high [OR] moderate) likelihood of having a disorder characterized by attention deficits, such as ADHD. (Patient's name) profile of 
                scores and response pattern indicate he/she may have issues related to: </p>
            </div>
            </div>
         <div className="d-flex flex-wrap justify-content-center">
            <div className="">
            <div className="text-white">
                <input
                className="m-2" 
                type="checkbox"
                id=""
                />
                <Label>Inattentiveness</Label>
                </div>
            <div className="text-white">
                <input
                className="m-2" 
                type="checkbox"
                id=""
                />
                <Label for="">Sustained Attention</Label>
                </div>
            <div className="text-white">
                <input
                className="m-2" 
                type="checkbox"
                id=""
                />
                <Label for="">Vigilance</Label> 
                </div>
                </div>
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

export default ContinuousPerformanceTest3rdEd;