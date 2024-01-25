import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchRestaurent from "../utils/useFetchRestaurent";
import RestaurentCategory from "./RestaurentCategory";
import { MdDirectionsBike } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import RestaurentInfoShimer from "./shimerUI/RestaurentInfoShimer";

const Restaurent = () => {
    const { id } = useParams();
    const { restaurantData, isLoadding } = useFetchRestaurent(id);
    const name = restaurantData?.[0]?.card?.card?.info?.name;
    const cuisines = restaurantData?.[0]?.card?.card?.info?.cuisines.join(", ");
    const area = restaurantData?.[0]?.card?.card?.info?.areaName;
    const feeDetailString =
        restaurantData?.[0]?.card?.card?.info?.feeDetails?.message;
    const averageRating = restaurantData?.[0]?.card?.card?.info?.avgRating;
    const totalRatingCount =
        restaurantData?.[0]?.card?.card?.info?.totalRatingsString;
    const distenceStr =
        restaurantData?.[0]?.card?.card?.info?.sla?.lastMileTravelString;
    const category =
        restaurantData?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.slice(1)
            .filter((item) => {
                return (
                    item.card.card["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                );
            });

    const [visibleCategory, setVisibleCategory] = useState(0);

    if (isLoadding) {
        return <RestaurentInfoShimer />;
    }

    return (
        <div className=" w-6/12 my-10 mx-auto dark:text-white">
            <Link to="/">
                <IoMdArrowRoundBack className="text-2xl text-gray-500 hover:opacity-80 transition-colors" />
            </Link>
            <div className="pb-4 border-b border-dashed">
                <div className="flex items-center justify-between">
                    <div>
                        <p
                            className="text-xl font-bold"
                            data-testid="restaurentName"
                        >
                            {name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {cuisines}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {area + ", " + distenceStr}
                        </p>
                    </div>
                    <div className="p-2 border border-[#f0f0f0] rounded-lg text-center">
                        <p className="mb-1 text-green-600 flex items-center justify-evenly">
                            <FaStar />
                            <span>{averageRating}</span>
                        </p>
                        <hr />
                        <p className="mt-1 text-[.6rem] font-bold">
                            {totalRatingCount}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MdDirectionsBike />
                    <p>{feeDetailString}</p>
                </div>
            </div>
            <div className="*:mb-2">
                {category?.map((item, index) => {
                    return (
                        <RestaurentCategory
                            key={item.card.card.title}
                            categorys={item}
                            isVisible={visibleCategory === index ? true : false}
                            setVisibleCategory={(id = index) =>
                                setVisibleCategory(id)
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Restaurent;
