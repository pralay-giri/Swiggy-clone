import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should be cart link render in the header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByRole("link", { name: /cart/ });
    expect(cart).toBeInTheDocument();
});

it("Should be sign in link render in the header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const signinbtn = screen.getByText("sign in");
    fireEvent.click(signinbtn);
    const loginbtn = screen.getByText("log in");
    expect(loginbtn).toBeInTheDocument();
});
