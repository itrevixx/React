import { instancePokemon } from "./api";


export const getPokemon = async () => {
    const res = await instancePokemon.get(`/pokemon`);
    return res.data.results;
}