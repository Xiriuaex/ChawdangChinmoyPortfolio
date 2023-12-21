
import { fireEvent, render, screen } from '@testing-library/react';
import Nav from '../components/Navbar'; 
import '@testing-library/jest-dom' 
import userEvent from '@testing-library/user-event'; 

describe("testing links",()=>{
  
  test('clicking the link navigates to the correct route', async () => {
    render(<Nav />);
     
    await act(async () => {
      
      const workLink= screen.getByTestId("workRoute");  

      await userEvent.click(workLink);
    }); 
    // Check if the push function was called with the correct URL
    expect(window.location.pathname).toHaveBeenCalledWith('/Mywork'); 
      
    });
 
  test("dropdown functions properly", ()=>{
    render(<Nav/>);
    const dropdownFunction = screen.getByTestId("dropdownFunction");
    const dropdown= screen.getByTestId("hidden");
    expect(dropdown).toHaveClass("hidden"); 
    fireEvent.click(dropdownFunction);
    expect(dropdown).not.toHaveClass('hidden');
    fireEvent.click(dropdownFunction);
    expect(dropdown).toHaveClass('hidden');
  }) 
})
