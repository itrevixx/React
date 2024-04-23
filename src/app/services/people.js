import { instanceStarWars } from "./api";

export const getPeople = async () => {
    const res = await instanceStarWars.get(`/people`);
    return res.data;
}
