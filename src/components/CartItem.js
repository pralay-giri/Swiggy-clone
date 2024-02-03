import React, { useEffect, useState } from "react";
import { LuIndianRupee } from "react-icons/lu";
import { RESTAURENT_CATEGORY_IMAGE_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
    removeItem,
    incressNumberOfItem,
    decressNumberOfItem,
} from "../redux/slices/cartSlice";

const CartItem = (props) => {
    const { cart, setToPay, count } = props;
    const [qty, setQty] = useState(count);
    const { name, price, id, description, imageId, defaultPrice } =
        cart?.card?.info;

    const dispatch = useDispatch();

    const handleDecremtnt = () => {
        const priceInRs = (price ?? defaultPrice) / 100;
        if (qty === 1) {
            dispatch(removeItem(id));
        } else {
            setQty((prev) => --prev);
            dispatch(decressNumberOfItem(id));
        }
        setToPay((prev) => {
            return (prev -= priceInRs);
        });
    };

    const handleIncrement = () => {
        const priceInRs = (price ?? defaultPrice) / 100;
        setQty((prev) => ++prev);
        setToPay((prev) => (prev += priceInRs));
        dispatch(incressNumberOfItem(id));
    };

    const handleDelete = () => {
        const priceInRs = (price ?? defaultPrice) / 100;
        setToPay((prev) => {
            return (prev -= priceInRs * qty);
        });
        dispatch(removeItem(id));
    };

    return (
        <div
            className="p-5 flex items-center gap-10 hover:bg-[#f2f6fc] hover:rounded-lg dark:hover:text-black transition-all dark:text-white group"
            data-testid="cartItem"
        >
            <div className="relative overflow-hidden rounded-lg w-52">
                <img
                    src={RESTAURENT_CATEGORY_IMAGE_CDN + imageId}
                    alt="dish"
                    className="object-cover object-center w-full h-full"
                />
            </div>

            <div className="">
                <p className="text-xl font-semibold">{name}</p>
                <p className="flex items-center gap-1">
                    <LuIndianRupee />
                    {(price ?? defaultPrice) / 100}
                </p>
                <p className="text-sm text-gray-400 dark:group-hover:text-gray-800  w-10/12">
                    {description}
                </p>
                <div className="flex items-center gap-2 ">
                    <label className="text-lg font-semibold">qty:</label>
                    <div
                        className="flex *:text-xl *:py-1 *:px-2 border items-center rounded-lg group-hover:dark:border-black *:bg-[#f0f0f0] overflow-hidden dark:text-black
                    "
                    >
                        <button onClick={handleDecremtnt}>-</button>
                        <span>{qty}</span>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button
                        onClick={handleDelete}
                        className="px-2 py-1 border rounded-lg focus-visible:shadow-md group-hover:dark:border-black bg-orange-400"
                    >
                        delete item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
