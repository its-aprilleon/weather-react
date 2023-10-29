import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <form action="">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
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
      <h1> New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy-icon"
            />
            <span class="temperature-degree">6</span>
            <span class="celsius">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitaiton: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
