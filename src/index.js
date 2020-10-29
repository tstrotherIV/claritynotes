import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClarityNotes from './components/ClarityNotesApp';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <ClarityNotes />
  </Router>,
  document.getElementById('root')
);


