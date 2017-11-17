import axios from 'axios';

const API_KEY = '3e18e703d0466a03578f6022a2bc5fbe';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
