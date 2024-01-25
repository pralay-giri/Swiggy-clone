import React from "react";
import { useState } from "react";
import { SiSwiggy } from "react-icons/si";
import useFetchInitial from "../utils/useFetchInitial";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

const Footer = () => {
    const [isAllCityVisible, setIsAllCityVisible] = useState(false);

    const { allCitys } = useFetchInitial();

    return (
        <div className="bg-black text-white dark:border-t">
            <div className="py-10 flex justify-center gap-10">
                <div className="branding">
                    <div className="flex gap-2 m-2 items-center ">
                        <Link to="/">
                            <SiSwiggy className="text-5xl" />
                        </Link>
                        <span className="text-2xl capitalize font-bold">
                            swiggy
                        </span>
                    </div>
                    <p className="text-gray-400">
                        © 2023 Bundl Technologies Pvt. Ltd
                    </p>
                </div>
                <div className="company *:text-gray-400 ">
                    <ul className="*:h-10">
                        <li className="hover:text-orange-400">
                            <h1 className="title text-2xl font-bold text-white">
                                Company
                            </h1>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="company-options">
                                About
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="company-options">
                                Careers
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="company-options">
                                Team
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="company-options">
                                Swiggy One
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="company-options">
                                Swiggy Instamart
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="company-options">
                                Swiggy Genie
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="contact *:text-gray-400">
                    <ul className="*:h-10">
                        <li className="hover:text-orange-400">
                            <h1 className="title text-2xl font-bold text-white ">
                                Contact us
                            </h1>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="contact-options">
                                Help & support
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="contact-options">
                                Partner with us
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="contact-options">
                                Ride with us
                            </a>
                        </li>
                    </ul>
                    <ul className="*:h-10">
                        <li className="hover:text-orange-400">
                            <h1 className="title text-2xl font-bold text-white">
                                Legal
                            </h1>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="contact-options">
                                Terms & Conditons
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="contact-options">
                                Cookie policy
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="contact-options">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="delivery *:text-gray-400">
                    <ul className="*:h-10">
                        <li className="hover:text-orange-400">
                            <h1 className="title text-2xl font-bold text-white">
                                We delivery to
                            </h1>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="delivery-options">
                                Bangalore
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="delivery-options">
                                Gurgaon
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="delivery-options">
                                Hyderabad
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="delivery-options">
                                Delhi
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="delivery-options">
                                Mumbai
                            </a>
                        </li>
                        <li className="hover:text-orange-400">
                            <a href="#" className="delivery-options">
                                Pune
                            </a>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setIsAllCityVisible((prev) => !prev);
                                }}
                                className="delivery-options  px-3 py-2 border rounded-lg hover:bg-white hover:text-black  focus-visible:outline-orange-400 flex items-center gap-1"
                            >
                                559 cities
                                {isAllCityVisible ? (
                                    <FaChevronUp />
                                ) : (
                                    <FaChevronDown />
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {isAllCityVisible && (
                <div className="px-[10%] border-t py-5">
                    <h2 className="font-bold text-xl">
                        Other cities that we deliver:
                    </h2>
                    <div className="flex flex-wrap *:w-[25%] *:text-[#f0f0f0] my-2">
                        {allCitys.map((item) => {
                            return (
                                <Link
                                    key={item.text}
                                    to={item.link}
                                    className="text-[#f0f0f0] hover:text-orange-400"
                                >
                                    <p>{item?.text}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
export default Footer;
