import React from "react";

const RestaurentInfoShimer = () => {
    const totalCard = "totalcard";
    return (
        <div
            data-testid="RestaurentShimer"
            className="w-6/12 mx-auto my-10 animate-pulse"
        >
            <div className="mb-2 w-[15%] h-[5px] bg-[#f0f0f0] rounded-sm"></div>
            <div className="mb-10 w-[100%] h-[150px] border bg-gray-700 rounded-lg"></div>
            {Array.from(totalCard).map((item, index) => {
                return (
                    <div
                        className="mb-5 flex  gap-5 justify-between border p-5 rounded-lg"
                        key={index}
                    >
                        <div className="w-10/12 h-[100px] rounded-sm flex flex-col justify-evenly">
                            <div className="w-[45%] h-[30px] bg-[#f0f0f0]"></div>
                            <div className="w-[60%] h-[20px] bg-[#f0f0f0]"></div>
                        </div>
                        <div className="w-2/12 h-[100px] bg-[#f0f0f0] rounded-sm"></div>
                    </div>
                );
            })}
        </div>
    );
};

export default RestaurentInfoShimer;
