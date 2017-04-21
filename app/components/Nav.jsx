import React from 'react';
import { NavLink } from 'react-router-dom';

// export class Nav extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Nav component</h2>
//         <NavLink to="/" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
//         <NavLink to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</NavLink>
//         <NavLink to="/examples" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
//         <hr />
//       </div>
//     );
//   }
// }

export const Nav = () => {
  return (
    <div>
      <h2>Nav components</h2>
      <NavLink to="/" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
      <NavLink to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</NavLink>
      <NavLink to="/examples" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
      <hr />
    </div>
  );
};
