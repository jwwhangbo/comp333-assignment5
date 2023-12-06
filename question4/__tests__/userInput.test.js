import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";

import "@testing-library/jest-dom";

import SignIn from "../src/components/SignIn";

afterEach(() => cleanup());

describe("user input simulation", () => {
  test("simulates typing into the username input box", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );

    const input = getByRole("textbox", { name: "Username" });
    fireEvent.change(input, { target: { value: "PelumiTayo" } });
    expect(input.value).toBe("PelumiTayo");
  });
});
