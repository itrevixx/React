import axios from "axios";

export const instanceStarWars = axios.create({ baseURL: 'https://swapi.py4e.com/api/' });