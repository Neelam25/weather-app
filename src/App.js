import React, { Component } from "react";
import "./App.css";

import Form from "./Component/Form";
import Weather from "./Component/Weather";

const api_key = "738992a4c387d4f02fd726308f2d5f4c";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  };

  getWeather = async e => {
    console.log(e);
    e.preventDefault();
    var city = e.target.city.value;
    var country = e.target.country.value;

    if (city && country) {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${api_key}`
      );
      const data = await api_call.json();

      console.log("=", data);
      if (data.cod !== "404") {
        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          error: undefined
        });
      }
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "Enter the Details"
      });
    }
  };
  render() {
    return (
      <div className="Weather-App">
        <Form getWeather={this.getWeather} />
        {this.state.city && (
          <Weather
            weatherDesc={this.state}
            imgsrc={
              "http://openweathermap.org/img/w/" + this.state.icon + ".png"
            }
          />
        )}
      </div>
    );
  }
}

export default App;
