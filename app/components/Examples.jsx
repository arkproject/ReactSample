import React from 'react';
import { Link } from 'react-router-dom';

// export class Examples extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Examples component</h2>
//       </div>
//     );
//   }
// }

export const Examples = () => {
  return (
    <div>
   <h1 className="text-center">Examples</h1>
   <p>Here are a few example locations to try out:</p>
   <ol>
     <li>
       <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
     </li>
     <li>
       <Link to='/?location=Rio'>Rio, Brazil</Link>
     </li>
   </ol>
 </div>
  );
};
