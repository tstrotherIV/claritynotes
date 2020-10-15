import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClarityNotes from './components/ClarityNotesApp';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ClarityNotes />
  </Router>,
  document.getElementById('root')
);


