import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toogleSignContainer, setUserData } from "../redux/slices/userSlice";
import { FcGoogle } from "react-icons/fc";
import {
    DEFAULT_PROFILE,
    REGX_FOR_MOBILE_DEVICE,
    SIGNIN_LOGO_CDN,
    USER_AGENT,
} from "../utils/constants";
import {
    signInWithPopup,
    signInWithRedirect,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { validateData } from "../utils/validator";

const Authantication = () => {
    const dispatch = useDispatch();
    const [gmail, setGmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [signUpModal, setSignUpModal] = useState(false);
    const [inputFieldError, setInputFieldError] = useState("");
    const [isSimleLogInBtnLoadding, setIsSimleLogInBtnLoadding] =
        useState(false);
    const [isGogleLogInBtnIsLoadding, setGogleLogInBtnIsLoadding] =
        useState(false);

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "auto";
        };
    }, []);

    const handleToogle = () => {
        setSignUpModal((prev) => !prev);
        setInputFieldError("");
    };

    const handleGoogleAuth = async (e) => {
        setGogleLogInBtnIsLoadding(true);
        e.preventDefault();

        if (REGX_FOR_MOBILE_DEVICE.test(USER_AGENT)) {
            // it's for redirect for mobile device
            signInWithRedirect(auth, provider);
        } else {
            try {
                await signInWithPopup(auth, provider);
            } catch (error) {
                setGogleLogInBtnIsLoadding(false);
            } finally {
                setGogleLogInBtnIsLoadding(false);
            }
        }
    };

    const handleEmailPasswordAuth = async (e) => {
        e.preventDefault();
        setIsSimleLogInBtnLoadding(true);
        const isNotValid = validateData(gmail, password);
        if (isNotValid) {
            setInputFieldError(isNotValid);
            setIsSimleLogInBtnLoadding(false);

            return;
        }

        try {
            if (signUpModal) {
                // sign up
                await createUserWithEmailAndPassword(auth, gmail, password);
                await updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: DEFAULT_PROFILE,
                });

                const {
                    displayName,
                    email,
                    phoneNumber,
                    photoURL,
                    uid,
                    emailVerified,
                } = auth.currentUser;
                dispatch(
                    setUserData({
                        displayName,
                        email,
                        phoneNumber,
                        photoURL,
                        uid,
                        emailVerified,
                    })
                );
            } else {
                // sign in
                await signInWithEmailAndPassword(auth, gmail, password);
            }
        } catch (error) {
            setInputFieldError("user not found");
            setIsSimleLogInBtnLoadding(false);
        } finally {
            setIsSimleLogInBtnLoadding(false);
        }
    };

    return (
        <div className=" fixed z-20 top-0 left-0 w-screen h-screen *:transition-colors">
            <div className="relative z-30 bg-white w-4/12 h-[100%] ml-auto p-10 px-12 animate-fade dark:bg-[#161A30]">
                <div>
                    <RxCross2
                        onClick={() => dispatch(toogleSignContainer())}
                        className="text-xl font-bold cursor-pointer"
                    />
                    <div className="flex items-center gap-5 my-5 ">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
                                {signUpModal ? "SignUp" : "Login"}
                            </h1>
                            <span
                                onClick={handleToogle}
                                className="text-orange-500 font-semibold cursor-pointer hover:underline"
                            >
                                {signUpModal
                                    ? "already have an account"
                                    : "or create an acount"}
                            </span>
                        </div>
                        <div className="ml-auto">
                            <img src={SIGNIN_LOGO_CDN} alt="img" width={100} />
                        </div>
                    </div>
                </div>
                <form className="flex flex-col mx-auto gap-4">
                    {signUpModal && (
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="enter user name"
                            className="px-3 py-2 bg-gray-400 text-white placeholder:text-white rounded-sm focus-visible:outline-gray-600"
                        />
                    )}
                    <input
                        type="text"
                        placeholder="enter your email"
                        value={gmail}
                        onChange={(e) => setGmail(e.target.value)}
                        className="px-3 py-2 bg-gray-400 text-white placeholder:text-white rounded-sm focus-visible:outline-gray-600"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        className="px-3 py-2 bg-gray-400 text-white placeholder:text-white rounded-sm focus-visible:outline-gray-600"
                    />

                    {inputFieldError && (
                        <p className="text-red-500 text-sm font-semibold">
                            {inputFieldError}
                        </p>
                    )}
                    <button
                        className="px-3 py-2 bg-orange-400 text-white rounded-sm outline-none text-xl hover:bg-opacity-90"
                        onClick={handleEmailPasswordAuth}
                    >
                        {isSimleLogInBtnLoadding
                            ? "loadding..."
                            : "let's begin"}
                    </button>
                    <span className=" text-center text-black font-semibold dark:text-white">
                        or
                    </span>
                    <button
                        className="flex items-center gap-1 justify-center px-3 py-2 bg-[#040D12] text-white rounded-sm outline-none text-lg hover:bg-opacity-90"
                        onClick={handleGoogleAuth}
                    >
                        {isGogleLogInBtnIsLoadding ? (
                            "loadding..."
                        ) : (
                            <React.Fragment>
                                <span>login with </span>
                                <FcGoogle />
                            </React.Fragment>
                        )}
                    </button>
                </form>
            </div>
            <div className="absolute w-screen top-0 left-0 h-screen bg-gray-600 bg-opacity-55 dark:bg-white]"></div>
        </div>
    );
};

export default Authantication;
