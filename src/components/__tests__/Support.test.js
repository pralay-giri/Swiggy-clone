import React from "react";
import { render, screen } from "@testing-library/react";
import Support from "../Support";
import "@testing-library/jest-dom";

// unit testing

//it and test is same
//describe grouped the same type/componet of test cases
// in a discribe function you can pass multiple test cases

describe("suppotrt component test casese", () => {
    it("should header is loadded in the Support component", () => {
        render(<Support />);
        const header = screen.getAllByRole("heading");

        // asertion
        expect(header.length).toBe(1);
    });

    it("should artical in the Support component", () => {
        render(<Support />);
        const artical = screen.getByRole("article");

        expect(artical).toBeInTheDocument();
    });

    test("should paragraph render in the component", () => {
        render(<Support />);
        const paragraph = screen.getAllByText("hello");
        expect(paragraph[0]).toBeInTheDocument();
    });
});
