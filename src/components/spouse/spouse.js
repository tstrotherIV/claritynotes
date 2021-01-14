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
    patientId: props.spouse.patientId,
    spouse_first_name: props.spouse.spouse_first_name,
    spouse_last_name: props.spouse.spouse_last_name,
    spouse_gender: props.spouse.spouse_gender,
    spouse_dob: props.spouse.spouse_dob,
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
      id: props.spouse.id,
      patientId: props.spouse.patientId,
      spouse_first_name: spouse.spouse_first_name,
      spouse_last_name: spouse.spouse_last_name,
      spouse_gender: spouse.spouse_gender,
      spouse_dob: spouse.spouse_dob,
    };

    DataManager.update("spouses", editedSpouse);
  };

  const deleteSpouse = () => {
    DataManager.delete("spouses", spouse.id).then(() => {
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
                    id="spouse_first_name"
                    name="spouse_first_name"
                    onChange={handleFieldChange}
                    value={spouse.spouse_first_name}
                  />
                  <input
                    className="fieldData"
                    type="text"
                    id="spouse_last_name"
                    name="spouse_last_name"
                    onChange={handleFieldChange}
                    value={spouse.spouse_last_name}
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
                      value={spouse.spouse_gender}
                    >
                      {spouse.spouse_gender}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="spouse_gender"
                        value="None Selected"
                      >
                        None Selected
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="spouse_gender"
                        value="Female"
                      >
                        Female
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="spouse_gender"
                        value="Male"
                      >
                        Male
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="spouse_gender"
                        value="Other"
                      >
                        Other
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <input
                    className="fieldData text-center col-8"
                    type="date"
                    id="spouse_dob"
                    name="spouse_dob"
                    onChange={handleFieldChange}
                    value={spouse.spouse_dob}
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
