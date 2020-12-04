import React from 'react';
import { Label } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

//pdf page 103

function ProceduresAdministeredPg1(props) {

    const next = "/wasi-ii";  

    return(
    <>
      <div id="page-container">
        <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Procedures Administered</h2>
        <div className="questionsContainer pl-5">
        <div className="m-1">
            <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
          Wechsler Abbreviated Scale of Intelligence-Second Edition (WASI-II)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
              Wechsler Adult Intelligence Scale-Fourth Edition (WAIS-IV)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
              Shipley Intelligence Assessment 2
          </Label> 
        </div>  
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
              Reynolds Adaptable Intelligence Test (RAIT)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
              Wide Range Achievement Test-Revision 5(WRAT-5)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
              Aimsweb Plus Achievement Test
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
              Continuous Performance Test 3rd Edition (CPT 3)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
              Computerized Neurocognitive Assessment (CNS)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
              Paulhus Deception Scales (PDS)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
              Substance Abuse Subtle Screening Inventory-4 (SASSI-4)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
              Iowa Gambling Task (IGT)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
              Minnesota Multiphasic Personality Inventory-2 (MMPI-2)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
             Millon Clinical Multiaxial Inventory-IV (MCMI-IV)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
             Rorschach Performance Assessment System (R-PAS)
          </Label> 
        </div>
        <div className="m-1">
          <input  
          className="m-1"
          type="checkbox"
          id=""
          />
          <Label className="text-white m-0 p-0">
             Thematic Apperceptions Test (TAT)
          </Label> 
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

export default ProceduresAdministeredPg1;