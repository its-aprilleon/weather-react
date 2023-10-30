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
          <div className="col">
            <WeatherForecastDate data={forecast[0]} />
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="clear-sky-day" size={30} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="clear-sky-day" size={30} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="clear-sky-day" size={30} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="clear-sky-day" size={30} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="clear-sky-day" size={30} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>
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
