import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Main } from 'Main';
import { Weather } from 'Weather';
import { About } from 'About';
import { Examples } from 'Examples';

ReactDOM.render(

  <div>
    <Router>
      <div>
        <Route path="/" component={Main} />
        <Route exact path="/" component={Weather} />
        <Route path="/about" component={About} />
        <Route path="/examples" component={Examples} />
      </div>
    </Router>
  </div>,
  document.getElementById('app')); // eslint-disable-line
