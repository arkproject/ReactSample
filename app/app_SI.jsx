import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Main } from 'Main';
import { Weather } from 'Weather';
import { About } from 'About';
import { Examples } from 'Examples';

const Menu = () => (
  <div>
    <h1>Menu</h1>
    <Link to="/menu/food">Food</Link>
    <Link to="/menu/drink">Drink</Link>
    <Link to="/menu/about">about</Link>
    <Route path="/menu/:section"
     render={({ match }) => <h2>{match.params.section}</h2>} />
  </div>

  );

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

ReactDOM.render(
  <Router>
    <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
    </div>
  </Router>,
  document.getElementById('app')); // eslint-disable-line
