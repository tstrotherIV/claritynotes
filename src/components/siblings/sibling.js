import React, { useState } from "react";
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
    first_name: props.sibling.first_name,
    last_name: props.sibling.last_name,
    gender: props.sibling.gender,
    dob: props.sibling.dob,
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
      first_name: sibling.first_name,
      last_name: sibling.last_name,
      gender: sibling.gender,
      dob: sibling.dob,
    };
    DataManager.update_Item("siblings", sibling.id, editedSibling);
  };

  const deleteSibling = () => {
    DataManager.delete_Item("siblings", sibling.id).then(() => {
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
                    id="first_name"
                    name="first_name"
                    onChange={handleFieldChange}
                    value={sibling.first_name}
                  />
                  <input
                    className="fieldData"
                    type="text"
                    id="last_name"
                    name="last_name"
                    onChange={handleFieldChange}
                    value={sibling.last_name}
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
                      value={sibling.gender}
                    >
                      {sibling.gender}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="gender"
                        value="None Selected"
                      >
                        None Selected
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="gender"
                        value="Female"
                      >
                        Female
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="gender"
                        value="Male"
                      >
                        Male
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="gender"
                        value="Other"
                      >
                        Other
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <input
                    className="fieldData text-center col-8"
                    type="date"
                    id="dob"
                    name="dob"
                    onChange={handleFieldChange}
                    value={sibling.dob}
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
