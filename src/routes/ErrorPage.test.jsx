import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import ErrorPage from "./ErrorPage";

describe("Error Page", () => {
  test("renders error message correctly", () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });
    // check page content
    const headingElement = screen.getByText(/Oops!/i);
    expect(headingElement).toBeInTheDocument();
    const errorMessage = screen.getByRole("heading", { level: 2 });
    expect(errorMessage).toHaveTextContent(
      "Sorry, an unexpected error has occurred."
    );
  });
  test("renders back to home link correctly", () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });
    const homeLink = screen.getByRole("link");
    expect(homeLink).toHaveTextContent("Back to Homepage");
  });
});
