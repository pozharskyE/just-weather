import React from "react";
import "./whoursforecastelement.css";

function WHoursForecastElement(props) {
    return (
    <div className="w-hours-fc-el">
        <div className="time">{props.time}</div>
        <img className="icon" src="/icons/animated/cloudy-1-day.svg" alt="no img" />
        <div className="temperature">{props.temperature} °C</div>

    </div>
    );
}

export default WHoursForecastElement;
