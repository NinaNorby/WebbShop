import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";


//TEST FÖR HEADING 
describe("App component", () => {
  it("should render the correct heading", () => {
    render(<App />);

    const heading = screen.getByRole("heading", {
      name: /The Holiday Cabin Shop/i,
    });
    expect(heading).toBeInTheDocument();
  });

  //TEST FÖR NAVLINK
  it("should render the navigation bar with links", () => {
    render(<App />);

    // Kontrollera att navigationslänkarna finns
    const homeLink = screen.getByRole("link", { name: /home/i });
    const cartLink = screen.getByRole("link", { name: /shopping cart/i });

    expect(homeLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });


  //TETST FÖR FOOTER
  it("should render the footer with a coptright sybole and the current year", () => {
    render(<App />);

    const footer = screen.getByText((content, element) => {
      return (
        content.includes("©") &&
        content.includes("2024") &&
        //  kontrollerar om det finns ett <p>-element.
        element?.tagName.toLowerCase() === "p"
      );
    });
    expect(footer).toBeInTheDocument();
  });
  
  
});
