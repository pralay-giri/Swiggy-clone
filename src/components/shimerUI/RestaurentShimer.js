import React from "react";
import Loadding from "../Loadding";

const RestaurentShimer = () => {
    const totalCard = "totalcardtotalc";
    return (
        <div className="mx-auto p-15">
            <div className="mx-10 my-5 h-[200px] bg-[var(--base-deep-color)] dark:bg-[#f0f0f0] flex flex-col items-center justify-center">
                <Loadding />
                <span className="text-2xl font-bold text-white dark:text-[var(--base-color)]">
                    looking great food near you...
                </span>
            </div>
            <div className="flex flex-wrap justify-center gap-10 animate-pulse transition-opacity">
                {Array.from(totalCard).map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="w-60 h-64 flex flex-col gap-2"
                        >
                            <div className="bg-[#f0f0f0] w-[100%] h-[70%] rounded-sm"></div>
                            <div className="bg-[#f0f0f0] w-[75%] h-[5%] rounded-sm"></div>
                            <div className="bg-[#f0f0f0] w-[80%] h-[7%] rounded-sm"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RestaurentShimer;
