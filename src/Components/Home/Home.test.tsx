import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // För att hantera routing-komponenter
import { describe, it, expect } from "vitest";
import { Home } from "./Home";
import { mockProducts } from "../../Mocks/mockProducts";

describe("Home component", () => {
  it("should display the heading 'Welcome!'", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { name: /Welcome/i });
    expect(heading).toBeInTheDocument();
  });

  it("should display mock products in ProductList", () => {
    render(
      <MemoryRouter>
        <Home products={mockProducts} /> {/* Skicka in mockade produkter */}
      </MemoryRouter>
    );

    mockProducts.forEach((product) => {
      // Verifiera länken (titelN)
      expect(
        screen.getByRole("link", { name: new RegExp(product.title, "i") })
      ).toHaveAttribute("href", `/product/${product.id}`);

      // Verifiera beskrivning
      expect(
        screen.getByText(new RegExp(product.description, "i"))
      ).toBeInTheDocument();
    });
  });
});
