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
    patientId: props.guardian.patientId,
    guardian_first_name: props.guardian.patient_guardian_first_name,
    guardian_last_name: props.guardian.patient_guardian_last_name,
    guardian_gender: props.guardian.patient_guardian_gender,
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
      id: props.guardian.id,
      patientId: props.guardian.patientId,
      guardian_first_name: guardianData.guardian_first_name,
      guardian_last_name: guardianData.guardian_last_name,
      guardian_gender: guardianData.guardian_gender,
    };

    DataManager.update("guardians", editedGuardian);
  };

  const deleteGuardian = () => {
    DataManager.delete("guardians", guardianData.id).then(() => {
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
                    id="guardian_first_name"
                    name="guardian_first_name"
                    onChange={handleFieldChange}
                    value={guardianData.guardian_first_name}
                  />
                  <input
                    className="fieldData"
                    type="text"
                    id="guardian_last_name"
                    name="guardian_last_name"
                    onChange={handleFieldChange}
                    value={guardianData.guardian_last_name}
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
                      value={guardianData.guardian_gender}
                    >
                      {guardianData.guardian_gender}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="guardian_gender"
                        value="None Selected"
                      >
                        None Selected
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="guardian_gender"
                        value="Female"
                      >
                        Female
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="guardian_gender"
                        value="Male"
                      >
                        Male
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleFieldChange}
                        name="guardian_gender"
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
