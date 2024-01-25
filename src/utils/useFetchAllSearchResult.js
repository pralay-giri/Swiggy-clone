import { useEffect, useState } from "react";
import { SEARCH_ALL_RESULT } from "./constants";
import axios from "axios";

const useFetchAllSearchResult = (query) => {
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(null);
    const [isLoadding, setIsLoadding] = useState(false);

    const fetchData = async (query) => {
        try {
            setIsLoadding(true);
            const responce = await axios.get(SEARCH_ALL_RESULT + query);
            setData(
                responce.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards.filter(
                    (dish) => {
                        return (
                            dish?.card?.card["@type"] ===
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish"
                        );
                    }
                )
            );
        } catch (error) {
            console.log(error);
            setIsError(error);
        } finally {
            setIsLoadding(false);
        }
    };

    useEffect(() => {
        fetchData(query);
    }, [query]);

    return { data, isError, isLoadding };
};

export default useFetchAllSearchResult;
