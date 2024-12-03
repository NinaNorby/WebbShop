import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { mockProducts } from "../../Mocks/mockProducts";

describe("HomePage component", () => {
  it("should render mock products", () => {
    render(
      <MemoryRouter>
        <HomePage products={mockProducts} />{" "}
        {/* Skickar in den  mockade produkter */}
      </MemoryRouter>
    );
    //kontrollerar att varje länk till produkterna visas korrekt på sidan
    mockProducts.forEach((product) => {
      // Verifierar länk (titel)
      expect(
        screen.getByRole("link", { name: new RegExp(product.title, "i") })
      ).toHaveAttribute("href", `/product/${product.id}`);

      // Verifierar att beskrivningen visas
      expect(
        screen.getByText(new RegExp(product.description, "i"))
      ).toBeInTheDocument();
    });
  });
  //Testar detta då själva HomePage komponenten inte har produkterna (HomePage, jag vill  säkerställa att HomePage endast överför props korrekt till Home. ) , utan det är Home-komponenten som har dessa i sin komponent. Därför ska det heller inte komma en text med "no products available", då detta sköts av min Home component
  it("should render Home component without any products", () => {
    render(
      <MemoryRouter>
        <HomePage products={[]} /> {/* Tom produktlista */}
      </MemoryRouter>
    );

    const noProductsMessage = screen.queryByText(/no products available/i);
    expect(noProductsMessage).toBeNull(); // Här verifieras att  det inte syns i HomePage komponenten
  });
});
