import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/index.scss';
import ClarityNotes from './components/ClarityNotesApp';
import { Router } from "react-router";
import history from "./helpers/history";


ReactDOM.render(
  <Router history={history}>
    <ClarityNotes />
  </Router>,
  document.getElementById('root')
);


