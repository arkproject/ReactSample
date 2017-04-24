import React from 'react';
import { Nav } from 'Nav';
import { Route } from 'react-router-dom';
import { Weather } from 'Weather';
import { About } from 'About';
import { Examples } from 'Examples';

// export class Main extends React.Component {
//   render() {
//     return (
//       <div>
//         <Nav />
//         <h2>Main component
//         </h2>
//       </div>
//
//     );
//   }
// }

export const Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns medium-6 large-4 small-centered" >
           <Route exact path="/" component={Weather} />
           <Route path="/about" component={About} />
           <Route path="/examples" component={Examples} />

        </div>
      </div>
    </div>
  );
};
