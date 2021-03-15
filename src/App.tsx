import React from 'react';
import json from './survey.config';
import Survey from './Survey';
import './App.css';

function App() {
  return (
    <Survey json={json}></Survey>
  );
}

export default App;
