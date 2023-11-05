import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDate from "./WeatherForecastDate";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  //if the coordinates change, set loaded false
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function loading() {
    let lat = props.coordinates.latitude;
    let lon = props.coordinates.longitude;
    let apiurl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=29baaftfaf333ad6ca3704ob80d346c8&units=metric`;

    axios.get(apiurl).then(handleResponse);
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    loading();
    return null;
  }
}
