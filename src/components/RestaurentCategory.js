import React from "react";
import Categorys from "./Categorys";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

const RestaurentCategory = (props) => {
    const { categorys, isVisible, setVisibleCategory } = props;

    return (
        <div className="p-2 border-b-4" data-testid="catagorys">
            <div className="flex items-center justify-between cursor-pointer">
                <h1 className="text-lg font-bold">
                    {categorys.card.card.title} (
                    {categorys.card.card.itemCards.length})
                </h1>
                {isVisible ? (
                    <FaChevronUp
                        onClick={() => {
                            setVisibleCategory(-1);
                        }}
                    />
                ) : (
                    <FaChevronDown
                        onClick={() => {
                            setVisibleCategory();
                        }}
                    />
                )}
            </div>
            <div
                className={
                    isVisible ? "transition-all" : "hidden transition-all"
                }
            >
                {categorys.card.card.itemCards.map((item, index) => (
                    <Categorys data={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default RestaurentCategory;
