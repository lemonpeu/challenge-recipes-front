import { useState, useEffect, useCallback } from 'react';
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
            setElements(recipes.data.recipes);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [data, endpoint]);

    return { elements, error, loading };
};
