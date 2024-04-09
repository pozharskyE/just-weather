import React from 'react';
import "./mw-header.css";

function MWHeader(props) {
  return (
    <div className='m-w-header'>
      <div className="m-w-h-timezone">{props.timeZone}</div>

      <div className="time-of-update">{props.time}</div>
    </div>
  )
}

export default MWHeader