import axios from "axios";
import { useEffect, useState } from "react";
import { HOMEPAGE_API } from "./constants";

const useFetchInitial = () => {
    const [recipes, setRecipes] = useState([]);
    const [recipeHeader, setRecipeHeader] = useState("");
    const [topRestaurents, setTopRestaurents] = useState([]);
    const [topRestaurentsHeader, setTopRestaurentsHeader] = useState("");
    const [allRestaurentsTitle, setAllRestaurentsTitle] = useState("");
    const [allRestaurents, setAllRestaurents] = useState([]);
    const [isLoadding, setIsLoadding] = useState(false);
    const [filterConfig, setFilterConfig] = useState([]);
    const [error, setError] = useState(null);
    const [allCitys, setAllCitys] = useState([]);

    const fetchData = async () => {
        try {
            setIsLoadding(true);
            const responce = await axios.get(HOMEPAGE_API);
            const { data } = responce?.data;

            setRecipes(() => {
                const matchingData = data?.cards?.find(
                    (card) => card?.card?.card?.id === "whats_on_your_mind"
                );
                return matchingData?.card?.card?.imageGridCards?.info ?? [];
            });
            setRecipeHeader(() => {
                const matchingData = data?.cards?.find(
                    (card) => card?.card?.card?.id === "whats_on_your_mind"
                );
                return matchingData?.card?.card?.header?.title ?? "";
            });

            setTopRestaurents(() => {
                const matchingData = data?.cards?.find(
                    (card) => card?.card?.card?.id === "top_brands_for_you"
                );
                const retaurents =
                    matchingData?.card?.card?.gridElements?.infoWithStyle
                        ?.restaurants;
                return retaurents ?? [];
            });

            setTopRestaurentsHeader(() => {
                const matchingData = data?.cards?.find(
                    (card) => card?.card?.card?.id === "top_brands_for_you"
                );
                const header = matchingData?.card?.card?.header?.title;
                return header ?? "";
            });

            setAllRestaurents(() => {
                const matchingCard = data?.cards?.find(
                    (card) => card?.card?.card?.id === "restaurant_grid_listing"
                );
                const restaurants =
                    matchingCard?.card?.card?.gridElements?.infoWithStyle
                        ?.restaurants;
                return restaurants ?? [];
            });

            setAllRestaurentsTitle(() => {
                const matchingdata = data?.cards?.find(
                    (card) =>
                        card?.card?.card?.id === "popular_restaurants_title"
                );
                return matchingdata?.card?.card?.title ?? "";
            });

            setFilterConfig(() => {
                const matchingData = data?.cards?.find(
                    (card) =>
                        card?.card?.card["@type"] ===
                        "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget"
                );
                return matchingData?.card?.card ?? {};
            });

            setAllCitys(() => {
                const matchingData = data?.cards?.find(
                    (card) => card?.card?.card?.id === "footer_content"
                );
                return matchingData?.card?.card?.cities ?? [];
            });
        } catch (error) {
            setError(error);
        } finally {
            setIsLoadding(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return {
        recipes,
        recipeHeader,
        topRestaurents,
        topRestaurentsHeader,
        allRestaurents,
        allRestaurentsTitle,
        isLoadding,
        error,
        filterConfig,
        allCitys,
    };
};

export default useFetchInitial;
