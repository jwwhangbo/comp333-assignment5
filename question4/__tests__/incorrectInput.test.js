import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";

import "@testing-library/jest-dom";

import SignIn from "../src/components/SignIn";

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
    expect(input.value).not.toBe("PelumiT");
  });
  test("Username length validation", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    ); 

    const input = getByRole("textbox", { name: "Username" });
    fireEvent.change(input, { target: { value: "" } });

    const signInButton = screen.getByTestId("signin-button");

    fireEvent.click(signInButton);

    expect(
      screen.getByText("Please enter a valid username.")
    ).toBeInTheDocument();
  });
});
