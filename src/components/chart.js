import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={120} with={180}  data={ props.data }>
        <SparklinesLine color= { props.color } />
      </Sparklines>
    </div>
  );
}
