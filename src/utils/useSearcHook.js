import { useState, useEffect } from "react";
import { SEARCH_API } from "./constants";
import axios from "axios";

const useSearchHook = (query) => {
    const [searchData, setSearchData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = async (query) => {
        try {
            setIsLoading(true);
            const response = await axios.get(SEARCH_API + query);
            setSearchData(response?.data?.data);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(query);
    }, [query]);

    return { searchData, isLoading, isError };
};

export default useSearchHook;
