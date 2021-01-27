import React from "react";
import ReactDOM from "react-dom";
import "./components/styles/index.scss";
import ClarityNotes from "./components/ClarityNotesApp";
import { Router } from "react-router";
import history from "./helpers/history";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
  type: 'success'
}

ReactDOM.render(
  <Router history={history}>
    <AlertProvider template={AlertTemplate} {...options}>
      <ClarityNotes />
    </AlertProvider>
  </Router>,
  document.getElementById("root")
);
