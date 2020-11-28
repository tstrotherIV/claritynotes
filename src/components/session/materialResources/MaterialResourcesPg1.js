import React, {useState} from "react";
import { Label, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Heading from '../../shared/PsychologicalHeading';
import TermOfParentalRights from '../../shared/TermOfParentalRights';
// pdf page 97


function MaterialResourcesPg1(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
    
  return (
    <>  
    <div id="page-container">
      <div id="content-wrap">
        <Heading />
        <h2 className="textWhite text-center mb-4">Material Resources</h2>
        <div className="questionsContainer">

        <div className="mb-4 d-flex flex-wrap justify-content-center mt-4">
        <p className="textWhite centerItem text-center offset-2">Give three examples of financial and material resources you have to care for yourself and others?</p>
          <div className="textWhite d-flex flex-wrap align-content-end text-center col-3 mb-2">
            [Patient Name, First] said:
          </div>
          <div className="col-3 d-flex flex-wrap justify-content-center align-items-end p-1">
          <Label className="textWhite">
          </Label>
          <Input
            className=""
            type="text"
            id=""
          />
          </div>
          <div className="col-3 d-flex flex-wrap align-items-end justify-content-center p-1 align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <Input
            className=""
            type="text"
            id=""
            />
        </div>
        <div className="col-3 d-flex flex-wrap align-items-end justify-content-center p-1 align-content-end">
          <Label className="textWhite" for="">
          </Label>
          <Input
            className=""
            type="text"
            id=""
            />
          </div>
        </div>

      <h2 className="textWhite text-center mb-4 mt-4">Healthy Adult Social Supports</h2>
      <div className="interview_div1">
        <div className="m-auto d-flex align-items-center textWhite">
          <Label className="textWhite col-3 text-right" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2">indicated [her]</div>
          <Input
              className="col-2 mr-2 mb-2"
              type="text"
              id=""
              placeholder=""
            />
            are available as a support system for [her].  
        </div>
        <h2 className="textWhite text-center mb-4 mt-4">Community and Cultural Affiliation</h2>
        <div className="row justify-content-center m-3 p-0 align-content-center">
        <p className="textWhite p-0 m-0 d-flex align-items-end"> Religious Affiliation:</p>
        <Dropdown className="d-flex textWhite flex-wrap col-1" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Dropdown
          </DropdownToggle>
        <DropdownMenu  >
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem text>Dropdown Item Text</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
      </div>  
        
        <div className="m-auto d-flex align-items-center justify-content-center textWhite row">
          <Label className="textWhite col-3 p-0 m-0 d-flex align-items-end justify-content-center" for="">
              [Patient Name, First]
          </Label>
          <div className="m-2">reported [she] attends </div>
          <Input
              className="col-3 mr-2 mb-2"
              type="text"
              id=""
              placeholder=""
            />
            church.  
         </div> 
      </div>
        </div>
        <div id="footer">
          <div className="buttonSection">
          <div className="idBox textWhite p-3"></div>
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/cognitive_skills_pg_1`);
              }}
            >
              Previous
            </Button>
            <Button color="info" className="button">
              Save
            </Button>
            <Button color="info" className="button">
              Submit
            </Button>
            <Button
              color="info"
              className="button"
              onClick={() => {
                props.history.push(`/behavioral_observations_and_testing_conditions_pg_1`);
              }}
            >
              Next
            </Button>
            <div className="idBox textWhite p-3">
              <div>Existing Patient: [Case #]</div>
              <div>Patient ID: [Patient ID]</div>
            </div>
          </div>
          <TermOfParentalRights />
        </div>
      </div>
    </div>
    </>
  );
}

export default MaterialResourcesPg1;
