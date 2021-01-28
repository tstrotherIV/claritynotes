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
import "./spouseCard.scss";
import DataManager from "../../data_module/DataManager";

function SpouseCard(props) {
  const [spouse, setSpouse] = useState({
    id: props.spouse.id,
    first_name: props.spouse.first_name,
    last_name: props.spouse.last_name,
    gender: props.spouse.gender,
    dob: props.spouse.dob,
  });

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setSpouse({ ...spouse, [name]: value });
  };

  const updateSpouse = () => {
    const editedSpouse = {
      first_name: spouse.spouse_first_name,
      last_name: spouse.spouse_last_name,
      gender: spouse.spouse_gender,
      dob: spouse.spouse_dob,
    };

    DataManager.update_Item("spouses", spouse.id, editedSpouse);
  };

  const deleteSpouse = () => {
    DataManager.delete_Item("spouses", spouse.id).then(() => {
      props.getSpouses()
    })
  }


  return (
    <>
      <section>
        <div className="">
          <div>
            <Card className="spouseCard">
              <CardBody>
                <CardText>
                  <input
                    className="fieldData"
                    type="text"
                    id="first_name"
                    name="first_name"
                    onChange={handleFieldChange}
                    value={spouse.first_name}
                  />
                  <input
                    className="fieldData"
                    type="text"
                    id="last_name"
                    name="last_name"
                    onChange={handleFieldChange}
                    value={spouse.last_name}
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
                      value={spouse.gender}
                    >
                      {spouse.gender}
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
                    value={spouse.dob}
                    placeholder="Date of Birth"
                  />
                </CardText>
                <Button className="m-2" onClick={updateSpouse}>Save Changes</Button>
                <Button className="m-2" onClick={deleteSpouse}>Delete</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default SpouseCard;
