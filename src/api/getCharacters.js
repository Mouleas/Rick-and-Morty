import { BASE_URL } from "../constants/constants";

export const getAllCharacters = async (index) => {
    const res = await fetch(`${BASE_URL}/character/?page=${index}`);
    return await res.json();
};
