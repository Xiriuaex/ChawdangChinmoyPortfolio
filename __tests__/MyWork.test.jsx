
import { videoData } from "../data/dataContext";  
import MyWork from "../components/MyWork";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("work page testing suite", ()=>{ 
    
    test("imported data has all the properties", ()=>{
        for(let i=0; i<videoData.length; i++)
        {
            expect(videoData[i]).toHaveProperty('embededCode');
            expect(videoData[i]).toHaveProperty('title');
            expect(videoData[i]).toHaveProperty('description');
            expect(videoData[i]).toHaveProperty('category');
        }
    }) 
   
    test("test overlay function", async ()=>{
        render(<MyWork/>)
        const clickbtn= screen.getByTestId("getoverlay");
        const overlay = screen.getByTestId("overlay");
        await userEvent(clickbtn);
        expect(overlay).toBeInTheDocument();
    })
})