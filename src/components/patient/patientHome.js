import React, { useState, useEffect } from "react";
import "./patientHome.scss";
import {
  Button,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Input,
} from "reactstrap";
import DataManager from "../../data_module/DataManager";

function PatientHomePage(props) {
  let USERNAME = "Chris";

  const [patient, setPatient] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  const handleFieldChange = (e) => {
    setPatientId(parseInt(e.target.value));
  };

  const getData = () => {
    DataManager.getAllPatients().then((patientInfo) => {
      // setPatient(patientInfo);
      const results = patientInfo.filter(
        (person) =>
          person.patient_first_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          person.patient_last_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getData();
  }, [searchTerm]);

  return (
    <>
      <div className="container addMargin">
        <div className="mt-5 aligner">
          <h2 className="textWhite textLarger">Welcome {USERNAME}!</h2>
        </div>
        <p className="textWhite aligner mb-5">Please select an option</p>
        <Container className="mt-5">
          <Row>
            <Col className="col-6 aligner">
              <Button
                className="optionBtn"
                block
                color="light"
                onClick={() => {
                  props.history.push(`/psychological_evaluationInit`);
                }}
              >
                New Patient
              </Button>
            </Col>
            <Col className="col-6 aligner">
              <div>
                <div className="div1Fields">
                  <div>
                    <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                      <DropdownToggle
                        color="light"
                        className="dropdown"
                        caret
                        className="patientSearchButton"
                      >
                        Seach Existing
                      </DropdownToggle>
                      <DropdownMenu>
                        <div className="">
                          <Input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                          />
                          {searchResults.map((item) => (
                            <DropdownItem
                              id={item.id}
                              key={item.id}
                              value={item.id}
                              onClick={handleFieldChange}
                              name="patientSelection"
                            >
                              {item.patient_last_name},{" "}
                              {item.patient_first_name}
                            </DropdownItem>
                          ))}
                        </div>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PatientHomePage;
