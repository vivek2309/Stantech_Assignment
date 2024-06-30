import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Search = ({ setQuery, fetchWeather }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setQuery(input);
    fetchWeather(input);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchContainer>
  );
};

export default Search;
