import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import '@testing-library/jest-dom';

describe("hire me link works", ()=>{
    test("hire me opens mailbox to mail", async ()=>{
        render(<Contact/>)
        const emailLink = screen.getByTestId("contact");
        await expect(emailLink).toHaveAttribute("href", "mailto: chinmoygogoi@gmail.com")
    })
})