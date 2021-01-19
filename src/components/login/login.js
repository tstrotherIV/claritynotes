import React, {useState} from "react";
import { Label, Input, Container, Button, Form } from "reactstrap";
import "./login.scss";
import DataManager from "../../data_module/DataManager"

function Login(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.email === "" || credentials.password === "") {
      window.alert("Please enter your Login Information below");
    } else {
      DataManager.getUser(credentials.email).then((user) => {
        if (user.length < 1) {
          window.alert("User Account doesn't exist, Please Create an account");
        } else if (
          user[0].email === credentials.email &&
          user[0].password === parseInt(credentials.password)
        ) {
          sessionStorage.setItem("loggedUser", user[0].id);
          sessionStorage.setItem("loggedUserName", user[0].firstName);
          let loggedUser = sessionStorage.getItem(`loggedUser`);
          props.setUser(loggedUser);

          props.history.push(`/patient`);
        }
      });
    }
  };

  return (
    <div className="textWhite mt-5 mb-5">
      <Container className="mt-5">
        <div className="text-center mt-5">
          <h2 className="mt-5 loginTitle">
            CLARITYNOTES
          </h2>
          <h2 className="">
          Enhancing Perspective with Psychological Assessment
          </h2>
          <h3 className="mt-5 mb-0">
            Welcome to Claritynotes!
          </h3>
          <p className="mb-1">
            Please login to continue
          </p>
        </div>
        <div className="container d-flex flex-wrap justify-content-center m-0">
            <Form className="m-2" onSubmit={handleLogin}>
                <div className="d-flex justify-items-center align-items-center m-3">
                    <Label className="text-align" htmlFor="inputUserEmail">
                      Email
                    </Label>
                    <Input 
                      className="fieldSize"
                      type="email"
                      id="email"
                      placeholder="Enter Email"
                      onChange={handleFieldChange}
                    /> 
                </div> 
                <div className="d-flex justify-items-center align-items-center m-3">        
                    <Label className="text-align" htmlFor="inputPassword">
                      Password
                    </Label>
                    <Input
                      className="fieldSize"
                      type="password"
                      id="password"
                      placeholder="password placeholder"
                      onChange={handleFieldChange}
                    />
              </div>
              <div className="">
                <div className="d-flex justify-content-center">
                <Button color="info" className="loginBtn"
                onClick={handleLogin}
                >Login</Button>
                </div>
                <div className="d-flex justify-content-center">
                <Button className="loginBtn whiteBtn"
                onClick={() => {
                    props.history.push(`/createUser`);
                  }}
                >CREATE NEW USER</Button>
              </div>
              </div>
        </Form>
        </div>
        </Container>
      </div>
  );
}

export default Login;
