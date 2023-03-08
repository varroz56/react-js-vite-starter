import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";

describe("NavBar", () => {
  test("renders navbar correctly", () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    // check elements
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    // check links
    const links = screen.getAllByRole("link");

    expect(links[0]).toHaveTextContent("Home");
    expect(links[0].getAttribute("href")).toBe("/");

    expect(links[1]).toHaveTextContent("Login");
    expect(links[1].getAttribute("href")).toBe("/login");
  });
});
