import React from 'react';
import { NavLink } from 'react-router-dom';

export class Nav extends React.Component {
  onSearch (event) {
    event.preventDefault();
    const location = this.locationRef.value;
    const encodedLocation = encodeURIComponent(location);

    if (location.length > 0){
        this.locationRef.value = '';
        window.location.hash = '#/?location=' + encodedLocation;
    }
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <NavLink to="/" activeClassName="active"  activeStyle={{fontWeight: 'bold'}} replace >Get Weather</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</NavLink>
            </li>
            <li>
              <NavLink to="/examples" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
        <form onSubmit={this.onSearch.bind(this)}>
          <ul className="menu">
            <li>
              <input type="search" placeholder="Search weather" ref={(input) => { this.locationRef = input; }} />
            </li>
            <li>
              <input type="submit" className="button" value="GeT Weather" />
            </li>
          </ul>
        </form>
        </div>
      </div>
    );
  }
}
