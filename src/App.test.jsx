import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  test("should work as expected", () => {
    expect(Math.sqrt(4)).toBe(2);
  });
  test("renders my app heading correctly", () => {
    render(<App />);
    const headingElement = screen.getByText(/my app/i);
    expect(headingElement).toBeInTheDocument();
  });
  test("renders click me button", () => {
    render(<App />);
    const clickMeButtonElement = screen.getByText(/Click me!/i);
    expect(clickMeButtonElement).toBeInTheDocument();
  });
  test("renders click me button correctly after click", async () => {
    render(<App />);
    const clickMeButtonElement = screen.getByText(/click Me!/i);
    expect(clickMeButtonElement).toBeInTheDocument();
    await userEvent.click(clickMeButtonElement);

    expect(screen.getByRole("button")).toHaveTextContent(
      "Great, you clicked me!"
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
