import React from "react";
import logo from "../img/weather-app-icon.png";
const Form = props => {
  return (
    <div>
      <nav className="navbar navbar-color  justify-content-between">
        <a className="navbar-brand" href="#123">
          <img src={logo} className="imgSize" alt="" />
          <h5 className="brand-color">WeatherFinder</h5>
        </a>
        <form className="form-inline" onSubmit={props.getWeather}>
          <input
            className="form-control mr-sm-2"
            type="text"
            name="city"
            placeholder="City...."
          />
          <input
            className="form-control"
            type="text"
            name="country"
            placeholder="Country...."
          />
          <button className="btn btn-dark ml-sm-2">GetWeather</button>
        </form>
      </nav>
    </div>
  );
};

export default Form;
