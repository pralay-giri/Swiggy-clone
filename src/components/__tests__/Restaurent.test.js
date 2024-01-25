import { fireEvent, render, screen } from "@testing-library/react";
import Restaurent from "../Restaurent";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import axios from "axios";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import Header from "../Header";
import Cart from "../Cart";
import SINGLE_RESTAURENT from "../mocks/singleRestaurent.json";

jest.mock("axios");
jest.mock("../../media/emptyCart.png");
describe("Restaurent component", () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({ data: SINGLE_RESTAURENT });
    });

    it("Should catagory render in the Restaurent component", async () => {
        await act(async () => {
            render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <Restaurent />
                    </BrowserRouter>
                </Provider>
            );
        });
        const catagorys = screen.getAllByTestId("catagorys");
        expect(catagorys.length).toBe(11);
        expect(catagorys[0]).toBeInTheDocument();
    });

    it("Should the catagorys render in the reataurent component", async () => {
        await act(async () => {
            render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <Restaurent />
                    </BrowserRouter>
                </Provider>
            );
        });

        const Margherita_Pizza = screen.getAllByText("Margherita Pizza");
        expect(Margherita_Pizza[0]).toBeInTheDocument();
    });

    it("Should all the catagory render in the Reataurent component", async () => {
        await act(async () => {
            render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <Restaurent />
                    </BrowserRouter>
                </Provider>
            );
        });

        const catagory = screen.getAllByTestId("catagory");
        expect(catagory[0]).toBeInTheDocument();
    });

    it("Should add button changed when i click to the add button", async () => {
        await act(async () => {
            render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <Restaurent />
                    </BrowserRouter>
                </Provider>
            );
        });

        const addButton = screen.getAllByTestId("addButton");
        expect(addButton[0]).toBeInTheDocument();
        await act(async () => {
            fireEvent.click(addButton[0]);
        });
        const minusBtn = screen.getAllByText("-");
        expect(minusBtn[0]).toBeInTheDocument();
    });

    it("Should Header's card is changed when i click to the item add btn", async () => {
        await act(async () => {
            render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <Header />
                        <Restaurent />
                        <Cart />
                    </BrowserRouter>
                </Provider>
            );
        });

        const addButton = screen.getAllByTestId("addButton");
        await act(async () => {
            fireEvent.click(addButton[0]);
        });

        const cartItem = screen.getAllByTestId("cartItem");
        expect(cartItem[0]).toBeInTheDocument();

        // its 2 because jest run in a global context one click for the upper test one for this click
        expect(cartItem.length).toBe(2);
    });
});
