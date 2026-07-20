import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("portfolio", () => {
  beforeEach(() => localStorage.clear());

  it("presents the current professional positioning and featured work", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /software that survives contact with reality/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Neuro Companion" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Đồng Hành Scholarship" })).toBeInTheDocument();
    expect(screen.queryByText(/looking for internship/i)).not.toBeInTheDocument();
  });

  it("switches themes accessibly", () => {
    render(<App />);

    const toggle = screen.getByRole("button", { name: /switch to light theme/i });
    fireEvent.click(toggle);

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(screen.getByRole("button", { name: /switch to dark theme/i })).toBeInTheDocument();
  });
});
