import React from "react";
import { RECIPE_IMAGE_LINK } from "../utils/constants";
import { Link } from "react-router-dom";

const Recipe = (props) => {
    const { imageId } = props?.recipe;
    const { defaultClass, observer } = props;
    return (
        <div className="flex-shrink-0 m-1">
            <Link className="m-1 focus-visible:outline-1 focus-visible:outline-orange-400">
                <img
                    className={`${defaultClass} w-[144px] h-[180px] object-cover object-center`}
                    ref={observer}
                    src={RECIPE_IMAGE_LINK + imageId}
                    alt="recipe-image"
                />
            </Link>
        </div>
    );
};

export default Recipe;
