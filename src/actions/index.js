import axios from 'axios';

const API_KEY = "27b7625a4a1c6f9d96caf48ef499cddf";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},de`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request,
	}
}