import React from 'react';
import "./temperature.css";

function Temperature(props) {
  return (
    <div className={props.className}>
      {Math.round(props.value)} {props.measureUnit}
    </div>
  )
}

export default Temperature