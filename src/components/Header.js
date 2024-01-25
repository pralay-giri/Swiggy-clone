import React, { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { BsChevronDown, BsListNested } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { HiComputerDesktop } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import changeTheme from "../utils/changeTheme";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";

const Header = () => {
    const [isThemeManuVisible, setIsThemeManuVisible] = useState(false);
    const [signin, setSignIn] = useState("sign in");

    // subscribing the slice
    const cart = useSelector((store) => store.cart.cartItems);

    return (
        <div className="sticky z-[999] top-0 flex justify-between px-10 py-2 bg-white dark:border-b  shadow-lg items-center dark:bg-black dark:text-[#f0f0f0] transition-all">
            <div className="w-16 mr-2">
                <Link to="/">
                    <svg
                        class="_8pSp-"
                        viewBox="0 0 559 825"
                        height="49"
                        width="34"
                        fill="#fc8019"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                            fill="url(#paint0_linear_19447_66107)"
                        ></path>
                        <defs>
                            <linearGradient
                                id="paint0_linear_19447_66107"
                                x1="445.629"
                                y1="63.8626"
                                x2="160.773"
                                y2="537.598"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#FF993A"></stop>
                                <stop offset="1" stop-color="#F15700"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </Link>
            </div>
            <div className="items-center mr-auto gap-2 relative flex group cursor-pointer">
                <div className="relative group-hover:text-orange-400 transition-all">
                    <span className="font-bold after:content-[''] after:absolute after:inset-0 after:border-b-2 after:border-b-white group-hover:after:border-b-orange-400">
                        kolkata
                    </span>
                </div>
                <span className="">kolkata, west bengal, india</span>
                <BsChevronDown className="" />
            </div>
            <ul className="*:text-lg top-0 right-0 p-6 text-black backdrop-blur-lg flex  gap-10 dark:bg-black dark:text-white">
                <li>
                    <div className="flex itesms-center">
                        <MdDarkMode
                            className="text-2xl hover:text-orange-400 cursor-pointer transition-colors dark:hidden"
                            onClick={() => {
                                setIsThemeManuVisible((prev) => !prev);
                            }}
                        />
                        <MdLightMode
                            className="text-2xl hover:text-orange-400 cursor-pointer transition-colors hidden dark:block"
                            onClick={() => {
                                setIsThemeManuVisible((prev) => !prev);
                            }}
                        />
                        {isThemeManuVisible && (
                            <div className="absolute p-2 bg-white top-24 shadow-lg border border-gray-500 rounded-lg flex flex-col gap-2 *:flex *:text-lg transition-all dark:bg-black dark:text-white">
                                <button
                                    className="hover:bg-gray-200 rounded p-1 text-inherit dark:hover:bg-white dark:hover:text-black"
                                    onClick={() => {
                                        changeTheme("dark");
                                        setIsThemeManuVisible(false);
                                    }}
                                >
                                    <MdDarkMode className="text-2xl cursor-pointer" />
                                    Dark
                                </button>
                                <button
                                    className="hover:bg-gray-200 rounded p-1 text-inherit dark:hover:text-black"
                                    onClick={() => {
                                        changeTheme("light");
                                        setIsThemeManuVisible(false);
                                    }}
                                >
                                    <MdLightMode className="text-2xl cursor-pointer " />
                                    Light
                                </button>
                                <button
                                    className="hover:bg-gray-200 rounded p-1 text-inherit dark:hover:text-black"
                                    onClick={() => {
                                        changeTheme("system");
                                        setIsThemeManuVisible(false);
                                    }}
                                >
                                    <HiComputerDesktop className="text-2xl  cursor-pointer " />
                                    System
                                </button>
                            </div>
                        )}
                    </div>
                </li>
                <li>
                    <NavLink
                        to="/search"
                        className={({ isActive }) =>
                            isActive ? "navLink text-orange-400" : "navLink"
                        }
                    >
                        <CiSearch className="text-2xl" />
                        <span>search</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/offers"
                        className={({ isActive }) =>
                            isActive ? "navLink text-orange-400" : "navLink"
                        }
                    >
                        <BiSolidOffer className="text-2xl" />
                        <span>offers</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/support"
                        className={({ isActive }) =>
                            isActive ? "navLink text-orange-400" : "navLink"
                        }
                    >
                        <FiHelpCircle className="text-2xl" />
                        <span>help</span>
                    </NavLink>
                </li>
                <li>
                    <div className="navLink cursor-pointer">
                        <CgProfile className="text-2xl" />
                        <span
                            onClick={() => {
                                setSignIn((prev) => {
                                    return prev === "sign in"
                                        ? "log in"
                                        : "sign in";
                                });
                            }}
                        >
                            {signin}
                        </span>
                    </div>
                </li>
                <li>
                    <NavLink
                        to="/checkout"
                        className={({ isActive }) =>
                            isActive ? "navLink text-orange-400" : "navLink"
                        }
                    >
                        <div className="relative">
                            <span className="absolute -top-1 left-[50%] text-orange-500">
                                {cart.length !== 0 && <GoDotFill />}
                            </span>
                            <CiShoppingCart className="text-2xl" />
                        </div>
                        <span>cart</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;
