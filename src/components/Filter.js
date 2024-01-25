import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Filter = (props) => {
    const { closeModal, config } = props;
    const [clickedSortConfig, setClickedSortConfig] = useState([
        ...config?.sortConfigs?.map((item) => item.title),
    ]);

    return (
        <div className="fixed inset-0 bg-[#0000007b] flex items-center justify-center">
            <div className="mt-10 p-5 w-[50%] h-[65%] bg-white dark:bg-gray-900 dark:*:text-white rounded-md overflow-hidden">
                <div className="p-2 mb-2 flex items-center justify-between border-b-2">
                    <h1 className="text-2xl font-bold">Filter</h1>
                    <RxCross2
                        className="text-2xl font-bold cursor-pointer hover:opacity-70"
                        onClick={() => {
                            closeModal();
                        }}
                    />
                </div>
                <div className="flex gap-5 h-[90%] overflow-hidden">
                    <div className="w-[30%] border-r-2">
                        <ul className="p-2 overflow-auto h-[100%] *:h-[50px] *:m-1 *:rounded-lg *:text-xl *:flex *:items-center *:justify-center *:font-semibold *:text-[var(--base-deep-color)]">
                            <li
                                className="hover:opacity-70 cursor-pointer dark:text-white"
                                onClick={() => {
                                    setClickedSortConfig(() => {
                                        return [
                                            ...config?.sortConfigs.map(
                                                (item) => item.title
                                            ),
                                        ];
                                    });
                                }}
                            >
                                Sort
                            </li>
                            {config?.facetList?.map((item, index) => {
                                return (
                                    <li
                                        className="hover:opacity-70 cursor-pointer dark:text-white"
                                        key={index}
                                        onClick={() => {
                                            setClickedSortConfig(() => {
                                                return [
                                                    ...item?.facetInfo?.map(
                                                        (data) => data.label
                                                    ),
                                                ];
                                            });
                                        }}
                                    >
                                        {item.label}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="ml-0 w-[70%]">
                        <ul className="p-2 overflow-auto h-[100%] *:h-[50px] *:m-1 *:rounded-lg *:text-lg *:flex *:items-center *:text-[var(--base-color)]">
                            {clickedSortConfig.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="hover:opacity-70 transition-opacity cursor-pointer dark:text-white"
                                    >
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
