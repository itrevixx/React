/* export const getPokemon = async () => {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon"
    );
    const data = await response.json()
    return data.results;
}

export default getPokemon
 */
/* 
import axios from "axios";

export const getPokemon = async () => {
    const response = await axios(
        "https://pokeapi.co/api/v2/pokemon"
    );
    return response.data.results;
}

export default getPokemon
 */

import axios from "axios";

export const instancePokemon = axios.create({ baseURL: 'https://pokeapi.co/api/v2' });
export const instanceChuckNorris = axios.create({ baseURL: 'https://api.chucknorris.io/jokes' });


