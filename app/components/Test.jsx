import React from 'react';
import ReactDOM from 'react-dom';

export const Test = (props) => {
  return (
    <div>
       {props.match.params.contentName}
    </div>
  );
};
