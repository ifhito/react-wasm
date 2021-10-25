import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import "./styles/global.css";
import Nav from './Components/nav';
function App() {

  return (
    <div>
      <Nav/>
    </div>
  );
}

export default App;
