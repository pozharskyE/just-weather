import React from "react";
import { MWHeader, MWBase } from "./../../components";
import "./main-widget.css";

function MainWidget(props) {
    return (
    <div>
        <MWHeader 
            timeZone={props.timeZone}
            time={props.time}
        />
        
        <MWBase 
            weatherCode={props.weatherCode}
            iconsFolder={props.iconsFolder}
            isDay={props.isDay}
            
            temperature={props.temperature}
            temperatureUnit={props.temperatureUnit}
        />
    </div>
  );
}

export default MainWidget;
