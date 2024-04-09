import React, { useState, useEffect } from "react";
import "./data-request-wrapper.css";
import {MainWidget, MiniWidgetsCarousel} from "./..";


function DataRequestWrapper() {
    const [weatherData, setWeatherData] = useState();
    const [iconsFolder, setIconsFolder] = useState("/static/icons/animated/");

    // ---------- Fetching data ----------
    useEffect(function () {
        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=52.75&longitude=37.62&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code,wind_speed_10m,is_day&wind_speed_unit=ms&timezone=auto&forecast_days=1&forecast_hours=24"
        )
            .then((res) => res.json())
            .then((data) => {
                setWeatherData(data);
            });

    }, []);
    // ------------------------------------
    
    function transformISOTime(ISOTime) {
        let date = new Date(ISOTime);
        date = date.toLocaleDateString('en-GB', {hour: '2-digit', minute: '2-digit'});
        return date
    }

    // ------ Processing some parts of data --------
    let current, curTime, hourly, hourly_times = null;
    if (weatherData) {
        (current = weatherData.current);
        (hourly = weatherData.hourly);

        (curTime = transformISOTime(current.time));

        (hourly_times = (weatherData.hourly.time.map(
                (time) => transformISOTime(time)
            )
        ));
    }
    // ----------------------------------------



    return (
        weatherData ? (
            <div className="data-request-wrapper">
                <MainWidget 
                    timeZone={weatherData.timezone}
                    time={curTime}

                    weatherCode={current.weather_code}
                    iconsFolder={iconsFolder}
                    isDay={current.is_day}

                    temperature={current.temperature_2m}
                    temperatureUnit={weatherData.current_units.temperature_2m}
                />

                <MiniWidgetsCarousel 
                    title={"Hourly forecast"}

                    times={hourly_times}

                    weatherCodes={hourly.weather_code}
                    iconsFolder={iconsFolder}
                    isDays={hourly.is_day}
                    
                    temperatures={hourly.temperature_2m}
                    temperatureUnit={weatherData.hourly_units.temperature_2m}

                    precipitationProbs={hourly.precipitation_probability}
                    
                    />
            </div>
        )

        : (<h2>Loading data...</h2>)
    );
}

export default DataRequestWrapper;
