import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import Root from "./Root";

// https://testing-library.com/docs/example-react-router/

describe("Root component", () => {
  test("Root rendering, navigating", async () => {
    render(<Root />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    // verify page content for default route
    // Navbar
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    // HomePage
    expect(screen.getByText("HomePage")).toBeInTheDocument();

    // verify page content for expected route after navigating
    // LoginPage
    await user.click(screen.getByText(/login/i));
    expect(screen.getByText("LoginPage")).toBeInTheDocument();
    // Back to HomePage
    await user.click(screen.getByText(/home/i));
    expect(screen.getByText("HomePage")).toBeInTheDocument();
  });
  test("landing on a bad page", () => {
    const badRoute = "/some/bad/route";

    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Root />
      </MemoryRouter>
    );

    // verify navigation to Error Page
    expect(
      screen.getByText(/Sorry, an unexpected error has occurred./i)
    ).toBeInTheDocument();
  });
});
