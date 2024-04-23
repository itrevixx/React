import { instanceChuckNorris } from './api';

export const getJokeFromCategories = async (categories) => {
    const res = await instanceChuckNorris.get(`/random?category=` + categories);
    return res.data.value;
}