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
import "./childCard.scss";
import DataManager from "../../data_module/DataManager";

function ChildrenCard(props) {
  const [child, setChild] = useState({
    id: props.child.id,
    patientId: props.child.patientId,
    child_first_name: props.child.child_first_name,
    child_last_name: props.child.child_last_name,
    child_gender: props.child.child_gender,
    child_dob: props.child.child_dob,
  });

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setChild({ ...child, [name]: value });
  };

  const updateChild = () => {
    const editedChild = {
      id: props.child.id,
      patientId: props.child.patientId,
      child_first_name: child.child_first_name,
      child_last_name: child.child_last_name,
      child_gender: child.child_gender,
      child_dob: child.child_dob,
    };

    DataManager.update("children", editedChild);
  };

  const deleteChild = () => {
    DataManager.delete("children", child.id).then(() => {
      props.getChildren()
    })
  }


  return (
    <>
      <section>
        <div className="">
          <div>
            <Card className="childCard">
              <CardBody>
                <CardText>
                  <input
                    className="fieldData"
                    type="text"
                    id="child_first_name"
                    name="child_first_name"
                    onChange={handleFieldChange}
                    value={child.child_first_name}
                  />
                  <input
                    className="fieldData"
                    type="text"
                    id="child_last_name"
                    name="child_last_name"
                    onChange={handleFieldChange}
                    value={child.child_last_name}
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
                      value={child.child_gender}
                    >
                      {child.child_gender}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="child_gender"
                        value="None Selected"
                      >
                        None Selected
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="child_gender"
                        value="Female"
                      >
                        Female
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="child_gender"
                        value="Male"
                      >
                        Male
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="child_gender"
                        value="Other"
                      >
                        Other
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <input
                    className="fieldData text-center col-8"
                    type="date"
                    id="child_dob"
                    name="child_dob"
                    onChange={handleFieldChange}
                    value={child.child_dob}
                    placeholder="Date of Birth"
                  />
                </CardText>
                <Button className="m-2" onClick={updateChild}>Save Changes</Button>
                <Button className="m-2" onClick={deleteChild}>Delete</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChildrenCard;
