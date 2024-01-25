import React from "react";
import { Outlet } from "react-router-dom";

const Offer = () => {
    return (
        <div className="offer-container">
            <h1>offers</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores aperiam praesentium tempore atque, quos optio
                molestiae alias. Illum voluptatem provident commodi blanditiis
                nemo nihil ad suscipit dolore debitis deleniti! Alias?
            </p>
            <Outlet />
        </div>
    );
};

export default Offer;
