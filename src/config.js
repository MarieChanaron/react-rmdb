//require('dotenv').config();

// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = process.env.REACT_APP_APIKEY;
const API_KEY='4577eea1d6171d329385f0ed0fb84cc1';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=fr-FR&query=`;       // 'https://api.themoviedb.org/3/discover/movie?api_key=4577eea1d6171d329385f0ed0fb84cc1';
const POPULAR_BASE_URL = `${API_URL}trending/all/week?api_key=${API_KEY}&language=fr-FR&query=`;   // 'https://api.themoviedb.org/3/trending/all/week?api_key=4577eea1d6171d329385f0ed0fb84cc1';
// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
};
