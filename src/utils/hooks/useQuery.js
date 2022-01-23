import { useState, useEffect } from 'react';
import axios from 'axios';

export const useQuery = ({ method, endpoint, data, defaultValue, options }) => {
    const [elements, setElements] = useState(defaultValue);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const recipes = await axios({
                method,
                url: process.env.REACT_APP_API_URL + endpoint,
                data,
                options,
            });
            setElements(recipes.data);
        } catch (e) {
            console.warn('Error', e.response.data);
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [method, endpoint, data]);

    return { elements, error, loading };
};
