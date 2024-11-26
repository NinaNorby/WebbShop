import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { HomePage } from "./HomePage";
import { mockProducts } from "../../Mocks/mockProducts";

describe("HomePage component", () => {
  it("should render mock products", () => {
    render(
      <MemoryRouter>
        <HomePage products={mockProducts} /> {/* Skickar in de  mockade produkterna */}
      </MemoryRouter>
    );

    mockProducts.forEach((product) => {
      // Verifiera länk (titel)
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
