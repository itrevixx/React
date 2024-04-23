import { instanceChuckNorris } from './api';

export const getCategories = async () => {
    const res = await instanceChuckNorris.get(`/categories`);
    return res.data;
}


