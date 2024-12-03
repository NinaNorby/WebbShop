import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import { ShoppingCartPage } from "./ShoppingCartPage";


describe("ShoppingCartPage component",() =>{
    it("should render the ShoppingCart component", ()=>{
        render(
            <MemoryRouter>
                <ShoppingCartPage/>
            </MemoryRouter>
        )
    })
})