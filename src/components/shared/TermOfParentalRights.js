import React from 'react';
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const TermOfParentalRights = () => {
    return(
      <div className="termBackground">
        <div className="d-flex justify-content-center">
        <DropdownButton
          as={ButtonGroup}
          key="up"
          id="{`dropdown-button-drop-up`}"
          drop="up"
          variant="light"
          title={` Termination of Parental Rights Criteria `}
          className="terminationButton"
        >
          <div className="checkBoxContainer">
            <div className="m-2 text-center">
              <h4>Termination of Parental Rights Criteria</h4>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Unforeseeable Future Change</div>
              </div>
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Rehabilitation Failure</div>
              </div>
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Failure to Maintain Material Needs
                </div>
                </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Conviction and Imprisonment of Felony
                </div>
              </div>
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Serious Physical Injury to child
                </div>
              </div>
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Failure to Maintain Consistent Contact
                </div>
              </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Emotional Illness and mental deficiency
                </div>
              </div>
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Willful Neglect/Abandonment</div>
              </div>
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Parent has tortured, abused, cruelly beaten, or
                </div>
              </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Unable to Discharge Childcare Responsibilities
                </div>
              </div>
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Loss of Custody of Other Child(ren)
                </div>
              </div>
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">otherwise maltreated the child</div>
              </div>
            </div>
            <div className="checkBoxRow">
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Excessive Use of a Controlled Substance
                </div>
              </div>
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">Serious Bodily Injury of Child</div>
              </div>
              <div className="checkBoxdiv col-4">
                <input type="checkbox" className="check"></input>
                <div className="checkItem">
                  Lack of Effort to Adjust to His/Her Circumstances
                </div>
              </div>
            </div>
          </div>
        </DropdownButton>
      </div>
      </div>
    )
}

export default TermOfParentalRights;
