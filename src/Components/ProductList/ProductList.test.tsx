import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import { ProductList } from "./ProductList";
import { IProduct } from "../../Models/IProduct";

const mockProducts: IProduct[] = [
  {
    id: 1,
    title: "Christmas Tree",
    description: "Beautiful artificial Christmas tree.",
    price: 499,
    imageUrl: "https://i.postimg.cc/Z53Lb5jv/insung-yoon-D0-FDd4-Ye-B08-unsplash.jpg",
    inStock: 10,
  },
  {
    id: 2,
    title: "Christmas Lights",
    description: "Warm LED Christmas lights.",
    price: 199,
    imageUrl: "https://i.postimg.cc/dtDZ22Nc/david-angel-Bwh-Cs4e-WPR4-unsplash.jpg",
    inStock: 20,
  },
];

describe("ProductList component", () => {
  it("should display a list of products", () => {
    // Wrappar komponenten med MemoryRouter
    render(
      <MemoryRouter>
        <ProductList products={mockProducts} />
      </MemoryRouter>
    );

    // Kontrollerar att produkttitlarna visas
    expect(screen.getByText("Christmas Tree")).toBeInTheDocument();
    expect(screen.getByText("Christmas Lights")).toBeInTheDocument();
  });
});
