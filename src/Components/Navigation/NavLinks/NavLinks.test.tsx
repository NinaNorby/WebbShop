import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import NavLinks from "./NavLinks";
import { vi } from "vitest";

describe("NavLinks component", () => {
  it("should render links with correct text and routes", () => {
    render(
      <MemoryRouter>
        <NavLinks />
      </MemoryRouter>
    );

    // Kontrollera att länken till "Home" finns
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    // Kontrollera att länken till "Shopping cart" finns
    const shoppingCartLink = screen.getByRole("link", { name: /shopping cart/i });
    expect(shoppingCartLink).toBeInTheDocument();
    expect(shoppingCartLink).toHaveAttribute("href", "/cart");
  });

  it("should call the onClick function when a link is clicked", async () => {
    const mockOnClick = vi.fn(); // Mocka onClick-funktionen

    render(
      <MemoryRouter>
        <NavLinks onClick={mockOnClick} />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: /home/i });

    // Simulera ett klick på länken
    await userEvent.click(homeLink);

    // Kontrollera att mockOnClick anropades
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
