import React from "react";
import { WeatherIcon, Temperature } from "./../../components";
import "./mw-base.css";

function MWBase(props) {
    return (
        <div className="mw-base">
            <WeatherIcon className="mw-base-icon" 
                weatherCode={props.weatherCode}
                iconsFolder={props.iconsFolder}
            />
            <Temperature className="mw-temperature"
                value={props.temperature}
                measureUnit={props.temperatureUnit}
            />
        </div>
    );
}

export default MWBase;
