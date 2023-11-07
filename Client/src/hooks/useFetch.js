import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                setData(data.results);
                setLoading(false);
            } catch(error) {
                console.error(error);
            }
        }
        fetchMovies();
    }, [endpoint]);

    return {data, loading};
}

export default useFetch;
