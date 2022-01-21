import axios from 'axios';

export const putData = async ({ data, id }) => {
    try {
        const recipes = await axios({
            method: 'PUT',
            url: process.env.REACT_APP_API_URL + '/api/recipe/' + id,
            data,
        });
        return recipes;
    } catch (e) {
        console.warn(e);
    }
};
