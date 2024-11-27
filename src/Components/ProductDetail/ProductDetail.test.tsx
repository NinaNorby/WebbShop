import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import ProductDetail from "./ProductDetail";
import { mockProducts } from "../../Mocks/mockProducts";


//* Den här "mockfunktionen" används för att jag vill simulera olika scenarier när man hämtar produkter. Produkt finns, Produkt finns ej , samt fel url
// vi.mock använder jag för att ersätta den faktiska fetch-funktionen.
vi.mock("../../Utilities/fetch", () => ({
  //vi.fn är återigen en Vitest funktion som tar in en sträng
  default: vi.fn((url: string) => {
    //KOllar om api anropet innehåller api/products
    if (url.includes("/api/products/")) {
      // reguljär uttrycksmatchning för atthämta produkt + id / nummer  (hämtat från stackoverflow )
      const productIdMatch = url.match(/\/api\/products\/(\d+)/);
      //Om man hiittar en produkt som stämmer  med rätt url så hämtar man den korrekra id:et på produkten
      if (productIdMatch) {
        const productId = parseInt(productIdMatch[1], 10);

        const product = mockProducts.find((p) => p.id === productId);
        // Om man hittar produkten i den mockade datan så returneras en promise med ett objekt som motsvaar ett  lyckat anrop
        if (product) {
          return Promise.resolve({
            ok: true,
            // simulerar JSON-responsen
            json: async () => ({ result: product }),
          });
        }
        // Returnera en 404-respons för icke-existerande produkter
        return Promise.resolve({
          ok: false,
          status: 404,
          json: async () => ({ message: "Product not found" }),
        });
      }
    }
    // Returnera en generisk misslyckad respons för andra URL:er
    return Promise.resolve({
      ok: false,
      status: 404,
      json: async () => ({ message: "Not found" }),
    });
  }),
}));

describe("ProductDetail Component", () => {
  it("should render product details correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Vänta tills produktdata har laddats
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Christmas Tree" })
      ).toBeInTheDocument();
    });

    expect(
      screen.getByText(/beautiful artificial christmas tree/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/price:\s*499\s*kr/i)).toBeInTheDocument();
    expect(screen.getByText(/in stock:\s*10/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add to Cart" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Christmas Tree" })).toHaveAttribute(
      "src",
      "https://i.postimg.cc/Z53Lb5jv/insung-yoon-D0-FDd4-Ye-B08-unsplash.jpg"
    );
  });

  it("should handle errors when product is not found", async () => {
    render(
      <MemoryRouter initialEntries={["/products/999"]}>
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Failed to fetch product details.")).toBeInTheDocument();
    });

    expect(screen.queryByText("Add to Cart")).not.toBeInTheDocument();
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});