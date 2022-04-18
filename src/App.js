import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PomodoroApp from './Apps/1Podomoro';
import MaskedInputApp from './Apps/2MaskedInput';
import JSONtoCSVApp from './Apps/3JSONtoCSV';
import URLShortenerApp from './Apps/4URLShortener';
import OneTimeSecretApp from './Apps/5OneTimeSecret';

function App() {
  return (
    <Router>
      <div className="navigation">
        <ul className="navigation-list">
          <li className="navigation-list__item" >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pomodoro">Pomodoro</Link>
          </li>
          <li>
            <Link to="/masked-input">Masked Input</Link>
          </li>
          <li>
            <Link to="/json-to-csv">JSON to CSV</Link>
          </li>
          <li>
            <Link to="/url-shortener">URLShortener</Link>
          </li>
          <li>
            <Link to="/one-time-secret">One Time Secret</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pomodoro">
            <PomodoroApp />
          </Route>
          <Route exact path="/masked-input">
            <MaskedInputApp />
          </Route>
          <Route exact path="/json-to-csv">
            <JSONtoCSVApp />
          </Route>
          <Route exact path="/url-shortener">
            <URLShortenerApp />
          </Route>
          <Route exact path="/url-shortener/:key">
            <URLShortenerApp />
          </Route>
          <Route exact path="/one-time-secret">
            <OneTimeSecretApp />
          </Route>
          <Route exact path="/one-time-secret/:key">
            <OneTimeSecretApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <span>
        ¡Hola!
        Bienvenido al proyecto
      </span>
    </div>
  );
}
export default App;
