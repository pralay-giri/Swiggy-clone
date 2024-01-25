import React from "react";
import { MdStars } from "react-icons/md";
import { RESTAURENT_IMAGE_CDN } from "../utils/constants";

const Card = (props) => {
    const card = props.card.info;
    return (
        <div className="w-[260px] h-auto p-5 rounded-xl transition-all cursor-pointer hover:scale-95 dark:text-white">
            <div className="rounded-xl">
                <img
                    src={RESTAURENT_IMAGE_CDN + card.cloudinaryImageId}
                    width={"200px"}
                    alt="card image"
                    className="w-[100%] h-[100%] rounded-xl object-center object-cover aspect-[16/10]"
                />
            </div>
            <h3 className="text-[18px] text-[var(--base-color)] font-bold whitespace-nowrap overflow-hidden text-ellipsis dark:text-white">
                {card.name}
            </h3>
            <p className="flex items-center dark:text-white">
                <MdStars className="text-[20px] text-green-600 m-1" />
                <span className="">{card.avgRatingString}</span>
                <span className="mx-1"> • </span>
                <span className="p-[5px]">{card.sla.deliveryTime} mins</span>
            </p>
            <p className="text-[15px] font-bold text-[#707070] whitespace-nowrap overflow-hidden text-ellipsis ">
                {card.cuisines.join(", ")}
            </p>
            <p className="text-[15px] font-bold text-[#707070] whitespace-nowrap overflow-hidden text-ellipsis dark:text-[#f0f0f0]">
                {card.locality}
            </p>
        </div>
    );
};
export default Card;

export const withPromoted = (card) => {
    // card is the actual component as an argument
    // its return's a new component with modifying the Card component
    return (props) => {
        return (
            <div className="bg-[#f0f0f0]">
                <Card {...props} />
            </div>
        );
    };
};
