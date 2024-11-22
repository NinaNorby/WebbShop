import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DesktopNavigation from "./DesktopNavigation";


describe("DesktopNavigation component", () => {
  it("renders Home and Shopping cart links", () => {
    render(
      <BrowserRouter>
        <DesktopNavigation />
      </BrowserRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shopping cart")).toBeInTheDocument(); 
    
  });
});
