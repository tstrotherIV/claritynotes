import React, { useRef } from "react";
import { Label, Input, Container, Button, Form } from "reactstrap";
import useSimpleAuth from "../hooks/ui/useSimpleAuth";
import "./login.scss";

function Login(props) {

  const userEmail = useRef()
  const password = useRef()
  const { login } = useSimpleAuth()

      // Simplistic handler for login submit
      const handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the username and password that
            the customer enters into local storage.
        */
        const credentials = {
            "username": userEmail.current.value,
            "password": password.current.value
        }

        login(credentials)
            .then(() => {
                props.history.push({
                    pathname: "/"
                })
            })
    }

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
                      ref={userEmail}
                      className="fieldSize"
                      type="email"
                      id="userEmail"
                      placeholder="Enter Email"
                    /> 
                </div> 
                <div className="d-flex justify-items-center align-items-center m-3">        
                    <Label className="text-align" htmlFor="inputPassword">
                      Password
                    </Label>
                    <Input
                      ref={password}
                      className="fieldSize"
                      type="password"
                      id="password"
                      placeholder="password placeholder"
                    />
              </div>
              <div className="">
                <div className="d-flex justify-content-center">
                <Button color="info" className="loginBtn"
                onClick={() => {
                    props.history.push(`/patient`);
                  }}
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
