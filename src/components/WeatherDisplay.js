import React from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  background: linear-gradient(to bottom, #007bff, #00d2ff);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
  margin: 0 auto;
`;

const WeatherInfo = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const WeatherDisplay = ({ weather }) => {
  return (
    <WeatherContainer>
      <h2>{weather.name}</h2>
      <WeatherInfo>{weather.weather[0].description}</WeatherInfo>
      <WeatherInfo>Temperature: {weather.main.temp} °C</WeatherInfo>
      <WeatherInfo>Humidity: {weather.main.humidity} %</WeatherInfo>
      <WeatherInfo>Wind Speed: {weather.wind.speed} m/s</WeatherInfo>
    </WeatherContainer>
  );
};

export default WeatherDisplay;
