// Header: För att visa sidans namn och eventuell navigering.


import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";


describe("Header component", () => {
    it("should display a company name", () => {
        render(<Header />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeVisible(); // Kontrollerar att elementet är synligt för användaren
        expect(heading).toHaveTextContent(/.+/); // Kontrollera att elementet innehåller någon text, men det behöver ej vara exakt "The Holiday Cabin Shop". 
    });
});