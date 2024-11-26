import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  it("should display the company name passed as a prop", () => {
    const companyName = "The Holiday Cabin Shop";
    
    render(<Header companyName={companyName} />); // Skickar in företagsnamnet som prop ist för hårdkodad som innan. 

    const heading = screen.getByRole("heading", { level: 1 }); // Kontrollerar att h1 finns (https://testing-library.com/docs/queries/byrole/#level)

    expect(heading).toBeVisible(); // Kontrollerar att elementet är synligt för användaren
    expect(heading).toHaveTextContent(companyName); // Kollar så att elementet innehåller korrekt text, companyName
  });
});
