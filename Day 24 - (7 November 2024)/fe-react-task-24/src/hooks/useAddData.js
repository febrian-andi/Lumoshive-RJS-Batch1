import { useState } from "react";
import axios from "axios";

const useAddData = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addData = async (data, onSuccess) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.post(url, data);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { addData, loading, error };
};

export default useAddData;