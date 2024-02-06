import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { GoVerified } from "react-icons/go";
import { MdOutlineNotInterested } from "react-icons/md";

const UserProfile = ({ user, closeModal }) => {
    const { displayName, email, phoneNumber, photoURL, emailVerified } = user;

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "auto";
        };
    }, []);

    const onSignOutClick = () => {
        if (confirm("Are you sure to sign out!")) {
            signOut(auth);
            closeModal();
        }
    };

    return (
        <div className="fixed z-20 top-0 left-0 w-screen h-screen">
            <div className="py-3 px-3 relative z-10 w-3/12 ml-auto h-screen bg-white *:mt-5 text-gray-500 dark:bg-black dark:text-gray-300">
                <RxCross2
                    onClick={() => closeModal()}
                    className="text-2xl font-bold cursor-pointer hover:text-black transition-colors"
                />
                <div className="w-20 h-20  mx-auto border-2 border-gray-800 bg-gray-400 rounded-full overflow-hidden">
                    <img
                        src={photoURL}
                        width={100}
                        alt="avtar"
                        className="object-cover object-center"
                    />
                </div>
                <p className="text-lg text-center">
                    Hi,{" "}
                    <strong className="text-xl text-gray-500 dark:text-gray-300">
                        {displayName.split(" ")[0]}!
                    </strong>
                </p>
                <p className="text-lg text-center flex justify-center items-center gap-1">
                    {email}{" "}
                    <span>
                        {emailVerified ? (
                            <GoVerified className="text-green-500" />
                        ) : (
                            <MdOutlineNotInterested className="text-red-400" />
                        )}
                    </span>
                </p>
                <p className="text-lg">{phoneNumber}</p>
                <button
                    className="px-3 py-2 w-full bg-orange-400 text-white rounded-sm outline-none text-xl hover:bg-opacity-90 transition-all"
                    onClick={onSignOutClick}
                >
                    sign out
                </button>
            </div>
            <div className="absolute w-screen top-0 left-0 h-screen bg-gray-600 bg-opacity-55 dark:bg-gray-500 dark:bg-opacity-55"></div>
        </div>
    );
};

export default UserProfile;
