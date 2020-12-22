import React, { useRef, useState } from "react";
import { Label, Input, Button, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Form } from "reactstrap";
import useSimpleAuth from "../hooks/ui/useSimpleAuth";
import "./createUser.scss";


function CreateUser(props) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const email = useRef()
  const employeeNumber = useRef()
  const firstName = useRef()
  const middleName = useRef()
  const lastName = useRef()
  const password = useRef()
  const roleTitle = useRef()
  const admin = useRef()
  const { register } = useSimpleAuth()

  const handleRegister = (e) => {
    e.preventDefault()

    const newUser = {
        "email": email.current.value,
        "employeeNumber": employeeNumber.current.value,
        "first_name": firstName.current.value,
        "middle_name": middleName.current.value,
        "last_name": lastName.current.value,
        "role_title": roleTitle.current.value,
        "admin": admin.current.value,
        "password": password.current.value
   
    }

    register(newUser).then(() => {
        props.history.push({
            pathname: "/"
        })
    })
}

  return (
    <div>
      <h2 className="titleFontSize whiteBgd d-flex justify-content-center">
        New User Creation
      </h2>
        <Form className="questionsContainerWide mt-5" onSubmit={handleRegister}>
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-wrap col-1">
                <Label className="textWhite d-flex flex-wrap col-4" htmlFor="inputFirstName">
                  Name
                </Label>  
            </div>   
            <div className="col-4">     
                <Input
                  useRef={firstName}
                  className="d-flex flex-wrap"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                />
                <Label className="textWhite" htmlFor="inputMiddleName">
                </Label>
                <Input
                  useRef={middleName}
                  className=""
                  type="text"
                  id="middleName"
                  placeholder="Middle Name"
                />
                <Label className="textWhite" htmlFor="inputLastName">
                </Label> 
                <Input
                  useRef={lastName}
                  className=""
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                />
            </div>
            <div className="col-6 d-flex flex-wrap">
                <Label className="textWhite col-4" htmlFor="inputEmployeeNumber">
                  Employee #
                </Label>
                <Input
                  useRef={employeeNumber}
                  className="col-8"
                  type="text"
                  id="employeeNumber"
                  placeholder="Employee Number"
                />
              <Label className="textWhite col-4" htmlFor="inputRoleTitle">
                  Role/Title
              </Label>
              <Dropdown className="col-8" isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle  className="col-12" caret>
                Select One
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem useRef={roleTitle} value="role1">Role 1</DropdownItem>
                <DropdownItem useRef={roleTitle} value="role2">Role 2</DropdownItem>
                <DropdownItem useRef={roleTitle} value="role3">Role 3</DropdownItem>
              </DropdownMenu>
              </Dropdown>
              <div className=""></div>
            <div className="ml-3">
            <Label className="textWhite" htmlFor="inputAdmin">
                Admin?
            </Label> 
                <Input 
                useRef={admin}
                type="checkbox"  
                id="admin" 
                className="col-2"
                />
            </div>
            </div>  
        </div>
        <div className="d-flex justify-content-center m-5">
            <Label className="textWhite col-2 m-0 d-flex align-items-center" htmlFor="password">
                  Password:
                </Label>
                <Input
                  useRef={employeeNumber}
                  className="col-6"
                  type="password"
                  id="password"
                  placeholder="Enter a password"
                />
            </div>
      </Form>

      <div className="createButtons">
        <Button
          color="info"
          className="gap"
          onClick={() => {
            props.history.goBack();
          }}
        >
          Cancel
        </Button>
        <Button
          color="info"
          type="submit"
          className="gap"
          onClick={() => {
            props.history.push(`/patient`);
          }}
        >
      
          Create User
        </Button>
        </div> 
        </div>
  );
}

export default CreateUser;
