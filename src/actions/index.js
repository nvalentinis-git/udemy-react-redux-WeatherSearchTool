// API http://openweathermap.org/forecast5
// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
// ie: http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22

import axios from 'axios';

const API_KEY = 'a43ab802f19d92fa8b69e50eae67283d'
const ROOT_UR = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

// This is the Action Creator fetchWeather
export function fetchWeather(city) {
  const url = `${ROOT_UR}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
