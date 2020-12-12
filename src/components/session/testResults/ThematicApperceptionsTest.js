
import React from "react";
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";
import TextareaAutosize from 'react-textarea-autosize';

// pdf page 117

function ThematicApperceptionsTest(props) {
    const next = "/"
    return (
        <>
        <div id="page-container">
          <div id="content-wrap">
          <Heading />
      <div className="ml-5 mr-5 mt-3">
        <div className="d-flex flex-wrap text-white align-items-baseline">
                <h3 className="mb-1 col-2">Test Results</h3>
                <h4 className="mb-3">Thematic Apperceptions Test</h4>
        </div>
        <div className="text-white d-flex flex-wrap justify-content-center">
            <div className="mt-5 col-8">
            <p>The Thematic Appreceptions Test (TAT) is a projective psychological test. Proponents of the technique
                assert that subjects' responses, in the narratives they make up about ambiguous pictures of people, reveal
                their underlying motives, concerns, and the way they see the social world.
            </p>
            </div>
            <div className="m-5 d-flex flex-wrap">
                <div className="">
                    <Label className="align-top mr-2 mt-2">Past Paragraph here: </Label>
                    <TextareaAutosize
                    className="fieldData pauhasInput"
                    type="text"
                    id=""
                    />
                </div> 
            </div> 

            <div className="ml-3">
            </div> 
        </div>
        </div>
        </div>
        <div id="footer">
         <ButtonNavigation next={next}  />
          <TermOfParentalRights />
        </div>
    </div>
    </>

    );
}

export default ThematicApperceptionsTest;