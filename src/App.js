import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './components/Navbar';
import Home from './Halaman/Home';
import About from './Halaman/About';
import Zone from './Halaman/Zone';
import './app.css';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1500}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route path="/About">
                    <About />
                  </Route>
                  <Route path="/Zone">
                    <Zone />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </>
  );
}
