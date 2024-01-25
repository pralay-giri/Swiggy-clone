import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Card from "../Card";
import RESTARENT_MOCK_DATA from "../mocks/restaurentMock.json";
import { withPromoted } from "../Card";

it("Should card render the restaurent name component in the Body component", () => {
    render(<Card card={RESTARENT_MOCK_DATA} />);
    const name = screen.getByText("Wow! Momo");
    expect(name).toBeInTheDocument();
});

it("Should promoted card redner in the Body", () => {
    const PromotedComp = withPromoted(Card);
    render(<PromotedComp card={RESTARENT_MOCK_DATA} />);
    const name = screen.getByText("Wow! Momo");
    expect(name).toBeInTheDocument();
});
