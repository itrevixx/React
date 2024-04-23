import { instanceStarWars } from "./api";

export const getCharacters = async () => {
    const response = await instanceStarWars.get(`/people`);
    return response.data.results;
}
