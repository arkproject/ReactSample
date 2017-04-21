import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Main } from 'Main';
import { Weather } from 'Weather';
import { About } from 'About';
import { Examples } from 'Examples';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/" component={Weather} />
      <Route path="/menu/:section" render={({ match }) => { match.params.section; }} />


    </div>
  </Router>,
  document.getElementById('app')); // eslint-disable-line
