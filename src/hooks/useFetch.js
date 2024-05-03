import { useEffect, useState } from 'react';
import { useCurrency } from '../context/useContext';

const useFetch = (url, options) => {
    const [data, setData] = useState(null);

    const { setError, setIsLoading } = useCurrency();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

    }, [url, options]);

    return { data };
};

export default useFetch;