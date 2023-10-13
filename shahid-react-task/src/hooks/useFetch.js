import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                setData(data.results);
            } catch(error) {
                console.error(error);
            }
        }
        fetchMovies();
    }, [endpoint]);

    return data;
}

export default useFetch;
