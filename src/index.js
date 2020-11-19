import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/index.scss';
import ClarityNotes from './components/ClarityNotesApp';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <Router>
    <ClarityNotes />
  </Router>,
  document.getElementById('root')
);


