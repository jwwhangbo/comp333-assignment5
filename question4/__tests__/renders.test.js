import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import SignIn from "../src/components/SignIn";
import SignUp from "../src/components/SignUp";

afterEach(() => cleanup());

describe("components rendering", () => {
  test("signin: input fields rendering", () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );

    const inputField = screen.getByRole("textbox");;
    expect(inputField).toBeInTheDocument();
  });
  test("register: input fields rendering", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });
});

