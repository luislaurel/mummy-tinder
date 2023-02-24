import { screen, render } from '@testing-library/react'
import NotFound from './NotFound'

describe("<NotFound/>", () =>{
  test("renders the home page and is viewable for the user", ()=>{
      render(<NotFound/>)
      const element = screen.getByText(/Missing Mummy/i)
      expect(element).toBeInTheDocument()
  })    
})

describe('image check', () => {
  test('image must have src = "photos/dempty.png" and alt="empty sarcophaugus"', () => {
    render(<NotFound/>);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'photos/dempty.png');
    expect(logo).toHaveAttribute('alt', 'empty sarcophaugus');
  });
});
