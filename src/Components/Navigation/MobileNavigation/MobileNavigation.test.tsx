import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";

describe("MobileNavigation component", () => {
  it("renders Home and Shopping cart links when menu is open", () => {
    render(
      <BrowserRouter>
        <MobileNavigation />
      </BrowserRouter>
    );

    // Kontrollera att länkar inte visas när menyn är stängd
    expect(screen.queryByText("Home")).not.toBeInTheDocument();
    expect(screen.queryByText("Shopping cart")).not.toBeInTheDocument(); 

 
  });
});
