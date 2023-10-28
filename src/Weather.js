import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [load, setLoad] = useState(false);
  const [weather, setWeather] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    let city = "London";
    let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=29baaftfaf333ad6ca3704ob80d346c8&units=metric`;

    axios.get(apiurl).then(showWeather);
  }

  function changeCity(e) {
    setCity(e.target.value);
  }
  function showWeather(response) {
    setLoad(response.preventDefault());
    setWeather = {
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
    };
  }

  let weatherTempelate = (
    <div className="Weather">
      <form onClick={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              onChange={changeCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>New York</h1>
      <ul>
        <li>Wednesday</li>
        <li>Cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy-icon"
            />
            <span className="temperature-degree">6</span>
            <span className="celsius">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15% </li>
            <li>Humidity: 72%</li>
            <li>Wind: 15 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );

  if (load) {
    return <div>{weatherTempelate}</div>;
  } else {
    <div>{weatherTempelate}</div>;
  }
}
