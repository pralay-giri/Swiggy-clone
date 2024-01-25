import React from "react";
import { MdOutlineFastfood } from "react-icons/md";

const Loadding = () => {
    return (
        <div className="outerDiv">
            <div className="innerDiv grid place-content-center">
                <MdOutlineFastfood className="inner-item text-2xl animate-pulse" />
            </div>
        </div>
    );
};

export default Loadding;
