import { useState, useEffect, useRef } from "react";
import { SEARCH_API } from "./constants";
import axios from "axios";

const useSearchHook = () => {
    const [searchData, setSearchData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = async (query) => {
        try {
            if (query.trim() === "") return;
            const response = await axios.get(SEARCH_API + query);
            setIsLoading(true);
            setSearchData(response?.data?.data);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const debounceTimerRef = useRef(null);
    const debouncedFetchData = (newQuery) => {
        clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = setTimeout(() => {
            fetchData(newQuery);
        }, 300);
    };

    const handleQueryChange = (e) => {
        debouncedFetchData(e.target.value);
    };

    // useEffect for potential cleanup
    useEffect(() => {
        return () => {
            clearTimeout(debounceTimerRef.current); // Clear timer on unmount
        };
    }, []);

    return { handleQueryChange, searchData, isLoading, isError };
};

export default useSearchHook;
