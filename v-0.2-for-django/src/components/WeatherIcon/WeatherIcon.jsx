import React, { useEffect, useState } from "react";
import "./weather-icon.css";

function WeatherIcon(props) {
    const [iconPath, setIconPath] = useState('');
    const [description, setDescription] = useState('');


    useEffect(function() {
        const timeOfDay = (props.isDay ? "day" : "night")

        fetch(`/static/wmo_codes.json`)
            .then((result) => result.json())
            .then((data) => { 
                const located = data[String(props.weatherCode)][timeOfDay];
                setIconPath(`${props.iconsFolder}${located["image"]}`);
                setDescription(located["description"]);
            })
    }, [props.iconsFolder, props.weatherCode, props.isDay])


    return (
        <div className={props.className}>
            <img src={iconPath} alt="no img" />

            <h2>{description}</h2>
        </div>
    );
}

export default WeatherIcon;
