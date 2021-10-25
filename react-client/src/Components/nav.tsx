import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from "react-router-dom";
import PDF from './pdf';
import Webasm from './Wasm';
import Text from './text';
function Nav() {
  return (
        <Router>
          <div>
            <nav>
            <ul>
              <li>
                  <div><Link to="/">Home</Link></div>
              </li>
              <li>
                <div><Link to="/pdf">PDF</Link></div>
              </li>
              <li>
                <Link to="/text">Text</Link>
              </li>
            </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Webasm/>
                </Route>
                <Route exact path="/pdf">
                    <PDF/>
                </Route>
                <Route exact path="/text">
                    <Text/>
                </Route>
            </Switch>
          </div>
        </Router>
      
  );
}

export default Nav;
