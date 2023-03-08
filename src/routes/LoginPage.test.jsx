import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import LoginPage from "./LoginPage";

describe("Login Page", () => {
  test("renders Login Page correctly", () => {
    render(<LoginPage />, { wrapper: BrowserRouter });
    // check page content
    expect(screen.getByText("LoginPage")).toBeInTheDocument();
  });
});
