import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// Functional Component
export default (props) => {
  return (
    <div>
      <Sparklines height={120} with={180}  data={ props.data }>
        <SparklinesLine color= { props.color } />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{ average(props.data) } { props.unit }</div>
    </div>
  );
}

function average(data) {
  return _.round( _.sum(data) / data.length );
}
