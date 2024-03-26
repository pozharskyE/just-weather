import { useState, useEffect } from "react";
import React from "react";
import "./weather.css";

import { WHeader, WMainInfo, WHoursForecast, WImage } from "./../../components";


function Weather() {
    const [weatherData, setWeatherData] = useState();


    // Fetching data
    useEffect(function () {
        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=52.75&longitude=37.62&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code,wind_speed_10m,is_day&wind_speed_unit=ms&timezone=auto&forecast_days=1&forecast_hours=24"
        )
            .then((res) => res.json())
            .then((data) => {
                setWeatherData(data)
            });
    }, []);


    let curDate, curTime, current, hourly = null;
    if (weatherData) {
        (current = weatherData.current);
        (hourly = weatherData.hourly);

        (curDate = new Date(current.time));
        (curTime = curDate.toLocaleTimeString('en',
        { timeStyle: 'short', hour12: false, timeZone: (weatherData.timeZone) }));



        console.log(weatherData);
    }



    const wImgFolder = "/icons/animated/";


    return (
    <div className="weather-container">
        {weatherData ? ( 
            <>
                <WHeader 
                    curTime={curTime}
                    timeZone={weatherData.timezone}
                />

                <WImage className="weather-img" wCode={current.weather_code} wImgFolder={wImgFolder} />

                {/* <img className="weather-img" src={`${wIconsFolder}${wCurImgName}`} alt="no img" /> */}

                <WMainInfo curTemperature={current.temperature_2m} />

                <WHoursForecast 
                    temperature={hourly.temperature_2m}
                    time={hourly.time}
                    timeZone={weatherData.timeZone}
                    weatherCode={hourly.weather_code}
                    wImgFolder={wImgFolder}
                />
            </>
        )
        : (<h1>Loading data...</h1>)}
    </div>
    );
}

export default Weather;
