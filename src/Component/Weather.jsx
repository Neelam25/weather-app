import React from "react";
import { WiThermometerExterior } from "weather-icons-react";

const Weather = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 weather mx-auto">
          <div className="weather-head">
            <h1 className="text-center display-4">
              {props.weatherDesc.city && props.weatherDesc.country && (
                <p>
                  {props.weatherDesc.city},{props.weatherDesc.country}
                </p>
              )}
            </h1>
            <div className="row">
              <div id="description" className="col-md-6">
                <i>
                  <img className="tempImage" src={props.imgsrc} alt="" />
                </i>

                {props.weatherDesc.description && (
                  <p className="desc"> {props.weatherDesc.description}</p>
                )}
              </div>

              <div id="temperature" className="col-lg-6">
                {props.weatherDesc.temperature && (
                  <p id="temp" className="d-inline">
                    {props.weatherDesc.temperature}
                  </p>
                )}

                <WiThermometerExterior
                  className="align-baseline"
                  size={90}
                  color="#fff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {props.weatherDesc.error && <p>Error: {props.weatherDesc.error}</p>}
    </div>
  );
};
export default Weather;
