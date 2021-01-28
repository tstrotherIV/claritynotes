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
import "./guardianCard.scss";
import DataManager from "../../data_module/DataManager";

function GuardianCard(props) {
  const [guardianData, setguardianData] = useState({
    id: props.guardian.id,
    first_name: props.guardian.first_name,
    last_name: props.guardian.last_name,
    gender: props.guardian.gender,
  });

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const handleFieldChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setguardianData({ ...guardianData, [name]: value });
  };

  const updateGuardian = () => {
    const editedGuardian = {
      first_name: guardianData.first_name,
      last_name: guardianData.last_name,
      gender: guardianData.gender,
    };

    DataManager.update_Item("guardians", guardianData.id,editedGuardian);
  };

  const deleteGuardian = () => {
    DataManager.delete_Item("guardians", guardianData.id).then(() => {
      props.getGuardians()
    })
  }


  return (
    <>
      <section>
        <div className="">
          <div>
            <Card className="guardianCard">
              <CardBody>
                <CardText>
                  <input
                    className="fieldData"
                    type="text"
                    id="first_name"
                    name="first_name"
                    onChange={handleFieldChange}
                    value={guardianData.first_name}
                  />
                  <input
                    className="fieldData"
                    type="text"
                    id="last_name"
                    name="last_name"
                    onChange={handleFieldChange}
                    value={guardianData.last_name}
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
                      value={guardianData.gender}
                    >
                      {guardianData.gender}
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

                </CardText>
                <Button className="m-2" onClick={updateGuardian}>Save Changes</Button>
                <Button className="m-2" onClick={deleteGuardian}>Delete</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default GuardianCard;
