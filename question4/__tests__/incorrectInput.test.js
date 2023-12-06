import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";

import "@testing-library/jest-dom";

import SignIn from "../src/components/SignIn";
import SignUp from "../src/components/SignUp";

afterEach(() => cleanup());

describe("Incorrect values", () => {
  test("simulates typing into the username should expect the incorrect value", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );

    const input = getByRole("textbox", { name: "Username" });
    fireEvent.change(input, { target: { value: "PelumiTayo" } });
    expect(input.value).toBe("PelumiT");
  });
  test("register: alert should not render on the screen", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const inputField = screen.getByRole("alert");
    expect(inputField).toBeInTheDocument();
  });
});
