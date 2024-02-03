import axios from "axios";
import { useState, useEffect } from "react";
import { RESTAURENT_INFO_API } from "./constants";

const useFetchRestaurent = (restaurentId) => {
    const [restaurantData, setRestaurentData] = useState([]);
    const [isLoadding, setIsLoadding] = useState(false);
    const fetchData = async () => {
        try {
            setIsLoadding(true);
            const responce = await axios.get(
                RESTAURENT_INFO_API + restaurentId
            );
            const cards = responce?.data?.data?.cards;
            setRestaurentData(cards);
            setIsLoadding(false);
        } catch (error) {
            setIsLoadding(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return { restaurantData, isLoadding };
};

export default useFetchRestaurent;
