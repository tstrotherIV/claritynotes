import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  CardText,
  Button
} from "reactstrap";
import "./siblingCard.scss";
import DataManager from "../../data_module/DataManager";

function SiblingCard(props) {
  const [sibling, setsibling] = useState({
    id: props.sibling.id,
    patientId: props.sibling.patientId,
    sibling_first_name: props.sibling.sibling_first_name,
    sibling_last_name: props.sibling.sibling_last_name,
    sibling_gender: props.sibling.sibling_gender,
    sibling_dob: props.sibling.sibling_dob,
  });

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setsibling({ ...sibling, [name]: value });
  };

  const updateSibling = () => {
    const editedSibling = {
      id: props.sibling.id,
      patientId: props.sibling.patientId,
      sibling_first_name: sibling.sibling_first_name,
      sibling_last_name: sibling.sibling_last_name,
      sibling_gender: sibling.sibling_gender,
      sibling_dob: sibling.sibling_dob,
    };

    DataManager.update("siblings", editedSibling);
  };

  const deleteSibling = () => {
    DataManager.delete("siblings", sibling.id).then(() => {
      props.getSiblings()
    })
  }


  return (
    <>
      <section>
        <div className="">
          <div>
            <Card className="siblingCard">
              <CardBody>
                <CardText>
                  <input
                    className="fieldData"
                    type="text"
                    id="sibling_first_name"
                    name="sibling_first_name"
                    onChange={handleFieldChange}
                    value={sibling.sibling_first_name}
                  />
                  <input
                    className="fieldData"
                    type="text"
                    id="sibling_last_name"
                    name="sibling_last_name"
                    onChange={handleFieldChange}
                    value={sibling.sibling_last_name}
                  />
                  <Dropdown
                    isOpen={dropdownOpen2}
                    toggle={toggle2}
                    className=""
                  >
                    <DropdownToggle
                      color="light"
                      className="dropdown text-center"
                      caret
                      value={sibling.sibling_gender}
                    >
                      {sibling.sibling_gender}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="sibling_gender"
                        value="None Selected"
                      >
                        None Selected
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="sibling_gender"
                        value="Female"
                      >
                        Female
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="sibling_gender"
                        value="Male"
                      >
                        Male
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="sibling_gender"
                        value="Other"
                      >
                        Other
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <input
                    className="fieldData text-center col-8"
                    type="date"
                    id="sibling_dob"
                    name="sibling_dob"
                    onChange={handleFieldChange}
                    value={sibling.sibling_dob}
                    placeholder="Date of Birth"
                  />
                </CardText>
                <Button className="m-2" onClick={updateSibling}>Save Changes</Button>
                <Button className="m-2" onClick={deleteSibling}>Delete</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default SiblingCard;
