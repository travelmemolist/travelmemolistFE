import React from "react";
import { Icon } from "react-icons-kit";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { droplet } from "react-icons-kit/feather/droplet";
import { wind } from "react-icons-kit/feather/wind";
import { activity } from "react-icons-kit/feather/activity";

const Weather = ({ weatherData, forecastData }) => {
  if (!weatherData) return null;

  const filterForecastByFirstObjectTime = (forecastData) => {
    if (!forecastData) {
      return [];
    }
    const firstObjTime = forecastData[0].dt_txt.split(" ")[1];
    return forecastData.filter((data) => data.dt_txt.endsWith(firstObjTime));
  };

  const filteredForecast = filterForecastByFirstObjectTime(forecastData?.list);

  return (
    <div className="current-weather-details-box">
      <div className="details-box-header">
        <h4>Thời tiết hiện tại</h4>
      </div>

      <div className="weather-details-container">
        <div className="details">
          <h4 className="city-name">{weatherData.name}</h4>
          <div className="icon-and-temp">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="icon"
            />
            <h1>{weatherData.main.temp}&deg;C</h1>
          </div>
          <h4 className="description">{weatherData.weather[0].description}</h4>
        </div>

        <div className="metrices">
          <h4>Cảm giác như {weatherData.main.feels_like}&deg;C</h4>
          <div className="key-value-box">
            <div className="key">
              <Icon icon={arrowUp} size={20} className="icon" />
              <span className="value">{weatherData.main.temp_max}&deg;C</span>
            </div>
            <div className="key">
              <Icon icon={arrowDown} size={20} className="icon" />
              <span className="value">{weatherData.main.temp_min}&deg;C</span>
            </div>
          </div>

          <div className="key-value-box">
            <div className="key">
              <Icon icon={droplet} size={20} className="icon" />
              <span>Độ ẩm</span>
            </div>
            <div className="value">
              <span>{weatherData.main.humidity}%</span>
            </div>
          </div>

          <div className="key-value-box">
            <div className="key">
              <Icon icon={wind} size={20} className="icon" />
              <span>Gió</span>
            </div>
            <div className="value">
              <span>{weatherData.wind.speed}km/h</span>
            </div>
          </div>

          <div className="key-value-box">
            <div className="key">
              <Icon icon={activity} size={20} className="icon" />
              <span>Áp suất</span>
            </div>
            <div className="value">
              <span>{weatherData.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>

      <h4 className="extended-forecast-heading">Dự báo mở rộng</h4>
      {filteredForecast.length > 0 ? (
        <div className="extended-forecasts-container">
          {filteredForecast.map((data, index) => {
            const date = new Date(data.dt_txt);
            const day = date.toLocaleDateString("vi-VN", { weekday: "short" });
            return (
              <div className="forecast-box" key={index}>
                <h5>{day}</h5>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt="icon"
                />
                <h5>{data.weather[0].description}</h5>
                <h5 className="min-max-temp">
                  {data.main.temp_max}&deg; / {data.main.temp_min}&deg;
                </h5>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="error-msg">Không có dữ liệu</div>
      )}
    </div>
  );
};

export default Weather;
