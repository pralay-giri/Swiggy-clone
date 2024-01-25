import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { LuIndianRupee } from "react-icons/lu";
// const emptyCart = require("../media/emptyCart.png");
import { clearCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { EMPTY_CART_IMAGE } from "../utils/constants";

const CearCartModal = ({ closeModal, clearCart }) => {
    return (
        <div className="absolute inset-0 z-[100000] bg-[#38383895] text-center grid place-content-center transition-all">
            <div className="bg-white px-5 py-3 rounded-lg">
                <h1 className="text-lg font-semibold text-gray-800">
                    are you sure to clear cart
                </h1>
                <div className="flex justify-evenly *:border *:px-3 py-2 *:text-2xl *:text-white *:rounded-lg">
                    <button
                        className="bg-orange-500 hover:opacity-90"
                        onClick={clearCart}
                    >
                        ok
                    </button>
                    <button
                        className="bg-green-400 hover:opacity-90"
                        onClick={closeModal}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

const Cart = () => {
    const cart = useSelector((store) => store.cart.cartItems);
    const dispatch = useDispatch();

    const [toPay, setToPay] = useState(() => {
        let total = 0;
        cart.forEach((element) => {
            total += element?.card?.info?.price / 100;
        });
        return total;
    });
    const [clearCartModal, setClearCartMOdal] = useState(false);

    const handleClearCart = () => {
        setClearCartMOdal(true);
    };

    return (
        <div className="w-7/12 mx-auto my-4 dark:text-white">
            <div className=" flex items-center justify-between border-b-4 pb-2 mb-2">
                <p className="text-4xl font-semibold">My cart</p>
                <p>Total {cart.length} items</p>
            </div>
            {cart.length === 0 ? (
                <div className="text-center p-10 *:my-3 ">
                    <div className="flex justify-center">
                        <img src={EMPTY_CART_IMAGE} alt="empty cart" />
                    </div>
                    <p className="text-xl font-semibold text-orange-400 font-sans">
                        your cart is empty
                    </p>
                    <button className="border bg-orange-400 px-2 py-1 rounded-sm text-white hover:opacity-90">
                        <Link to="/">Go to home page and add somthing</Link>
                    </button>
                </div>
            ) : (
                <div className="*:my-10 *:border-b-2">
                    {cart.map((item, index) => {
                        return (
                            <CartItem
                                cart={item}
                                key={item.card.info.id}
                                setToPay={setToPay}
                            />
                        );
                    })}
                </div>
            )}
            <div className=" flex items-center gap-5 justify-between  border-t-4 py-2">
                <div className="">
                    <button
                        className="border px-2 py-1 bg-orange-400 text-white text-lg font-semibold rounded-md disabled:bg-orange-300 disabled:hover:opacity-100 hover:opacity-90"
                        disabled={cart.length ? false : true}
                        onClick={handleClearCart}
                    >
                        clear Cart
                    </button>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex gep-2 items-center *:text-xl">
                        <span>total</span>
                        <LuIndianRupee />
                        <span>{toPay}</span>
                    </div>
                    <button
                        className="border px-2 py-1 bg-green-400 text-white text-lg font-semibold rounded-md disabled:bg-green-300 disabled:hover:opacity-100 hover:opacity-90"
                        disabled={cart.length ? false : true}
                    >
                        check out
                    </button>
                </div>
            </div>
            {clearCartModal && (
                <CearCartModal
                    closeModal={() => {
                        setClearCartMOdal(false);
                    }}
                    clearCart={() => {
                        setClearCartMOdal(false);
                        dispatch(clearCart());
                        setToPay(0);
                    }}
                />
            )}
        </div>
    );
};

export default Cart;
