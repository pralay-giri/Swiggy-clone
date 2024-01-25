import React from "react";
import { SEARCH_IMAGE_CDN } from "../utils/constants";

const SearchItem = (props) => {
    const { text, type, cloudinaryId, highlightedText } = props.item;

    return (
        <div
            data-testid="searchItem"
            className="flex items-center gap-2 hover:bg-[#f2f6fc] my-2 cursor-pointer transition-all rounded-md overflow-hidden dark:text-white group"
        >
            <div className="mx-3 my-3">
                <img
                    className="object-center object-cover rounded-lg"
                    src={SEARCH_IMAGE_CDN + cloudinaryId}
                    alt="image"
                />
            </div>
            <div className="dark:*:text-[#f0f0f0] group-hover:dark:*:text-[var(--base-deep-color)]">
                <h2 className="text-xl font-semibold text-[var(--base-deep-color)] ">
                    {text}
                </h2>
                <p className="capitalize text-lg  text-[var(--base-color)] ">
                    {type}
                </p>
            </div>
        </div>
    );
};

export default SearchItem;
