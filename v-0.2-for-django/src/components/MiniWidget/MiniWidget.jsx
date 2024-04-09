import React from "react";
import "./mini-widget.css";

import { WeatherIcon, Temperature } from "./../../components";


function MiniWidget(props) {
    return (
        <div className="mini-widget">
            <p>{props.time}</p>
            <WeatherIcon className="mini-widget-icon" 
                weatherCode={props.weatherCode}
                iconsFolder={props.iconsFolder}
                isDay={props.isDay}
            />
            
            <Temperature className="mini-widget-temperature"
                value={props.temperature}
                measureUnit={props.temperatureUnit}
            />
            
            <p>{props.precipitationProb > 20 ? `🌧️ ${props.precipitationProb} %` : ''}</p>
        </div>
    );
}

export default MiniWidget;
