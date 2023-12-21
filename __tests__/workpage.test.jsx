
import { render, screen } from "@testing-library/react";
import page from "../app/Mywork/page";
import userEvent from "@testing-library/user-event";

describe("work page functionalities:", ()=>{
    
    test("overlay behaviour", ()=>{
        render(<page/>);
        const openOverlay= screen.getByTestId("openOverlay");
        const overlay= screen.getByTestId("overlay");
        userEvent.click(openOverlay);
        expect(overlay).toBeInTheDocument();
    })
})