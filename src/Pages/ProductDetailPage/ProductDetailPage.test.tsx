import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import { ProductDetailPage } from "./ProductDetailPage";

describe("ProductDetailPage component", () => {
  it("should render the ProductDetail component", () => {
    render(
      <MemoryRouter>
        <ProductDetailPage />
      </MemoryRouter>
    );

  });
});
