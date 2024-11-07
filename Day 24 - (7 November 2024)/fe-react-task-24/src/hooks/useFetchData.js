import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            // console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { fetchData, data, loading, error };
};

export default useFetchData;