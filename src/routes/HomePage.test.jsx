import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";

describe("Home Page", () => {
  test("renders Home Page correctly", () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    // check page content
    expect(screen.getByText("HomePage")).toBeInTheDocument();
  });
});
