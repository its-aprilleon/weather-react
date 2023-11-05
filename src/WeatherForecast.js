import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherforecastDate from "./WeatherForecastDate";
import WeatherForecastDate from "./WeatherForecastDate";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDate data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.latitude;
    let lon = props.coordinates.longitude;
    let apiurl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=29baaftfaf333ad6ca3704ob80d346c8&units=metric`;

    axios.get(apiurl).then(handleResponse);
  }
}
