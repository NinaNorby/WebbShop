import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; 
import { MemoryRouter } from "react-router-dom"; 
import { ProductCard } from "./ProductCard";
import { mockProducts } from "../../Mocks/mockProducts"; 

describe("ProductCard component", () => {
  it("should display product title and price", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProducts[0]} />
      </MemoryRouter>
    );

    // Kontrollera titel och pris
    expect(screen.getByRole("link", { name: /christmas tree/i })).toBeInTheDocument();
    expect(screen.getByText("Price: 499 kr")).toBeInTheDocument();
  });

  it("should display an Add to Cart button", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProducts[0]} />
      </MemoryRouter>
    );

    // Kontrollera att "Add to Cart"-knappen visas
    const addToCartButton = screen.getByRole("button", { name: /add to cart/i });
    expect(addToCartButton).toBeInTheDocument();
  });

  it("should display the correct product image", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProducts[0]} />
      </MemoryRouter>
    );

    // Kontrollerar att bilden visas korrekt
    const image = screen.getByAltText("Christmas Tree");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://i.postimg.cc/Z53Lb5jv/insung-yoon-D0-FDd4-Ye-B08-unsplash.jpg"
    );
  });

  it("should navigate to the correct product detail page when title link is clicked", async () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProducts[0]} />
      </MemoryRouter>
    );

    // Kontrollerar att länken navigerar till rätt sida
    const titleLink = screen.getByRole("link", { name: /christmas tree/i });
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute("href", "/product/1");

    // Simulera klicket
    await userEvent.click(titleLink);

  });
});
