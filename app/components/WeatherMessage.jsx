import React from 'react';

// export class WeatherMessage extends React.Component {
//   render() {
//     const {temp, location} = this.props;
//     return (
//       <div>
//         <h3>It's it {temp} in {location}</h3>
//       </div>
//     );
//   }
// }


export const WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>It's it {temp} in {location}</h3>
    </div>
  );
};
