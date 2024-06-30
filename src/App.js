import React, { useState } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: #f0f0f0;
    display: flex;
    justify-content: center;
    background-image: url('/weatherImage.jpg');
     background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    height: 100vh;
  }
`;

const AppContainer = styled.div`
  text-align: center;
`;

const Loader = styled.div`
  font-size: 20px;
  color: #007bff;
`;

const Error = styled.div`
  color: red;
  margin-top: 20px;
`;

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61e42d97f115a3272b0b93000b16f369&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError('City not found');
    }
    setLoading(false);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Search setQuery={setQuery} fetchWeather={fetchWeather} />
        {loading && <Loader>Loading...</Loader>}
        {error && <Error>{error}</Error>}
        {weather && <WeatherDisplay weather={weather} />}
      </AppContainer>
    </>
  );
}

export default App;
