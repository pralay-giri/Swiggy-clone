import React, { useState } from "react";
import { FaRegCaretSquareUp, FaStar } from "react-icons/fa";
import { TbSquareDot } from "react-icons/tb";
import { RESTAURENT_CATEGORY_IMAGE_CDN } from "../utils/constants";
import { LuIndianRupee } from "react-icons/lu";
import { useDispatch } from "react-redux";
import {
    addItem,
    incressNumberOfItem,
    decressNumberOfItem,
    removeItem,
} from "../redux/slices/cartSlice";
import { toogleSignContainer } from "../redux/slices/userSlice";
import { useSelector } from "react-redux";

const Categorys = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.userData);
    const { data } = props;

    const name = data?.card?.info?.name;
    const id = data?.card?.info?.id;
    const price = data?.card?.info?.price;
    const defaultPrice = data?.card?.info?.defaultPrice;
    const description = data?.card?.info?.description;
    const imageId = data?.card?.info?.imageId;
    const vegStatus = data?.card?.info?.itemAttribute?.vegClassifier;
    const ribbon = data?.card?.info?.ribbon?.text;

    const [AddedItem, setAddedItem] = useState(0);

    const handleAdd = () => {
        if (!user) {
            dispatch(toogleSignContainer());
            return;
        }
        dispatch(addItem({ card: data, count: AddedItem + 1 }));
        setAddedItem((prev) => prev + 1);
    };

    const handleIncressItem = () => {
        if (!user) {
            dispatch(toogleSignContainer());
            return;
        }
        dispatch(incressNumberOfItem(id));
        setAddedItem((prev) => prev + 1);
    };

    const handleDecressItem = () => {
        if (!user) {
            dispatch(toogleSignContainer());
            return;
        }
        if (AddedItem === 1) {
            removeItem(id);
        } else {
            dispatch(decressNumberOfItem(id));
        }
        setAddedItem((prev) => prev - 1);
    };

    return (
        <div
            className="my-5 border-b flex justify-between"
            data-testid="catagory"
        >
            <div className="w-9/12">
                <div className="flex gap-1 items-center">
                    {vegStatus.toUpperCase() === "VEG" ? (
                        <TbSquareDot className="text-green-600 text-2xl" />
                    ) : (
                        <FaRegCaretSquareUp className="text-orange-700 text-2xl" />
                    )}
                    {ribbon ? (
                        <div className="text-orange-500 flex items-center gap-1">
                            {" "}
                            <FaStar /> {ribbon}
                        </div>
                    ) : null}
                </div>
                <h2 className="text-lg ">{name}</h2>
                <p className="flex items-center text-sm">
                    <LuIndianRupee />
                    <span>{price ? price / 100 : defaultPrice / 100}</span>
                </p>
                <p className="my-5 text-gray-500">{description}</p>
            </div>
            <div className="w-3/12 p-5 overflow-hidden relative">
                {imageId && (
                    <img
                        src={RESTAURENT_CATEGORY_IMAGE_CDN + imageId}
                        alt="img"
                        className="object-cover object-center aspect-square rounded-lg"
                    />
                )}
                <div className="text-center absolute bottom-2 left-[50%] translate-x-[-50%] hover:opacity-95">
                    {AddedItem === 0 ? (
                        <button
                            onClick={handleAdd}
                            className="px-8 py-2 text-sm border shadow-lg text-green-500 bg-white rounded-sm"
                            data-testid="addButton"
                        >
                            ADD
                        </button>
                    ) : (
                        <div className="w-auto felx items-center text-sm px-2 py-1 border shadow-lg text-green-500 bg-white rounded-sm">
                            <button
                                onClick={handleDecressItem}
                                className="text-xl px-2"
                            >
                                -
                            </button>
                            <span>{AddedItem}</span>
                            <button
                                onClick={handleIncressItem}
                                className="text-xl px-2"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Categorys;
