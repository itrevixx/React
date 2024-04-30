
import axios from "axios";
import { instanceCharacter } from "./api"

export const getCharacters = async () => {
    const res = await instanceCharacter.get(`/character`)
    return res.data.results;
}

export const getCharacterById = async (id) => {
    const res = await instanceCharacter.get(`/character/${id}`)
    return res.data;
}

export const getEpisodes = async (episodeUrls) => {
    const episodes = await Promise.all(
        episodeUrls.map(async (url) => {
            const res = await axios.get(url)
            return res.data
        })
    )
    console.log(episodes)
    return episodes;
}


/* const data = await Promise.all(ids.map(async (id) => {
    const r = await axios.get('https://example.com/' + id);
    return r.data;
})) */