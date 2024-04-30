import axios from "axios"

export const instanceCharacter = axios.create({ baseURL: 'https://rickandmortyapi.com/api/' });


