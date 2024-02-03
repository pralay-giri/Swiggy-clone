import React, { useEffect, useRef, useState } from "react";
import useSearcHook from "../utils/useSearcHook";
import { RxCross1 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { IoChevronBackSharp } from "react-icons/io5";
import SearchItem from "./SearchItem";
import ShowResult from "./ShowResult";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showAllResult, setShowAllResult] = useState(false);
    const inputRef = useRef(null);

    const { handleQueryChange, searchData, isLoadding } =
        useSearcHook(searchQuery);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        handleQueryChange(e);
    };

    return (
        <div className="max-w-[65%] min-h-[100vh] mx-auto p-10 dark:text-white">
            <div className="mb-2 flex items-center w-[100%] border border-[#adadad] rounded-md overflow-hidden focus-within:shadow-md">
                {showAllResult && (
                    <IoChevronBackSharp
                        className="m-2 text-2xl font-semibold text-inherit transition-all cursor-pointer"
                        onClick={() => setShowAllResult(false)}
                    />
                )}
                <input
                    data-testid="searchInput"
                    className="w-full h-[100%] text-lg text-[var(--base-color)] focus-visible:outline-none py-2 px-2"
                    value={searchQuery}
                    type="text"
                    onChange={handleSearch}
                    ref={inputRef}
                    placeholder="search dish or restaurent"
                />
                <button className="w-fit p-2 text-xl font-bold">
                    {searchQuery.length === 0 ? (
                        <IoSearchOutline
                            className="cursor-pointer"
                            onClick={() => {
                                inputRef.current.focus();
                            }}
                        />
                    ) : (
                        <RxCross1
                            className="cursor-pointer"
                            onClick={() => {
                                setSearchQuery("");
                            }}
                        />
                    )}
                </button>
            </div>
            {isLoadding ? <p>loadding</p> : null}
            {showAllResult ? (
                <ShowResult query={searchQuery} />
            ) : (
                <div className="">
                    <div className="">
                        {searchData &&
                            searchData.suggestions.map((suggestion) => {
                                return (
                                    <SearchItem
                                        key={suggestion.text}
                                        item={suggestion}
                                    />
                                );
                            })}
                    </div>
                    {searchData && (
                        <div
                            className="flex items-center gap-2 hover:bg-[#f2f6fc] my-2 cursor-pointer transition-all rounded-md overflow-hidden dark:text-white group"
                            onClick={() => setShowAllResult(true)}
                        >
                            <IoSearchOutline className="text-4xl m-3  rounded-sm text-[var(--base-color)] border" />
                            <p className="text-[var(--base-color)]">
                                see all result for{" "}
                                <span className="text-[var(--base-deep-color)] text-lg font-semibold">
                                    {" "}
                                    '{searchQuery}'
                                </span>
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;
