import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App component", () => {
  it("should have a correct heading", () => {
    render(<App />);

    const heading = screen.getByRole("heading", {
      name: /The Holiday Cabin Shop/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
