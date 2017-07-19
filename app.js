import React from 'react';
import ReactDOM from 'react-dom';

const Main = require('./components/Main');

let initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

React.renderComponent (
  <Main tweets={initialState}/>
  document.getElementById('react-app');
)
