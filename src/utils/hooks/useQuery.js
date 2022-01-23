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
            setElements(recipes.data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, [method, data, options, endpoint]);

    useEffect(() => {
        fetchData();
    }, [data, endpoint, fetchData]);

    return { elements, error, loading };
};
