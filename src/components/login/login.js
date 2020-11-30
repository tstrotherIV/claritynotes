import React from "react";
import "./login.scss";
import { Label, Input, Container, Button} from "reactstrap";

function Login(props) {
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
            <div className="m-2">
                <div className="d-flex justify-items-center align-items-center m-3">
                    <Label className="text-align" for="exampleEmail">
                      Email
                    </Label>
                    <Input 
                      className="fieldSize"
                      type="email"
                      id="exampleEmail"
                      placeholder="email placeholder"
                    /> 
                </div> 
                <div className="d-flex justify-items-center align-items-center m-3">        
                    <Label className="text-align" for="examplePassword">
                      Password
                    </Label>
                    <Input
                      className="fieldSize"
                      type="password"
                      id="examplePassword"
                      placeholder="password placeholder"
                    />
              </div>
              <div className="">
                <div className="d-flex justify-content-center">
                <Button color="info" className="loginBtn"
                onClick={() => {
                    props.history.push(`/patient`);
                  }}
                block>Login</Button>
                </div>
                <div className="d-flex justify-content-center">
                <Button className="loginBtn whiteBtn"
                onClick={() => {
                    props.history.push(`/createUser`);
                  }}
                block>CREATE NEW USER</Button>
              </div>
              </div>
        </div>
        </div>
        </Container>
      </div>
  );
}

export default Login;
