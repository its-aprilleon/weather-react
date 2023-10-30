import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} />

            <WeatherTemperature celsius={props.data.temperature} />
            {/* <span className="temperature-degree">
              {Math.round(props.data.temperature)}
            </span>
            <span className="celsius">°C</span> */}
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
