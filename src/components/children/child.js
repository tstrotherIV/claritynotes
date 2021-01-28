import React, { useState } from "react";
import {
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  CardText,
  Button,
} from "reactstrap";
import "./childCard.scss";
import DataManager from "../../data_module/DataManager";

function ChildrenCard(props) {
  const [child, setChild] = useState({
    id: props.child.id,
    first_name: props.child.first_name,
    last_name: props.child.last_name,
    gender: props.child.gender,
    dob: props.child.dob,
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
      first_name: child.first_name,
      last_name: child.last_name,
      gender: child.gender,
      dob: child.dob,
    };

    DataManager.update_Item("children", child.id, editedChild);
  };

  const deleteChild = () => {
    DataManager.delete("children", child.id).then(() => {
      props.getChildren();
    });
  };

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
                    id="first_name"
                    name="first_name"
                    onChange={handleFieldChange}
                    value={child.first_name}
                  />
                  <input
                    className="fieldData"
                    type="text"
                    id="last_name"
                    name="last_name"
                    onChange={handleFieldChange}
                    value={child.last_name}
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
                      value={child.gender}
                    >
                      {child.gender}
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
                    value={child.dob}
                    placeholder="Date of Birth"
                  />
                </CardText>
                <Button className="m-2" onClick={updateChild}>
                  Save Changes
                </Button>
                <Button className="m-2" onClick={deleteChild}>
                  Delete
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChildrenCard;
