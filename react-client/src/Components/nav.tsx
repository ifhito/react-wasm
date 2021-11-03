import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from "react-router-dom";
import styles from "../styles/nav.module.css";
import PDF from './pdf';
import Webasm from './Wasm';
import Text from './text';
const Nav = () => {
  return (
        <Router>
          <div className={styles.router}>
            <nav className={styles.router__nav}>
            <ul className={styles.router__nav__ul}>
              <li >
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pdf">PDF</Link>
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
