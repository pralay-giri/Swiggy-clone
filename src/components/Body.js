import React, {
    useState,
    useRef,
    useCallback,
    useReducer,
    useEffect,
} from "react";
import Card from "./Card";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
import useFetchInitial from "../utils/useFetchInitial";
import RestaurentShimer from "./shimerUI/RestaurentShimer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useConnection from "../utils/useConnection";
import Offline from "./Offline";
import RestaurentShimer from "./shimerUI/RestaurentShimer";
import { reducerFun } from "../helpers/cardFilterReducer";
import Filter from "./Filter";
import { withPromoted } from "./Card";

const Body = () => {
    const SCROLL_LENGTH = 270;

    // fetching the required data
    const {
        recipes,
        recipeHeader,
        topRestaurents,
        topRestaurentsHeader,
        allRestaurents,
        allRestaurentsTitle,
        isLoadding,
        error,
        filterConfig,
    } = useFetchInitial();

    const netWorkStatus = useConnection();
    const [filterData, dispatch] = useReducer(reducerFun, allRestaurents);

    useEffect(() => {
        dispatch({ type: "LOAD_DATA", data: allRestaurents });
    }, [allRestaurents]);

    //handleing the left right scroll btn
    const [scrollBtn, setScrollBtn] = useState({
        left: SCROLL_LENGTH,
        right: SCROLL_LENGTH,
    });

    const [isRecipesScrollToStart, setIsRecipesScrollToStart] = useState(false);
    const [isRecipesScrollToEnd, setIsRecipesScrollToEnd] = useState(false);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const scrollLeft = () => {
        document
            .querySelector(".recipes-wraper")
            .scrollTo(scrollBtn.left - SCROLL_LENGTH, 0);
        setScrollBtn((prev) => {
            return {
                left: prev.left - SCROLL_LENGTH,
                right: prev.right - SCROLL_LENGTH,
            };
        });
    };
    const scrollRight = () => {
        document.querySelector(".recipes-wraper").scrollTo(scrollBtn.right, 0);
        setScrollBtn((prev) => {
            return {
                left: prev.left + SCROLL_LENGTH,
                right: prev.right + SCROLL_LENGTH,
            };
        });
    };

    // use to observe the last and first recipe
    const recipeObserver = useRef();
    const firstAndLastNode = [];
    const observer = useCallback((node) => {
        firstAndLastNode.push(node);
        if (recipeObserver.current) recipeObserver.current.disconnect();
        recipeObserver.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains("last-recipe")) {
                            setIsRecipesScrollToEnd(true);
                        } else if (
                            entry.target.classList.contains("first-recipe")
                        ) {
                            setIsRecipesScrollToStart(true);
                        }
                    } else {
                        if (entry.target.classList.contains("last-recipe")) {
                            setIsRecipesScrollToEnd(false);
                        } else if (
                            entry.target.classList.contains("first-recipe")
                        ) {
                            setIsRecipesScrollToStart(false);
                        }
                    }
                });
            },
            { threshold: 1 }
        );
        if (node) {
            firstAndLastNode.forEach((node) => {
                recipeObserver.current.observe(node);
            });
        }
    });

    const closeFilter = () => {
        setIsFilterVisible(false);
    };

    if (isLoadding) {
        return <RestaurentShimer />;
    }

    if (error) {
        return <p>somthing went wrong try again...</p>;
    }

    if (!netWorkStatus) {
        return <Offline />;
    }

    if (!allRestaurents?.length) {
        return <RestaurentShimer />;
    }

    const PromotedCard = withPromoted(Card);

    return (
        <div className="max-w-[70%] relative m-auto dark:text-white">
            <div className=" m-auto mt-10 overflow-hidden">
                <div className="flex items-center justify-between ">
                    <h2 className="font-bold text-xl">{recipeHeader}</h2>
                    <div>
                        <button
                            className="left disabled:opacity-50 disabled:pointer-events-none p-2 rounded-[50%] bg-[#e5e5e5] cursor-pointer mr-2 text-[var(--base-color)]"
                            disabled={isRecipesScrollToStart}
                            onClick={scrollLeft}
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            className="right disabled:opacity-50 disabled:pointer-events-none p-2 rounded-[50%] bg-[#e5e5e5] cursor-pointer text-[var(--base-color)]"
                            disabled={isRecipesScrollToEnd}
                            onClick={scrollRight}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className="recipes-wraper mx-4 my-1 flex overflow-x-scroll">
                    {recipes?.map((recipe, index) => {
                        if (recipes.length === index + 1) {
                            return (
                                <Recipe
                                    key={index}
                                    recipe={recipe}
                                    defaultClass={"last-recipe"}
                                    observer={observer}
                                />
                            );
                        }
                        if (!index) {
                            return (
                                <Recipe
                                    key={index}
                                    recipe={recipe}
                                    defaultClass={"first-recipe"}
                                    observer={observer}
                                />
                            );
                        }
                        return <Recipe key={index} recipe={recipe} />;
                    })}
                </div>
            </div>
            <div className="overflow-hidden relative mt-10 text-[var(--base-deep-color)] dark:text-white">
                <div className="title text-xl text-inherit font-bold mx-[10px]">
                    {topRestaurentsHeader}
                </div>
                <div className="restaurents relative flex overflow-x-scroll p-[10px]">
                    {topRestaurents?.map((restaurant) => {
                        return (
                            <Link
                                data-testid="restaurentCard"
                                to={`/restaurent/${restaurant.info.id}`}
                                key={restaurant.info.id}
                                className="text-inherit focus-visible:outline focus-visible:outline-[var(--theam-color)] rounded-xl"
                            >
                                <Card card={restaurant} />
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="restaurent-container mt-10 text-[var(--base-deep-color)] dark:text-white">
                <div className="title text-xl text-inherit font-bold mx-[10px]">
                    {allRestaurentsTitle}
                </div>
                <div className="filter m-5 flex gap-5 *:bg-[#e5e5e5] *:px-2 *:py-2 *:rounded-xl *:cursor-pointer *:text-[var(--base-color)] dark:*:text-white dark:*:bg-black dark:*:border transition-all">
                    <span
                        className="flex items-center gap-1 hover:opacity-85 dark:hover:bg-white dark:hover:text-[var(--base-deep-color)]"
                        onClick={() => {
                            setIsFilterVisible(true);
                        }}
                    >
                        Filter
                    </span>

                    <span
                        onClick={() => {
                            dispatch({ type: "DEFAULT", data: allRestaurents });
                        }}
                        className="hover:opacity-85 dark:hover:bg-white dark:hover:text-[var(--base-deep-color)]"
                    >
                        Default
                    </span>
                    <span
                        onClick={() => {
                            dispatch({ type: "SORT_BY_RATTING" });
                        }}
                        className="hover:opacity-85 dark:hover:bg-white dark:hover:text-[var(--base-deep-color)]"
                    >
                        Sort by Ratting
                    </span>
                    <span
                        onClick={() => dispatch({ type: "RANDOMIZE" })}
                        className="hover:opacity-85 dark:hover:bg-white dark:hover:text-[var(--base-deep-color)]"
                    >
                        Randomize
                    </span>
                    <span
                        className="hover:opacity-85 dark:hover:bg-white dark:hover:text-[var(--base-deep-color)]"
                        onClick={() => {
                            dispatch({ type: "DELIVARY_TIME" });
                        }}
                    >
                        Fast delivary
                    </span>
                    <span
                        className="hover:opacity-85 dark:hover:bg-white dark:hover:text-[var(--base-deep-color)]"
                        onClick={() => {
                            dispatch({ type: "RATTING_4++", ratting: 4 });
                        }}
                    >
                        Ratting 4.0+
                    </span>
                </div>
                <div className="flex flex-wrap">
                    {filterData?.map((restaurant, index) => {
                        return (
                            <Link
                                to={`/restaurent/${restaurant.info.id}`}
                                key={restaurant.info.name}
                            >
                                <Card
                                    key={restaurant.info.id}
                                    card={restaurant}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
            {isFilterVisible && (
                <Filter closeModal={closeFilter} config={filterConfig} />
            )}
        </div>
    );
};
export default Body;
