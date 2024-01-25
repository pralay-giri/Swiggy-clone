import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Search from "../Search";
import { act } from "react-dom/test-utils";
import SEARCH_MOCK_DATA from "../mocks/searchMock.json";
import axios from "axios";

jest.mock("axios");
describe("Search compoent testing", () => {
    it("Should the search input box rendered", async () => {
        await act(async () => {
            render(<Search />);
        });
        const inputBox = screen.getByTestId("searchInput");
        expect(inputBox).toBeInTheDocument();
    });

    it("Should the search functionality work", async () => {
        // rewriting the gunction to resolve data to my component
        axios.get.mockResolvedValue({ data: { data: SEARCH_MOCK_DATA } });

        // rendering the component Search will changed by state so we need to use act function
        await act(async () => {
            render(<Search />);
        });

        // accessing the inptbox useing testId from the dom
        const inputBox = screen.getByTestId("searchInput");

        // when we change the state using the change event the state will change so we need to use act
        await act(async () => {
            fireEvent.change(inputBox, { target: { value: "burger" } });
        });

        const searchItem = screen.getAllByTestId("searchItem");
        console.log(searchItem.length);

        // assertion or expection
        expect(searchItem.length).toBe(10);

        // number of call's of hte mock function
        expect(axios.get.mock.calls).toHaveLength(2);
    });
});
