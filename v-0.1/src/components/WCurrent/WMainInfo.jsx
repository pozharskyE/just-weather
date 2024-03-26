import React from 'react';
import "./w-main-info.css";

function WMainInfo(props) {
  return (
    <div className='w-main-info'>
        <div className="w-main-info-description">
          {props.curWDescription}
        </div>
        <div className='w-main-info-temperature'>
          {props.curTemperature} °C
        </div>
    </div>
  )
}

export default WMainInfo