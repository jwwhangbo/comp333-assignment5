import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import App from "../src/components/App";

afterEach(() => cleanup());

describe("links functioning", () => {
    test("signin link functioning", () => {
        render(<App />)

        const link = screen.getByText("Sign In");
        fireEvent.click(link);
        const contact = screen.getByRole("heading");
        expect(contact.textContent).toStrictEqual("Sign In");
        expect(contact).toBeInTheDocument();
    });
});