import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom"; // MemoryRouter används hät för att ge en kontext under tester
import { HomePage } from "./HomePage";

// Mockar fetchProducts globalt för att simulera API-svar under tester, även om det går att göra på ett annat sätt, så löste jag det då jag har haft problem med denna delen 
vi.mock("../../Utilities/fetchProducts", () => ({
  fetchProducts: vi.fn().mockResolvedValue([
    {
      id: 1,
      title: "Christmas Tree",
      description: "Beautiful artificial Christmas tree.",
      price: 499,
      inStock: 10,
      imageUrl:
        "https://i.postimg.cc/Z53Lb5jv/insung-yoon-D0-FDd4-Ye-B08-unsplash.jpg",
    },
    {
      id: 2,
      title: "Christmas Lights",
      description: "Warm LED Christmas lights.",
      price: 199,
      inStock: 20,
      imageUrl:
        "https://i.postimg.cc/dtDZ22Nc/david-angel-Bwh-Cs4e-WPR4-unsplash.jpg",
    },
  ]),
}));

describe("HomePage component", () => {
  it("should display the heading 'Välkommen!'", async () => {
      render(
        //Jag behöver denna delen då ProductList använder en Link-komponenter. Enligt sökt material så sägs " När en Link används utan att omges av en router, uppstår ett fel (basename osv ) 
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

   // Använder waitFor tills rubriken "Välkommen!" är synlig i dom:en 
    await waitFor(() => {
      const heading = screen.getByRole("heading", { name: /välkommen/i });
      expect(heading).toBeInTheDocument();
    });
  });
});
